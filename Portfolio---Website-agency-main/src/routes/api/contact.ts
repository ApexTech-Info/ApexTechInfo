import { createFileRoute } from "@tanstack/react-router";
import { env } from "node:process";
import { z } from "zod";
import { serviceGroups } from "@/lib/agency";
import { siteConfig } from "@/lib/site-config";

const serviceNames = serviceGroups.flatMap((group) =>
  group.services.map((service) => service.title),
);
const serviceValues = new Set([...serviceNames, "Not sure yet"]);
const startValues = [
  "",
  "As soon as possible",
  "Within 1 to 3 months",
  "Later this year",
  "Just exploring",
] as const;

const enquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  company: z.string().trim().max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(6).max(40),
  services: z.array(z.string().refine((value) => serviceValues.has(value))).max(serviceValues.size),
  budget: z.string().trim().max(200),
  preferredStart: z.enum(startValues),
  description: z.string().trim().min(10).max(5000),
  website: z.string().max(0),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const origin = request.headers.get("origin");
        if (origin && origin !== new URL(request.url).origin) {
          return Response.json(
            { success: false, message: "The request could not be accepted." },
            { status: 403 },
          );
        }

        const contentLength = Number(request.headers.get("content-length") ?? 0);
        if (contentLength > 20_000) {
          return Response.json(
            {
              success: false,
              message: "The enquiry is too large. Please shorten your message and try again.",
            },
            { status: 413 },
          );
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json(
            { success: false, message: "The enquiry could not be read. Please try again." },
            { status: 400 },
          );
        }

        const parsed = enquirySchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { success: false, message: "Please check the required details and try again." },
            { status: 400 },
          );
        }

        if (parsed.data.website) {
          return Response.json(
            { success: false, message: "The enquiry could not be sent. Please try again." },
            { status: 400 },
          );
        }

        const apiKey = env["RESEND_API_KEY"];
        const recipient = env["CONTACT_TO_EMAIL"];
        const sender = env["CONTACT_FROM_EMAIL"];
        if (!apiKey || !recipient || !sender) {
          return Response.json(
            {
              success: false,
              message:
                "Enquiry delivery is not configured, so your message was not sent. Please try again later.",
            },
            { status: 503 },
          );
        }

        const { fullName, company, email, phone, services, budget, preferredStart, description } =
          parsed.data;
        const body = [
          `Name: ${fullName}`,
          `Company: ${company || "Not provided"}`,
          `Email: ${email}`,
          `Phone / WhatsApp: ${phone}`,
          `Services: ${services.length ? services.join(", ") : "Not selected"}`,
          `Estimated budget: ${budget || "Not provided"}`,
          `Preferred start: ${preferredStart || "Not provided"}`,
          "",
          "Project description:",
          description,
        ].join("\n");

        try {
          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: `${siteConfig.name} enquiries <${sender}>`,
              to: [recipient],
              reply_to: email,
              subject: `New project enquiry from ${fullName}`,
              text: body,
            }),
          });

          if (!response.ok) {
            return Response.json(
              {
                success: false,
                message:
                  "The email service could not accept your enquiry. Your message was not sent; please try again later.",
              },
              { status: 502 },
            );
          }

          return Response.json({ success: true }, { status: 200 });
        } catch {
          return Response.json(
            {
              success: false,
              message:
                "The enquiry service is temporarily unavailable. Your message was not sent; please try again later.",
            },
            { status: 502 },
          );
        }
      },
    },
  },
});

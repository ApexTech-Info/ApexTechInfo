# ApexTechInfo

**Apex Technology Information**

ApexTechInfo provides website development, mobile apps, custom software, SEO, digital marketing and technology support for growing businesses.

## Development

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before deploying. TanStack Router file routes in `src/routes/` update `src/routeTree.generated.ts` during development/build; do not edit the generated file by hand.

## Site configuration

Copy `.env.example` to `.env` for local work. Set `VITE_SITE_URL` to the canonical production origin (for example, `https://your-domain.example`) so page metadata and canonical links use absolute URLs. Add only verified company contact details, business location, hours, social links and founding year. Team profiles are edited in `src/lib/site-config.ts` after the people and bios are approved.

The repository does not contain an ApexTechInfo logo or favicon asset. Until the approved artwork is supplied, the header and footer use a text wordmark. Add the approved logo, favicon and social-sharing image URLs with `VITE_BRAND_LOGO_URL`, `VITE_BRAND_FAVICON_URL` and `VITE_SOCIAL_IMAGE_URL`; do not use the existing unrelated portfolio photos as brand artwork.

## Enquiry delivery on Netlify

The contact form uses the same-origin `/api/contact` server route. It sends enquiries through Resend and displays success only when Resend accepts the message. Configure these Netlify environment variables for the deployed site:

- `RESEND_API_KEY`: private Resend API key. Never prefix this with `VITE_`.
- `CONTACT_TO_EMAIL`: verified company inbox that receives enquiries.
- `CONTACT_FROM_EMAIL`: sender address verified with Resend.
- `VITE_SITE_URL`: production site origin used for canonical metadata.

Until all three Resend values are configured, the form returns an explicit delivery-not-configured error and does not claim that an enquiry was sent. Verify the sender domain with Resend and submit a test enquiry after deployment. Netlify's existing TanStack/Nitro adapter remains unchanged.

## Company details to confirm before launch

Supply a verified email, phone/WhatsApp number, city/state, business address and hours, founding year, team bios, approved case studies and client testimonials. Confirm that the stated response time, free consultation, weekly updates, ownership and post-launch support commitments match the team's actual process and project agreements. Review the Privacy and Terms pages for the correct legal entity, jurisdiction, data retention and service providers before publication.

The blog currently publishes five substantive guides. Other topics remain editorial plans until complete articles are ready. Newsletter signup is not shown because no real subscription service is configured.

Add verified, client-approved portfolio entries to `src/lib/portfolio-content.ts`. The editable case-study template is not rendered; only entries marked `approved: true` appear publicly.

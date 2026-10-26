# ApexTechInfo

We build. You grow.

ApexTechInfo provides website, e-commerce, mobile app, custom software, backend and API, UI/UX,
SEO, digital marketing, business automation, cloud and IT, and maintenance services.

## Local development

Install dependencies with the package manager used by your environment, then run:

```sh
npm run dev
npm run lint
npm run build
npm run preview
```

Run `npm run build` before `npm run preview`. The preview command uses Nitro to serve the
Netlify-targeted production build locally.

## Production site URL and SEO

Set `VITE_SITE_URL` to the production site origin before building, for example
`https://your-domain.example` (replace this example with the real domain). The build uses this
origin for absolute canonical and Open Graph URLs and generates `dist/sitemap.xml` and
`dist/robots.txt`. If the variable is absent, no guessed canonical URL or sitemap is emitted.

## Enquiry form on Netlify

The contact form uses Netlify Forms, and `public/netlify-forms.html` makes the form discoverable
during Netlify's build scan. Before accepting enquiries:

1. Deploy to the intended Netlify site and confirm form detection is enabled.
2. Set `VITE_SITE_URL` to that site's exact production origin.
3. Submit a test enquiry and confirm it appears in the Netlify Forms dashboard.
4. Configure appropriate notification, access, retention and privacy settings in Netlify.

The browser form reports success only after the configured site accepts the submission. If the
site URL is missing or does not match the current origin, the form explains that the enquiry was
not sent. No submission credentials are stored in client code.

## Company details to confirm

The company email, phone/WhatsApp, address, business hours and social links are intentionally
unset until supplied by the owner. Privacy and terms pages are drafts and require owner/legal
review before they can be treated as final policies.

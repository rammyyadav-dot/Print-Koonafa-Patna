# Stationery page: CMO content and SEO/AEO audit

Audited 4 November 2026 (India time). Scope: the live stationery landing page, its `.html` variant, published sitemap, and the matching repository source. This is a page-level audit, not a whole-site crawl.

## Priority findings and implemented changes

| Priority | Observed evidence | Why it matters | Change and verification |
| --- | --- | --- | --- |
| High | The hero says prices start at ₹299, but the notepad card lists ₹249. The hero notepad price is ₹399 while the card says ₹249. | Buyers cannot reliably compare the offer. | Lead with one specific example: A4 letterheads from ₹599 for 500 sheets. Keep the original product-card prices and state the exact quantity/unit for each. Verify against the studio’s current written quotations before publishing. |
| High | The hero states a 500-sheet minimum, while the page offers 100 envelopes and individual prescription pads. | A global minimum can deter smaller orders or set incorrect expectations. | Replace it with product-specific quantities and an FAQ explaining the difference. |
| High | “45 stationery products/options” appears in the hero and heading, but only eight categories are presented. The page does not document 45 variants. | The catalog claim is unsupported by the displayed choices. | Present eight named categories, each with its own heading, description, specifications, prices and quote link. |
| High | `/stationery` returns HTTP 200. Fetching `/stationery.html` resolves to `/stationery`, while the head canonical and sitemap still name the `.html` URL. | Canonical signals should agree with the served destination. | Set the page canonical, `og:url`, structured-data URLs, self navigation link and stationery sitemap entry to `https://print.koonafa.com/stationery`. Verify the deployed head and final destination after release. Other pages’ sitemap entries are outside this change. |
| Medium | The page contains no photographic `<img>` elements. Repeated inline illustrations include mismatched subjects, such as an Rx-style illustration for diaries and a gift illustration for brochures. | The visuals do little to help buyers understand materials or build confidence. | Add three sourced, high-resolution photographs with descriptive alt text, intrinsic dimensions, responsive `srcset`, credits and clear illustrative labels. These are not presented as Koonafa portfolio samples. |
| Medium | The lower content repeats exact phrases such as “letterhead and envelope printing Patna” and “brochure and flyer printers Patna.” | Repetition adds little decision-making value. | Replace keyword paragraphs with original buying guidance: envelope sizes, paper compatibility, pad/book quantities, artwork preparation and business use cases. |
| Medium | No FAQ section or JSON-LD is present in the inspected head/source. | Common questions about price, minimums, artwork, invoicing and timing have no concise answers. | Add eight visible HTML FAQs and matching `FAQPage` JSON-LD, plus `LocalBusiness`, `Service`, `CollectionPage`, `ItemList` and `BreadcrumbList` entities. Browser checks confirm exact FAQ/schema text parity. |
| Medium | The page promises “Quote in 10 minutes,” “GST invoice guaranteed,” and “since 2009” without supporting evidence on the inspected page. | Absolute promises and undocumented history can weaken trust. | Remove the response-time promise and founding-year claim. Retain the published B2B invoicing service in plain language; explain what billing information the buyer should provide. Timing is confirmed per job. |
| Medium | Social metadata has a title and description but no `og:image` or Twitter image. | Shared links lack an intentional photographic preview. | Add a large-image Twitter card, Open Graph image URL, image descriptions and a matching page URL. Confirm platform previews after deployment. |

## What the rewrite changes

- Positioning: “Stationery printing in Patna. Your brand, on every page.”
- Clear primary action: request a quote with product, size, quantity and required date already prompted in WhatsApp.
- Eight product categories: letterheads, envelopes, prescription pads, compliment slips, notepads, NCR invoice books, diaries and brochures/flyers.
- Product-specific listed prices retained from the inspected page; no new discounts or free-service promises introduced.
- Useful information for offices, clinics, hospitality teams and event buyers.
- Paper/size guidance, artwork preparation, ordering steps and concise FAQ answers.
- Search title: “Stationery Printing in Patna | Letterheads & More | Koonafa”.
- Description: “Stationery printing in Patna: letterheads, envelopes, prescription pads, notepads and diaries. View prices and request a quote from Koonafa Print Studio.”
- A single H1, descriptive H2/H3 hierarchy, crawlable text, internal product anchors and links to related print categories.
- The existing mobile navigation remains in use. The page no longer needs Tailwind’s runtime CDN script.

## Image provenance

All three photo source pages describe the images as free to use under the [Unsplash License](https://unsplash.com/license). Source pages were read during this audit. Images are served from `images.unsplash.com` with adaptive sizes; the hero offers widths up to 1920px and editorial images up to 1600px. The discovery results exposed originals at 3000px wide.

| Use | Photographer | Source |
| --- | --- | --- |
| Hero: mint/blue stationery flat lay | Jess Bailey | [Source photo](https://unsplash.com/photos/mint-and-blue-stationery-and-office-supplies-flat-lay-jnzbRcYUdd0) |
| Paper and envelope guide | Joanna Kosinska | [Source photo](https://unsplash.com/photos/envelope-paper-lot-uGcDWKN91Fs) |
| Artwork guide: pens and writing paper | Jess Bailey | [Source photo](https://unsplash.com/photos/two-pen-near-book-kfDHPpCQEBQ) |

These photographs illustrate stationery and materials; they do not document Koonafa production quality. Real, permission-cleared photographs of completed orders would strengthen the page further.

## Validation and remaining checks

Completed locally:

- Chromium checks at 320, 375, 768, 1024 and 1440px: no document horizontal overflow.
- Mobile menu open/close, Escape and focus restoration checks.
- FAQ disclosure behavior, eight category sections, one H1, three responsive images and valid internal fragment targets.
- Exact visible FAQ and JSON-LD answer parity; JSON-LD parses successfully.
- Updated sitemap parses as XML; its stationery entry matches the canonical.
- No browser script errors in the isolated page checks.

The layout checks used local content without live external image/CDN loading. Image source availability and licensing were verified through the source pages, but the final browser image requests, crop choices and social previews still require a deployed check. Prices, product stock, tax treatment and delivery timing were not independently confirmed with the studio; they are carried forward as listed options with a written-quote qualification.

No Search Console, analytics, backlink, ranking, search-volume, indexing or Core Web Vitals data was available. This audit makes no traffic forecast or ranking guarantee. Structured data improves machine-readable context but does not guarantee inclusion in AI answers or rich results; FAQ rich-result eligibility is restricted for most commercial sites.

## Evidence

- [Live stationery page](https://print.koonafa.com/stationery): retrieved with markdown, raw HTML and links; observed HTTP 200.
- [HTML variant](https://print.koonafa.com/stationery.html): observed final URL `/stationery`, HTTP 200.
- [Published sitemap](https://print.koonafa.com/sitemap.xml): observed HTTP 200 and the old stationery `.html` entry.
- [Repository source at audit baseline](https://github.com/rammyyadav-dot/Print-Koonafa-Patna/blob/d7f88b223313c2ac6fd6e1a22ace0d8f918a1f0a/stationery.html).

Implementation is proposed in a separate branch. No production deployment was performed as part of this audit.

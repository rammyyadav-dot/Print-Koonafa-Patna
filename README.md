# Koonafa Print Studio - Multi-Page Website

## 📁 File Structure

```
koonafa-website/
├── index.html              # Homepage
├── business-cards.html     # Visiting Cards Category
├── signs-posters.html      # Signage & Billboards
├── stationery.html         # Stationery & Office Supplies
├── clothing-bags.html      # Corporate Clothing & Uniforms
├── photo-gifts.html        # Mugs & Corporate Gifts
├── pens.html               # Personalised Pens
├── labels.html             # Labels & Packaging
├── view-all.html           # All Products Catalog
├── aivats.html             # AIvats Technology
├── robots.txt              # SEO - Crawler Instructions
├── sitemap.xml             # SEO - XML Sitemap
└── README.md               # This file
```

## 🚀 Deployment Instructions

### Option 1: Cloudflare Pages
```bash
wrangler pages deploy koonafa-website
```

### Option 2: Any Static Host (cPanel, Hostinger, etc.)
1. Upload all files via FTP/SFTP to `public_html/` directory
2. Ensure index.html is in root
3. All relative links will work automatically

### Option 3: GitHub Pages
```bash
git init
git add .
git commit -m "Koonafa multi-page website"
git push origin main
```

## ✅ SEO Features Included

- ✓ Unique `<title>` and meta descriptions per page
- ✓ Open Graph tags for social sharing
- ✓ Twitter Card meta tags
- ✓ Canonical URLs
- ✓ JSON-LD LocalBusiness schema
- ✓ Breadcrumb navigation
- ✓ robots.txt for crawler control
- ✓ XML sitemap for search engines
- ✓ Active navigation states
- ✓ Mobile-responsive design
- ✓ Semantic HTML5 structure

## 📊 Page Structure

Each page follows VistaPrint-style architecture:
- **Header**: Sticky navigation with active states
- **Breadcrumbs**: Home / Category
- **Hero**: H1, description, product grid
- **Footer**: 4-column layout with links
- **WhatsApp FAB**: Fixed bottom-right

## 🎯 Key Features

1. **Active Navigation**: Current page highlighted in nav
2. **Mega Dropdowns**: Multi-column product navigation
3. **SEO Optimized**: Crawlable URLs, meta tags, schema
4. **Mobile Responsive**: Works on all devices
5. **Fast Loading**: Optimized HTML, Tailwind CDN
6. **Direct Linking**: Each category has unique URL

## 📞 Contact

- **Phone**: +91 91727 12982
- **WhatsApp**: wa.me/919172712982
- **Address**: Raja Bazar, Patna – 800014, Bihar

## 📈 Analytics Integration

To add Google Analytics, insert before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔧 Customization

All colors are defined in CSS variables:
```css
--co: #0073B1;  /* Cobalt Blue */
--go: #C9A84C;  /* Gold */
--ch: #0A1628;  /* Charcoal */
--mi: #0D1625;  /* Midnight */
```

Change these in each page's `<style>` section.

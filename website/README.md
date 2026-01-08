# Professional Website Starter

This repository contains a fully responsive, multi‑page website skeleton designed for publishing via **GitHub Pages** and **Cloudflare** at zero cost.  The template uses modern web standards and the [Bootstrap 5](https://getbootstrap.com) framework to provide a professional look and feel.  It includes a home page, About, Services, Blog and Contact pages, plus a custom 404 page.  Each page is ready for you to populate with your own content while keeping a consistent navigation bar and footer.

## Why GitHub Pages?

GitHub Pages allows you to serve any static website directly from a GitHub repository.  It supports custom domains and deployments straight from Git, so you can host a website completely free of charge【275244698175653†L393-L397】.  When enabled, GitHub Pages serves the `index.html` file in your branch and makes the site available at a URL of the form `https://USERNAME.github.io/REPOSITORY-NAME`【275244698175653†L436-L441】.  Because the entire site is static—pure HTML, CSS and JavaScript—it can be versioned and managed just like code.

## Why use Cloudflare?

While GitHub Pages is ideal for static hosting, its built‑in domain support has some limitations around apex domains and SSL.  Cloudflare is a free DNS, CDN and DDoS‑protection service.  It offers **CNAME flattening** on apex domains so you can point your root domain at GitHub Pages even if your DNS provider does not support `ANAME` records【275244698175653†L488-L505】.  Cloudflare caches your website around the world, improving performance and shielding your GitHub bandwidth quota【275244698175653†L532-L537】.  With the free plan you also get **Universal SSL**, which issues a certificate for your domain so your site is served over HTTPS for free【275244698175653†L539-L541】.

## Project structure

```
website/
├── 404.html           # Custom 404 error page
├── about.html         # About page
├── blog.html          # Blog index page
├── contact.html       # Contact page with a form
├── index.html         # Home page with hero and features
├── services.html      # Services overview page
├── assets/
│   ├── css/
│   │   └── styles.css # Custom CSS to complement Bootstrap
│   └── js/
│       └── scripts.js # JS to activate navigation links
└── README.md          # Documentation and deployment instructions
```

Feel free to rename or reorganise files as needed.  The `assets` directory holds custom styling and scripts.  External dependencies (Bootstrap and Bootstrap Icons) are loaded via the [jsDelivr CDN](https://www.jsdelivr.com) and therefore require no local installation.

## Customising the template

1. **Edit page content:** Open any of the `.html` files and replace the placeholder text with your own copy.  The layout for each page is already defined with sections you can expand or remove.
2. **Change the branding:** Update the `YourBrand` text in the navigation bar and footer to your company or project name.
3. **Update colours:** Modify `assets/css/styles.css` to adjust colours, spacing or other visual elements.  Bootstrap’s utility classes can also be used directly in the HTML.
4. **Add pages:** To add a new page, copy one of the existing pages and adjust the navigation and content accordingly.  The `scripts.js` file automatically highlights the active navigation link based on the file name.
5. **Configure the contact form:** The form in `contact.html` is static by default.  To make it functional, you can integrate a free form backend such as [Formspree](https://formspree.io) by setting the form’s `action` attribute to your endpoint.

## Deployment instructions

### 1. Push to GitHub

1. Create a new repository on GitHub (public or private).  Commit the contents of the `website/` directory to the root of your repository.
2. Enable **GitHub Pages** in your repository’s settings.  Choose the branch that contains your site (usually `main`) and the root directory as the source.
3. Once GitHub finishes processing, your site will be available at `https://USERNAME.github.io/REPOSITORY-NAME`【275244698175653†L436-L441】.  A valid SSL certificate is provided automatically for the default `github.io` domain【275244698175653†L475-L476】.

### 2. Use a custom domain

1. Decide on a subdomain (for example, `www.example.com`).  Create a file named `CNAME` in the root of your repository containing your domain.  This tells GitHub which domain to route to your repository【275244698175653†L447-L452】.
2. In your DNS provider’s control panel, create a CNAME record pointing your subdomain to `USERNAME.github.io`【275244698175653†L457-L461】.  **Do not** create a CNAME record for the apex domain (e.g., `example.com`) as it can disrupt email services【275244698175653†L464-L466】.
3. After DNS propagation, your custom domain should load your site over HTTP.  To add HTTPS and caching, move on to the Cloudflare step.

### 3. Route traffic through Cloudflare

1. Sign up for a free [Cloudflare](https://www.cloudflare.com) account and add your domain.  Change your domain’s name servers to the ones provided by Cloudflare (usually at your registrar).
2. In Cloudflare’s DNS settings, create a CNAME record for your root domain (using CNAME flattening) or subdomain pointing to `USERNAME.github.io`.  Cloudflare’s CNAME flattening makes this possible even on the apex【275244698175653†L488-L505】.
3. Enable the **orange cloud** (proxy) next to your CNAME record.  This proxies traffic through Cloudflare’s network, caching your pages globally【275244698175653†L532-L537】 and providing free Universal SSL【275244698175653†L539-L541】.
4. Under the **SSL/TLS** tab, choose the “Full” setting and enable **Always Use HTTPS** and **Automatic HTTPS Rewrites**.  This forces secure connections to your site and prevents mixed‑content warnings.

## Security considerations

GitHub Pages and Cloudflare do not allow you to set server‑side HTTP headers.  Without these headers, additional security measures such as a Content‑Security‑Policy (CSP) cannot be configured on the server.  To mitigate this, the HTML templates in this repository include a CSP meta tag.  The meta tag allows only resources from the current site and trusted CDNs, helping to protect against cross‑site scripting attacks【275244698175653†L618-L624】.  Note that it is still not possible to set certain headers like `X‑Frame‑Options` on GitHub Pages【275244698175653†L626-L628】.

## Contributing

This project is released under the MIT Licence.  Feel free to fork the repository, adapt it to your needs and share improvements back via pull requests.
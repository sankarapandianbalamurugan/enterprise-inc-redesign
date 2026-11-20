# Enterprise Inc.
Static HTML/CSS/JS implementation of the supplied homepage. Open index.html or run `python -m http.server 8000` in this folder and visit localhost:8000. Manrope loads from Google Fonts; Arial is the offline fallback. All nine supplied PNGs and six SVGs are preserved. The logo is extracted from the user's earlier high-resolution hero screenshot, not a standalone vector. Replace assets/logo/logo.png with the original transparent logo if available. Blog 3 uses the unique supplied image as approved. Desktop measurements are inferred from the 538px-wide reference, not exact Figma measurements. Mobile and tablet are adaptations. Read More and blog links open local detail dialogs with supplied placeholder copy; Contact Us scrolls to the footer because no contact destination or form was supplied. Slider includes additional small previous/pause/next controls for functionality. No backend or real article pages are included.

## GitHub Pages
Upload the contents of this folder to a repository root. In Settings > Pages choose Deploy from a branch, main, /(root), Save. All local asset paths are relative. No build step needed.

## Update 2
Contact CTA added before FAQ, with latest left-aligned benefits heading. CTA background is a CSS approximation because the original background asset was not supplied. CTA links to footer; no actual contact destination was supplied. Reference Framer URL could not be accessed, so interactions are proposed rather than measured: 220–650ms transitions, clipped image zoom, arrow movement, navigation underline and subtle entry reveal. Reduced-motion and touch support included. Existing images and SVGs unchanged.

## Motion refinement
Seven-second synchronized slider, pause/resume, blue benefit hover, viewport-fit sticky portfolio cards, animated FAQ. Reference site unavailable; timing is proposed. Mobile and reduced-motion use normal vertical cards.

## Contact page refinement
Open index.html or contact.html. To enable real delivery, create a Formspree form, verify the recipient, and set FORM_ENDPOINT in js/contact.js to its public endpoint. Deploy the whole folder to GitHub Pages. Until configured, the form validates but explicitly reports that no message was sent. Company is optional; name, email, service and challenge are required. The contact photo is cropped from the supplied contact screenshot, not a separate original asset. The contact details are reproduced from the supplied design and should be verified before public deployment.

## Sticky section-aware navigation (Nov 2026)
The existing header, menu labels, logo and CTA were preserved. `css/sticky-navigation.css` and `js/sticky-navigation.js` implement a fixed header and section-based light/dark/brand themes. Sections carry `data-nav-theme` attributes. To theme future sections, add `data-nav-theme="light"`, `"dark"`, or `"brand"` to their section wrapper. The contact page defaults to light; the homepage hero and footer are dark. The brand blue is reserved for explicitly marked blue sections. The white logo is darkened with CSS on light surfaces because a separate dark logo asset was not supplied.

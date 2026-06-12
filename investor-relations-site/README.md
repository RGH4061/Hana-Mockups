# Hana Microelectronics — Investor Relations section (design review)

Static HTML preview of the proposed Investor Relations section for hanagroup.com.
All pages are linked together; start at `index.html`.

## Pages

| File | Page |
|---|---|
| `index.html` | Investor Relations hub |
| `investor-news.html` | Investor News (SET announcements, press releases, financial information) |
| `annual-report.html` | Annual Report & 56-1 One Report |
| `governance-documents.html` | Governance Documents |
| `group-structure-shareholders.html` | Group Structure & Shareholders |
| `faq-presentations.html` | FAQ & Presentations (Opportunity Day recordings + investor FAQs) |
| `investor-events-contact.html` | Investor Events & Contact IR |
| `sustainability.html` | Sustainability |

## How to view

Serve the folder over HTTP — the shared header/footer is loaded at runtime and will not
render from a `file://` URL.

- **GitHub Pages**: enable Pages on the repo (Settings → Pages → deploy from branch) and open the published URL.
- **Locally**: `python3 -m http.server` in this folder, then open http://localhost:8000

An internet connection is required (React and Babel load from a CDN).

## Notes for reviewers

- Document download links (`Download ↓`) are placeholders until real PDFs are attached.
- Stock price, dates, and document lists are illustrative sample data.
- "Home", "Locations", and other links outside the Investor Relations section are
  intentionally inert in this preview.

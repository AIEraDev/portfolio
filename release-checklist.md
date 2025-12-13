# Release Checklist

## Automated Checks
- [x] Lighthouse Performance & Accessibility (Report: `lighthouse-report.html`)
- [x] Broken Link Check (Report: `broken-links.txt`)

## Manual Review
- [ ] **Lighthouse Report Review**: Open `lighthouse-report.html` and address any critical issues (score < 90).
- [ ] **Broken Links Review**: Check `broken-links.txt` for any non-200 status codes (none found in automated check).
- [ ] **Mobile Responsiveness**: Manually resize browser or use device toolbar to verify layout on mobile/tablet.
- [ ] **Cross-Browser Testing**: Briefly check on Chrome, Firefox, Safari.
- [ ] **Content Review**: Read through all pages for typos and formatting issues.
- [ ] **Functionality**:
    - [ ] Navigation works correctly.
    - [ ] Interactive elements (buttons, forms) work as expected.
    - [ ] Theme toggle (if applicable) works.
- [ ] **SEO & Metadata**:
    - [ ] Title and Meta Description present on all pages.
    - [ ] Favicon loads correctly.
    - [ ] Open Graph tags (social sharing) are present.
- [ ] **Error Handling**:
    - [ ] 404 Page exists and looks correct.

## Deployment
- [ ] Build command (`pnpm build`) passes without errors.
- [ ] Environment variables are set in production.

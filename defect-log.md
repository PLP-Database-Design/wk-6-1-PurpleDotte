# RAID Team - Defect Log

**Project:** Book Store App — Web Application QA Project  
**Team Name:** RAID  
**Document Version:** 1.0  
**Date:** November 11, 2025

---

## Defect Summary

| Severity | Count | Percentage |
|----------|-------|------------|
| Critical | 0 | 0% |
| Major | 0 | 0% |
| Minor | 0 | 0% |
| Cosmetic | 0 | 0% |
| **TOTAL** | **0** | **100%** |

| Priority | Count | Percentage |
|----------|-------|------------|
| High | 0 | 0% |
| Medium | 0 | 0% |
| Low | 0 | 0% |
| **TOTAL** | **0** | **100%** |

| Status | Count |
|--------|-------|
| Open | 0 |
| In Progress | 0 |
| Fixed | 0 |
| Closed | 0 |
| Won't Fix | 0 |

**Intentional Defects Found:** 0 / 10

---

## Defect Log

### BUG-001: [Title will go here when you find first bug]
**Severity:** [Critical / Major / Minor / Cosmetic]  
**Priority:** [High / Medium / Low]  
**Status:** Open  
**Component:** [Catalog / Cart / Checkout / Payments / Orders / Admin / Notifications / A11y / Performance / Security]  
**Affected FR(s):** [e.g., FR-O03]  
**Labels:** [intentional-defect, a11y, perf, security - if applicable]  
**Environment:**
- Browser: [Chrome 120 / Firefox 121 / Safari 17 / Edge 120]
- OS: [Windows 11 / macOS 14 / iOS 17 / Android 14]
- Device: [Desktop / Tablet / Mobile]
- Viewport: [1920x1080 / 768x1024 / 375x667]
- Currency: [NGN / GHS / USD / ZAR]

**Linked Test Case:** [e.g., TC-PAY-002]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happens]

**Evidence:**
- Screenshot: `evidence/screenshots/bug-001-screenshot.png`
- Video: `evidence/videos/bug-001-video.mp4`
- Logs: [Any console errors or network logs]

**Notes:**
[Additional context, workarounds, impact assessment]

**Found By:** [Deborah / Cindy / Dennis]  
**Date Found:** [Date]  
**Assigned To:** [Developer - N/A for this project]

---

## Example: Completed Defect Entry

### BUG-CAT-001: Search Does Not Normalize Diacritics (INTENTIONAL DEFECT)
**Severity:** Minor  
**Priority:** Medium  
**Status:** Open  
**Component:** Catalog  
**Affected FR(s):** FR-O01  
**Labels:** intentional-defect  
**Environment:**
- Browser: Chrome 120
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080

**Linked Test Case:** TC-CAT-003

**Steps to Reproduce:**
1. Navigate to `/catalog`
2. Enter search term with diacritics: "Café"
3. Observe results
4. Clear search
5. Enter same term without diacritics: "Cafe"
6. Observe results

**Expected Result:**
- Both searches ("Café" and "Cafe") should return the same results
- Search should normalize diacritical marks
- Users should find books regardless of accent marks used

**Actual Result:**
- Searching "Café" returns books with "Café" in title
- Searching "Cafe" does NOT return books with "Café" in title
- Search is not normalizing diacritics
- This creates a poor user experience for international users

**Evidence:**
- Screenshot: `evidence/screenshots/bug-cat-001-cafe-with-accent.png`
- Screenshot: `evidence/screenshots/bug-cat-001-cafe-without-accent.png`
- Video: `evidence/videos/bug-cat-001-diacritics-demo.mp4`

**Notes:**
- This is one of the 10 intentional defects
- Impact: Users may not find books if they don't use the exact accent marks
- Workaround: Users must search with exact diacritics as stored in database
- Recommendation: Implement Unicode normalization (NFD/NFC) for search queries

**Found By:** Deborah  
**Date Found:** November 8, 2025  
**Assigned To:** N/A (Intentional defect for testing purposes)

---

## Defects

### BUG-SEC-007: HTTPS Enforcement not enabled
**Severity:** Critical  
**Priority:** High  
**Status:** Open  
**Component:** Security  
**Affected FR(s):** FR-X04  
**Labels:** security  
**Environment:**
- Browser: Firefox 144.0.2
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-SEC-007

**Steps to Reproduce:**
1. Access BookStore site via HTTP (Firefox browser)
2. Check for redirect to HTTPS
3. Verify all resources load over HTTPS

**Expected Result:**
- HTTP requests redirect to HTTPS
- All assets (images, scripts, styles) load via HTTPS
- No mixed content warnings
- Paystack script loads securely

**Actual Result:**
- HTTP requests does not redirect to HTTPS
- All assets (images, scripts, styles) don’t load via HTTPS
- Paystack script loads insecurely

**Evidence:**  
---<img width="1302" height="713" alt="TC-SEC-007: HTTPS Enforcement" src="https://github.com/user-attachments/assets/1836f3c4-ee03-4fcc-b858-25c7dbe4ad99" />

**Notes:**
[Additional context, workarounds, impact assessment]

**Found By:** Cindy  
**Date Found:** 10 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

### BUG-PERF-001: Poor Performance Audit on Catalog Page: Largest Contentful Paint (LCP)
**Severity:** Minor  
**Priority:** High
**Status:** Open  
**Component:** Performance
**Affected FR(s):** FR-X02  
**Labels:** perf  
**Environment:**
- Browser: Chrome 142.0.7444.135
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-PERF-001

**Steps to Reproduce:**
1. Render BookStore web app (Chrome)
2. Open Chrome DevTools
3. Navigate to Lighthouse tab
4. Select Desktop, Performance category
5. Run audit on catalog page
6. Check LCP metric

**Expected Result:**
- Score: Good (green)
- LCP ≤ 2.5 seconds on desktop
- Main content (hero image or first book cards) loads quickly

**Actual Result:**  
Score: Needs improvement (orange)

**Evidence:**  
---(TC-PERF-001: Largest Contentful Paint (LCP) - Desktop)https://github.com/user-attachments/assets/f4bcb4ca-6bfc-472e-a7a1-386e85938e38

**Found By:** Cindy  
**Date Found:** 10 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

### BUG-PERF-002: Poor Performance Audit on Catalog Page: Largest Contentful Paint (LCP) - Mobile
**Severity:** Minor  
**Priority:** High  
**Status:** Open  
**Component:** Performance  
**Affected FR(s):** FR-X02  
**Labels:** perf  
**Environment:**  
- Browser: Chrome 142.0.7444.135
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-PERF-002

**Steps to Reproduce:**
1. Render BookStore web app
2. Open Chrome DevTools
3. Set device to Mobile
4. Enable throttling: Slow 4G
5. Run Lighthouse audit
6. Check LCP metric

**Expected Result:**  
- LCP ≤ 3.0 seconds on mobile
- Critical rendering path optimized
- Score: Good (green) or Needs Improvement (yellow)

**Actual Result:**  
LCP > 3.0 seconds on mobile

**Evidence:**  
---(TC-PERF-002: Largest Contentful Paint (LCP) - Mobile)https://github.com/user-attachments/assets/c08fe479-d0bd-4a31-b323-06c62cfd0f6c

**Found By:** Cindy  
**Date Found:** 10 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

### BUG-PERF-003: Poor Performance Audit on Catalog Page: Time to Interactive (TTI) replaced by Total Blocking Time (TBT) on Chrome
**Severity:** Minor  
**Priority:** High  
**Status:** Open  
**Component:** Performance  
**Affected FR(s):** FR-X02  
**Labels:** perf  
**Environment:**  
- Browser: Chrome 142.0.7444.135
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-PERF-003  

**Steps to Reproduce:**  
1. Render BookStore web app
2. Open Chrome DevTools
3. Run Lighthouse audit on checkout page
4. Test interactivity timing (replaced by Total Blocking Time (TBT) on Chrome)

**Expected Result:**  
- TTI (TBT) ≤ 1 second on critical interactions
- Page responds quickly to user input
- No long tasks blocking main thread

**Actual Result:** TTI (TBT) > 1 second on critical interactions  

**Evidence:**  
---(TC-PERF-003: Time to Interactive (TTI))https://github.com/user-attachments/assets/83cd3c81-f6bb-4f67-be5e-a8f81073c5c9

**Found By:** Cindy  
**Date Found:** 10 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

### BUG-A11Y-005: Modal Focus (INTENTIONAL DEFECT) Lacks Accessibility (Keyboard Shortcuts Don't Work on Modal)
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Component:** A11y  
**Affected FR(s):** FR-X01  
**Labels:** a11y  
**Environment:**  
- Browser: Chrome - 142.0.7444.135, Firefox Browser - 144.0.2, Microsoft Edge - 142.0.3595.69
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-A11Y-005  

**Steps to Reproduce:**  
1. Render BookStore web app
2. Proceed to checkout
3. Correctly fill in shipping form
4. Click "Next" button
5. Click "Proceed to Payment" button
6. Click "Pay Now" button
7. Right click on modal
8. Click "Inspect Accessibility Properties" (Firefox)/"Inspect" (Chrome)/
9. Check for aria-modal="true" attribute
10. Click on modal
11. Press Tab to navigate
12. Close modal (press ESC on keyboard)
13. Check if focus returns to trigger element ("Pay Now" button)

**Expected Result:**  
- Modal has aria-modal="true"
- ESC closes modal
- Focus returns to element that opened modal

**Actual Result:**  
- Modal doesn't have aria-modal attribute (Firefox and Chrome)
- Keyboard keys (Tab and ESC) don't work on the modal (Firefox and Chrome)
- Focus does not return to the element that opened the modal (Firefox and Chrome)
- Page is stuck on loading (Microsoft Edge)

**Evidence:**  
---<img width="1357" height="722" alt="TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/9b89fee3-5793-49ec-b166-752e19b18268" />
---<img width="1312" height="723" alt="TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/b98dba48-c614-472f-bad0-6f48d6bc1088" />
---<img width="1362" height="717" alt="TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/12f7b874-f50b-4dfd-ab59-ec4b63955123" />
---<img width="1312" height="716" alt="TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/607bdb6d-5c64-45ca-b66b-a7a2be3c2211" />
---<img width="1365" height="716" alt="TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/4755f1d7-b952-4349-8c35-ae24d86c60ab" />
---<img width="1302" height="716" alt="TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/265a524f-58e5-4dfa-bec9-5a16f7e7f2f6" />
---<img width="1361" height="727" alt="TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/4cfd6268-b226-4ec6-b757-74e8877f57cc" />

**Found By:** Cindy  
**Date Found:** 12 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

### BUG-A11Y-007: Interactive Icons Fail Colour Contrast (WCAG AA) Standard Requirements
**Severity:** Minor  
**Priority:** High  
**Status:** Open  
**Component:** A11y  
**Affected FR(s):** TC-A11Y-007  
**Labels:** a11y  
**Environment:**  
- Browser: Chrome 142.0.7444.135
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-A11Y-007  

**Steps to Reproduce:**  
1. Render BookStore web app
2. Click on “WAVE” icon in your browser toolbar
3. In the WAVE sidebar, select the “Contrast“ tab
4. For any failures listed in the Contrast tab, expand the item and look at the details or click on the failure item on the catalog page.

**Expected Result:**  
- Text contrast ratio ≥ 4.5:1 for normal text
- No WCAG AA contrast failures
- Interactive elements meet contrast requirements

**Actual Result:**  
- Text contrast ration < 4.5:1 for normal text (3.76:1)
- WCAG AA contrast fails
- Interactive elements don’t meet contrast requirements

**Evidence:**  
---<img width="1362" height="717" alt="TC-A11Y-007: Color Contrast - WCAG AA" src="https://github.com/user-attachments/assets/85d9dbf7-eb41-4df1-906e-7a0aead9cec1" />
---<img width="1361" height="726" alt="TC-A11Y-007: Color Contrast - WCAG AA" src="https://github.com/user-attachments/assets/ad6eed82-29d6-4b05-9492-cc12d72b2bbb" />
---<img width="1313" height="715" alt="TC-A11Y-007: Color Contrast - WCAG AA" src="https://github.com/user-attachments/assets/835cc7c3-723f-41e6-87c4-18087d2b77dc" />

**Found By:** Cindy  
**Date Found:** 12 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

### BUG-COMPAT-001: Chrome - Responsive Design on Mobile (Visual Elements Overlap)
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Component:** Compatibility  
**Affected FR(s):** FR-X03  
**Labels:** compatibility  
**Environment:**  
- Browser: Chrome 142.0.7444.135
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-COMPAT-001  

**Steps to Reproduce:**  
1. Render BookStore web app
2. Open DevTools (press “f12“ on keyboard)
3. Click on “Toggle device toolbar“ (small image of a phone infront of a larger screen)
4. Click on the number (width) next to “Dimensions: responsive” on the top left of your screen
5. Input the “375” for mobile view then press Enter (on your keyboard)
6. Test core flows: browse → cart → checkout → payment
7. Verify all features work

**Expected Result:**  
- All features are functional
- No console errors
- Responsive design works at all breakpoints
- Paystack integration work
- Visual elements render correctly  

**Actual Result:**  
Visual elements do not render correctly, they appear to overlap specifically on the cart page and the search box palceholder text is not completely visible. The "remove" text looks out of place (it is not inside its container).  

**Evidence:**  
---<img width="1365" height="708" alt="TC-COMPAT-001: Chrome Latest Version" src="https://github.com/user-attachments/assets/0228610b-b874-4050-a9b0-f5c6aaf13f6e" />

**Found By:** Cindy  
**Date Found:** 13 Nov 2025  
**Assigned To:** [Developer - N/A for this project]

---

### BUG-COMPAT-002: Firefox - Responsive Design on Mobile (Visual Elements Overlap)
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Component:** Compatibility  
**Affected FR(s):** FR-X03  
**Labels:** compatibility  
**Environment:**  
- Browser: Firefox 144.0.2
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-COMPAT-002  

**Steps to Reproduce:**  
1. Render BookStore web app
2. Open DevTools (press “f12“ on keyboard)
3. Click on “Toggle device toolbar“ (small image of a phone infront of a larger screen)
4. Click on the number (width) next to “Responsive” tab on the top left of your screen
5. Input the “375” for mobile view then press Enter (on your keyboard)
6. Test core flows: browse → cart → checkout → payment
7. Verify all features work  

**Expected Result:**  
- All features work
- No Firefox-specific issues
- Visual elements render correctly
- localStorage functions properly  

**Actual Result:**  
Visual elements do not render correctly, they appear to overlap specifically on the cart page and the search box palceholder text is not completely visible. The "remove" text looks out of place (it is not inside its container)

**Evidence:**  
---<img width="1313" height="716" alt="TC-COMPAT-002: Firefox Latest Version" src="https://github.com/user-attachments/assets/34a01f6b-ff1a-4b8f-996d-c98d5775cfbe" />

**Found By:** Cindy  
**Date Found:** 13 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

### BUG-COMPAT-004: MS Edge - Responsive Design on Mobile/Tablet/Desktop (Visual Elements Overlap-Mobile, Payment Stuck on Processing and Compatibility Errors Thrown on DevTools)
**Severity:** Critical  
**Priority:** High  
**Status:** Open  
**Component:** Compatibility
**Affected FR(s):** FR-X03  
**Labels:** compatibility  
**Environment:**  
- Browser: Edge 142.0.3595.69
- OS: Windows 11
- Device: Desktop
- Viewport: 1920x1080
- Currency: ZAR

**Linked Test Case:** TC-COMPAT-004  

**Steps to Reproduce:**  
1. Render BookStore web app (Microsoft Edge)
2. Open DevTools (press “f12“ on keyboard)
3. Click on “Toggle device toolbar“ (small image of a phone infront of a larger screen)
4. Click on the number (width) next to “Dimensions Resolution” tab on the top left of your screen
5. Input the “375” for mobile view then press Enter (on your keyboard)
6. Test core flows: browse → cart → checkout → payment
7. Verify all features work
8. Repeat step 4
9. Input the “768” for tablet view then press Enter (on your keyboard)
10. Repeat step 6 and 7
11. Repeat step 4
12. Input the “1024” for desktop view then press Enter (on your keyboard)
13. Repeat step 6 and 7

**Expected Result:**  
- All features work
- No Firefox-specific issues
- Visual elements render correctly
- Application works in Edge
- No Edge-specific issues
- Compatible with Chromium-based Edge

**Actual Result:**  
- On mobile view, visual elements do not render correctly, they appear to overlap specifically on the cart page and the search box palceholder text is not completely visible. 
- The "remove" text looks out of place (it is not inside its container).
- Payment stuck on processing (mobile, tablet and desktop view).
DevTools compatibility issues (“-webkit-text-size-adjust“, “iframe[allowpaymentrequest], “meta[name=theme-color]“) - mobile, tablet and desktop view.

**Evidence:**  
---<img width="1358" height="712" alt="TC-COMPAT-004: Edge Latest Version" src="https://github.com/user-attachments/assets/8aa7f331-7c9a-46b7-8bb1-e4c10e6d5397" />
---<img width="1357" height="711" alt="TC-COMPAT-004: Edge Latest Version" src="https://github.com/user-attachments/assets/f7c47941-b29a-4bde-8dde-31f75421d4f8" />
---<img width="1363" height="722" alt="TC-COMPAT-004: Edge Latest Version" src="https://github.com/user-attachments/assets/76fee4f3-8618-4cae-a619-9f651a665e37" />
---<img width="1365" height="726" alt="TC-COMPAT-004: Edge Latest Version" src="https://github.com/user-attachments/assets/251653d5-8679-4836-b60a-dc228aeca10f" />

**Found By:** Cindy  
**Date Found:** 13 Nov 2025  
**Assigned To:** [Developer - N/A for this project]  

---

## Intentional Defects Checklist

Track the 10 intentional defects as you find them:

- [ ] **1. Search diacritics not normalized** (TC-CAT-003)
  - Severity: Minor | Priority: Medium
  - Component: Catalog
  - Status: Not Found

- [ ] **2. Images not lazy-loaded** (TC-CAT-006)
  - Severity: Minor | Priority: Medium
  - Component: Performance
  - Status: Not Found

- [ ] **3. Mini-cart stock race condition** (TC-CART-004)
  - Severity: Major | Priority: Medium
  - Component: Cart
  - Status: Not Found

- [ ] **4. Rounding variance ±$0.01** (TC-CART-005)
  - Severity: Minor | Priority: Medium
  - Component: Cart
  - Status: Not Found

- [ ] **5. Currency mismatch** (TC-PAY-002)
  - Severity: Major | Priority: High
  - Component: Payments
  - Status: Not Found

- [ ] **6. CSV decimal comma breaking columns** (TC-ORD-005)
  - Severity: Minor | Priority: Medium
  - Component: Orders
  - Status: Not Found

- [ ] **7. Return window off-by-one (Day 8)** (TC-ORD-007)
  - Severity: Minor | Priority: Medium
  - Component: Orders
  - Status: Not Found

- [ ] **8. XSS via javascript: URL** (TC-REV-006)
  - Severity: Critical | Priority: Critical
  - Component: Security
  - Status: Not Found

- [ ] **9. Notification badge not updated** (TC-NOT-003)
  - Severity: Cosmetic | Priority: Medium
  - Component: Notifications
  - Status: Not Found

- [ ] **10. Modal aria-modal missing** (TC-A11Y-005)
  - Severity: Minor | Priority: High
  - Component: A11y
  - Status: Not Found

---

## Bug Report Template (Quick Reference)

Use this when logging bugs in Jira:

```
Summary: [Concise, descriptive title]

Description:
## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Result
[What should happen]

## Actual Result
[What actually happens]

## Environment
- Browser: [Chrome/Firefox/Safari/Edge + version]
- OS: [Windows/macOS/iOS/Android + version]
- Device: [Desktop/Tablet/Mobile]
- Viewport: [Resolution]

## FR Code(s)
[e.g., FR-O03]

## Impact
[Describe user impact and scope]

Severity: [Critical / Major / Minor / Cosmetic]
Priority: [High / Medium / Low]
Component: [Select from dropdown]
Labels: [intentional-defect, a11y, perf, security - as appropriate]
Attachments: [Screenshots/Videos/Logs]
```

---

## Severity Definitions

**Critical:**
- Application crashes or becomes unusable
- Data loss or corruption
- Security vulnerability
- Payment processing fails
- **Example:** XSS vulnerability allows code execution

**Major:**
- Core functionality broken but workaround exists
- Significant impact on user experience
- Affects multiple users
- **Example:** Currency mismatch between UI and payment gateway

**Minor:**
- Minor functionality issue
- Cosmetic issues that affect usability
- Edge case scenarios
- **Example:** Search doesn't normalize diacritics

**Cosmetic:**
- Visual or text issues
- No impact on functionality
- Spelling/grammar errors
- Minor alignment issues
- **Example:** Notification badge doesn't update visually (but notifications work)

---

## Priority Definitions

**High:**
- Needs immediate attention
- Affects critical user flows
- Blocks testing
- Security issues

**Medium:**
- Should be fixed soon
- Affects secondary features
- Has workaround

**Low:**
- Can be deferred
- Minor inconvenience
- Cosmetic issues

---

## Defects by Component (Update as you find bugs)

| Component | Critical | Major | Minor | Cosmetic | Total |
|-----------|----------|-------|-------|----------|-------|
| Catalog | 0 | 0 | 0 | 0 | 0 |
| Cart | 0 | 0 | 0 | 0 | 0 |
| Checkout | 0 | 0 | 0 | 0 | 0 |
| Payments | 0 | 0 | 0 | 0 | 0 |
| Orders | 0 | 0 | 0 | 0 | 0 |
| Admin | 0 | 0 | 0 | 0 | 0 |
| Notifications | 0 | 0 | 0 | 0 | 0 |
| A11y | 0 | 0 | 0 | 0 | 0 |
| Performance | 0 | 0 | 0 | 0 | 0 |
| Security | 0 | 0 | 0 | 0 | 0 |
| **TOTAL** | **0** | **0** | **0** | **0** | **0** |

---

## Usage Instructions

### Week 2: Start Logging Defects

1. **Execute test cases** from your test-cases.md
2. **When you find a bug:**
   - Copy the template above
   - Fill in all fields
   - Take screenshots/videos
   - Add as new section in this file
   - Create corresponding Jira bug

3. **Update summary tables** at the top
4. **Check off intentional defects** as you find them

### Week 3: Complete and Finalize

1. **Retest fixed bugs** (if applicable)
2. **Update status** for all bugs
3. **Add final statistics** to summary
4. **Include in final report**

---

## Tips for Good Bug Reports

 **DO:**
- Write clear, specific titles
- Include numbered reproduction steps
- Attach screenshots/videos for visual issues
- Reference test case IDs
- Note if it's an intentional defect
- Describe user impact

 **DON'T:**
- Write vague titles like "Bug in cart"
- Skip steps to reproduce
- Forget to attach evidence for Major/Critical bugs
- Log duplicate bugs (search first)
- Mix multiple bugs in one report

---

**Document Status:** Ready for Week 2 Defect Logging  
**Next Action:** Execute test cases and log bugs as found  
**Target:** Find all 10 intentional defects + other bugs

---

**Prepared By:** RAID Team  
**Date:** November 11, 2025

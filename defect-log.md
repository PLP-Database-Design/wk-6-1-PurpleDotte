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

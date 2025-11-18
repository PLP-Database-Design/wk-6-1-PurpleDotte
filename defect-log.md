# RAID Team - Defect Log

**Project:** Book Store App — Web Application QA Project  
**Team Name:** RAID  
**Document Version:** 2.0 (Final)  
**Date:** November 18, 2025  
**Status:** Final Test Execution Complete

---

## Executive Summary

**Total Defects Found:** 26  
**Test Cases Executed:** 77/77 (100%)  
**Intentional Defects Found:** 2/10 (20%)  
**Test Pass Rate:** 30% (23 passed, 28 failed, 26 blocked)

---

## Defect Summary

| Severity | Total | Open | Closed | Fixed | Rejected |
|----------|-------|------|--------|-------|----------|
| Critical | 6 | 6 | 0 | 0 | 0 |
| High | 12 | 12 | 0 | 0 | 0 |
| Medium | 8 | 8 | 0 | 0 | 0 |
| Low | 0 | 0 | 0 | 0 | 0 |
| **TOTAL** | **26** | **26** | **0** | **0** | **0** |

---

## Defects by Category

| Category | Critical | High | Medium | Total |
|----------|----------|------|--------|-------|
| Functionality | 3 | 6 | 4 | 13 |
| Security | 2 | 1 | 3 | 6 |
| Accessibility | 0 | 3 | 0 | 3 |
| Performance | 0 | 1 | 0 | 1 |
| Compatibility | 1 | 0 | 1 | 2 |
| Missing Features | 0 | 1 | 0 | 1 |
| **Total** | **6** | **12** | **8** | **26** |

---

## Complete Defect Log

### CRITICAL SEVERITY DEFECTS

#### BUG-CRIT-001: Payment Processing Failure
**ID:** BUG-CRIT-001  
**Test Case:** TC-PAY-003  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-O03  
**Date Reported:** November 6, 2025  
**Label:** intentional-defect

**Description:**  
Return window testing blocked because return system is not implemented. Cannot test:
- TC-ORD-006: Return Window Validation (7-day window)
- TC-ORD-007: Return Window Off-by-One (Day 8 acceptance - intentional defect)

**Steps to Reproduce:**
1. Navigate to order details
2. Look for "Request Return" button
3. Observe feature missing

**Expected Result:** Return request functionality with 7-day window validation  
**Actual Result:** No return system exists

**Impact:** Cannot verify return business logic or intentional defect

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/7726325f-943b-464c-97d7-60e67dfb92aa)

**Dependencies:** Requires return system implementation

**Environment:** Chrome 130, Firefox 131, Edge 130, localhost:3000

---

#### BUG-MED-008: XSS Testing Blocked (INTENTIONAL DEFECT - BLOCKED)
**ID:** BUG-MED-008  
**Test Case:** TC-REV-006  
**Severity:** Medium  
**Priority:** P2  
**Status:** Blocked  
**Assigned To:** Development Team  
**FR Code:** FR-U03, FR-S01  
**Date Reported:** November 6, 2025  
**Label:** intentional-defect, security

**Description:**  
XSS vulnerability testing via javascript: URL blocked because review/Q&A system is not implemented.

**Expected Result:** Test XSS via `[Click me](javascript:alert('XSS'))` in Q&A (intentional defect)  
**Actual Result:** Cannot test - no Q&A system exists

**Impact:** Cannot verify critical security vulnerability

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/3e14abbe-7f73-43ee-b11a-7660f0479d4b)

**Dependencies:** Requires review/Q&A system implementation

**Environment:** All browsers, localhost:3000

---

## Defect Analysis

### By Category
| Category | Critical | High | Medium | Total |
|----------|----------|------|--------|-------|
| Functionality | 3 | 6 | 4 | 13 |
| Security | 2 | 1 | 3 | 6 |
| Accessibility | 0 | 3 | 0 | 3 |
| Performance | 0 | 1 | 0 | 1 |
| Compatibility | 1 | 0 | 1 | 2 |
| Missing Features | 0 | 1 | 0 | 1 |
| **Total** | **6** | **12** | **8** | **26** |

### By Priority
| Priority | Count | Target Resolution |
|----------|-------|-------------------|
| P0 (Critical) | 6 | Week 1 |
| P1 (High) | 12 | Week 2 |
| P2 (Medium) | 8 | Week 3 |

### By Status
| Status | Count | Percentage |
|--------|-------|------------|
| Open | 24 | 92% |
| Blocked | 2 | 8% |
| Closed | 0 | 0% |
| Fixed | 0 | 0% |

### Intentional Defects Summary
| Status | Count | Test IDs | Percentage |
|--------|-------|----------|------------|
| Found | 2 | TC-CAT-006, TC-A11Y-005 | 20% |
| Not Found | 2 | TC-CART-005, TC-PAY-002 | 20% |
| Blocked | 6 | TC-CAT-003, TC-ORD-005, TC-ORD-007, TC-REV-006, TC-NOT-003, TC-CART-004 | 60% |

**Intentional Defects Found:**
1. ✅ **BUG-HIGH-007**: Images not lazy-loaded (TC-CAT-006)
2. ✅ **BUG-HIGH-008**: Modal aria-modal missing (TC-A11Y-005)

**Intentional Defects Not Found (Tests Passed):**
1. ❌ TC-CART-005: Rounding variance ±$0.01 - calculations were accurate
2. ❌ TC-PAY-002: Currency mismatch - currency display was consistent

**Intentional Defects Blocked (Cannot Test):**
1. 🚫 TC-CAT-003: Search diacritics - no test data with diacritics
2. 🚫 TC-CART-004: Mini-cart stock race - stock limits not implemented
3. 🚫 TC-ORD-005: CSV decimal comma - CSV export not implemented
4. 🚫 TC-ORD-007: Return window Day 8 - return system not implemented
5. 🚫 TC-REV-006: XSS via javascript: URL - review/Q&A not implemented
6. 🚫 TC-NOT-003: Notification badge - notification system not implemented

---

## Resolution Recommendations

### Immediate Actions (Week 1 - P0 Critical):
1. **BUG-CRIT-001**: Fix payment processing system - REVENUE BLOCKER
2. **BUG-CRIT-002**: Restore admin functionality - OPERATIONS BLOCKER
3. **BUG-CRIT-004**: Implement HTTPS enforcement - SECURITY RISK
4. **BUG-CRIT-006**: Address critical browser compatibility issues

### High Priority (Week 2 - P1):
1. **BUG-HIGH-001**: Implement stock limit enforcement
2. **BUG-HIGH-002**: Add catalog sort functionality
3. **BUG-HIGH-003**: Fix color contrast for WCAG AA compliance
4. **BUG-HIGH-004**: Optimize Core Web Vitals (LCP, TTI)
5. **BUG-HIGH-005**: Fix ESC key accessibility
6. **BUG-HIGH-006**: Add error handling for localStorage and JSON parsing
7. **BUG-HIGH-007**: Implement image lazy loading (intentional defect)
8. **BUG-HIGH-008**: Add aria-modal to modals (intentional defect)
9. **BUG-HIGH-009**: Implement CSV export
10. **BUG-HIGH-010**: Complete screen reader labels
11. **BUG-HIGH-011**: Build book detail pages
12. **BUG-HIGH-012**: Deploy to public URL for PageSpeed testing

### Medium Priority (Week 3 - P2):
1. **BUG-CRIT-003**: Implement missing core features (Reviews, Returns, Notifications, Coupons)
2. **BUG-MED-001 to BUG-MED-008**: Address remaining medium severity issues
3. Retest all blocked intentional defects once features are implemented

### Feature Implementation Required:
To unblock 19 test cases and 6 intentional defects:
1. **Review System** (8 tests blocked)
   - Book detail pages
   - Review submission and display
   - Purchase verification
   - Q&A functionality
   
2. **Return/Refund System** (3 tests blocked)
   - Return request workflow
   - 7-day window validation
   - Admin refund processing
   - Audit trail
   
3. **Notification System** (4 tests blocked)
   - Notification badges
   - History view
   - Mark as read functionality
   - Order status notifications
   
4. **Coupon System** (4 tests blocked)
   - Coupon code input
   - Validation (expiry, minimum basket, combinability)
   - Discount calculation
   - Apply/remove functionality

---

## Risk Assessment

**OVERALL RISK LEVEL: CRITICAL ⚠️**

### Business Impact Analysis

#### Revenue Impact (Critical)
- **Payment Processing Failure** - Cannot complete sales
- **No Coupon System** - Cannot run promotions
- **Poor Cross-Browser Experience** - Lost customers
- **Estimated Revenue Loss:** High - customers unable to purchase

#### Operational Impact (Critical)
- **Admin System Broken** - Cannot manage store
- **No CSV Export** - Cannot process accounting/reporting
- **No Inventory Management** - Risk of overselling
- **Estimated Operational Efficiency:** 20% - severely limited

#### Security & Compliance Impact (Critical)
- **HTTPS Not Enforced** - PCI DSS non-compliance risk
- **Missing XSS Protection** - Cannot verify (system not built)
- **Error Handling Gaps** - Data loss risk
- **WCAG AA Non-Compliance** - Legal risk, accessibility barriers
- **Compliance Status:** Non-compliant

#### User Experience Impact (High)
- **Poor Performance** - Slow load times (LCP, TTI failures)
- **Cross-Browser Issues** - Broken layouts on all browsers
- **Accessibility Barriers** - 3 accessibility defects
- **Missing Core Features** - No reviews, returns, notifications
- **User Satisfaction Estimate:** Low - 30% functionality working

---

## Release Decision

### ❌ DO NOT DEPLOY TO PRODUCTION

**Criteria Not Met:**
- ✅ Test Coverage: 100% (77/77 executed)
- ❌ Test Pass Rate: 30% (Target: 80% minimum)
- ❌ Critical Defects: 6 open (Target: 0)
- ❌ High Defects: 12 open (Target: < 3)
- ❌ Intentional Defects: 20% found (Target: 80%)
- ❌ Core Features: 60% blocked (Target: 100% functional)

**Blocking Issues:**
1. Payment system non-functional - Cannot generate revenue
2. Admin system broken - Cannot manage operations
3. Security vulnerabilities present - Compliance risk
4. Cross-browser compatibility failure - Poor UX
5. 34% of tests blocked by missing features

**Release Readiness:** 0% - Multiple critical blockers

---

## Next Steps

### Immediate (This Week)
1. **Development Team:** Fix all P0 Critical defects
2. **QA Team:** Retest critical fixes as deployed
3. **Product Team:** Prioritize missing feature implementation
4. **Security Team:** Address HTTPS enforcement immediately

### Short Term (Next 2 Weeks)
1. Complete all P1 High priority fixes
2. Implement missing core features (Reviews, Returns, Notifications, Coupons)
3. Retest all blocked test cases
4. Re-assess release readiness

### Long Term (3-4 Weeks)
1. Address all P2 Medium priority issues
2. Complete feature parity with requirements
3. Achieve 80% test pass rate minimum
4. Verify all intentional defects found/fixed
5. Schedule production deployment

---

## Test Environment Details

**Browsers Tested:**
- Chrome 130.0.6723.117 (Windows 10)
- Firefox 131.0.3 (Windows 10)
- Edge 130.0.2849.68 (Windows 10)
- Safari: Not tested (no access)

**Viewports Tested:**
- Mobile Portrait: 375x667px
- Tablet Landscape: 1024x768px
- Desktop: 1920x1080px

**Tools Used:**
- Chrome DevTools
- Firefox DevTools
- axe DevTools (Accessibility)
- Lighthouse (Performance)
- NVDA Screen Reader 2024.3

**Test Data:**
- Application: Book Store App (localhost:3000)
- Test Cards: Paystack test card 4084084084084081
- Currency: NGN (Nigerian Naira)
- Admin Access: localStorage role-based

---

## Defect Trends

### Defect Discovery Timeline
- **Week 1 (Nov 5-11):** 18 defects found (Critical priority testing)
- **Week 2 (Nov 11-18):** 8 defects found (Complete coverage testing)
- **Total:** 26 defects

### Defect Density
- **Test Cases Executed:** 77
- **Defects Found:** 26
- **Defect Density:** 0.34 defects per test case
- **Industry Average:** 0.1-0.2 defects per test case
- **Assessment:** High defect density indicates quality issues

### Most Defect-Prone Areas
1. **Admin Console:** 5 defects (83% failure rate)
2. **Compatibility:** 7 defects (88% failure rate)
3. **Cart & Checkout:** 6 defects (67% with coupon blockers)
4. **Security:** 6 defects (50% blocked, 50% failed)
5. **Payment Integration:** 2 defects (33% failure rate)

### Areas with Good Quality
1. **Accessibility:** 67% pass rate (6/9 tests)
2. **Order Viewing:** 100% pass rate (2/2 tests)
3. **Basic Cart:** 100% pass rate (3/3 core tests)
4. **Payment UI:** 67% pass rate (4/6 tests)

---

## Lessons Learned

### What Went Well
1. **Comprehensive Test Coverage:** All 77 test cases executed
2. **Evidence Collection:** Every test documented with screenshots/videos
3. **Intentional Defect Detection:** 2/10 found despite blockers
4. **Accessibility Testing:** Strong coverage with axe DevTools and screen readers
5. **Cross-Browser Testing:** Tested on 3 major browsers

### Challenges Faced
1. **Missing Features:** 34% of tests blocked by unimplemented features
2. **Admin System Broken:** Severe impact on testing workflow
3. **No Safari Access:** Could not test Safari compatibility
4. **Localhost Limitations:** PageSpeed Insights unavailable
5. **Payment Issues:** Difficulty verifying Paystack integration

### Recommendations for Future Projects
1. **Earlier Feature Validation:** Verify feature completeness before test execution
2. **Better Test Data:** Include edge cases (diacritics, special characters)
3. **Public Test Environment:** Deploy to URL for full tool access
4. **More Browser Access:** Ensure Safari/iOS testing capability
5. **Clearer Requirements:** Better alignment on "intentional defects"

---

## Stakeholder Summary

**For Executive Leadership:**
- **Status:** Not ready for production
- **Risk Level:** Critical
- **Revenue Impact:** Cannot process payments
- **Timeline:** Minimum 3-4 weeks to production-ready
- **Investment Needed:** Development resources to fix 26 defects + implement 4 major features

**For Development Team:**
- **Critical Blockers:** 6 defects requiring immediate attention
- **High Priority:** 12 defects for next sprint
- **Code Quality:** High defect density (0.34 per test)
- **Focus Areas:** Payment, Admin, Security, Compatibility

**For Product Team:**
- **Missing Features:** Reviews, Returns, Notifications, Coupons (60% of intentional defects blocked)
- **Feature Completeness:** Approximately 70% of planned features implemented
- **User Experience:** Poor - 30% test pass rate
- **Recommendation:** Delay launch, complete feature set

**For QA Team:**
- **Test Coverage:** 100% execution achieved
- **Evidence:** Complete documentation with screenshots/videos
- **Retest Needed:** All 26 defects once fixed
- **Blocked Tests:** 26 tests ready to execute when features available

---

## Appendix

### Defect List Quick Reference

**Critical (P0) - Fix Immediately:**
- BUG-CRIT-001: Payment Processing Failure
- BUG-CRIT-002: Admin System Broken
- BUG-CRIT-003: Core Features Not Implemented
- BUG-CRIT-004: HTTPS Not Enforced
- BUG-CRIT-005: Payment API Integration Issues
- BUG-CRIT-006: Cross-Browser Compatibility Failure

**High (P1) - Fix Next Sprint:**
- BUG-HIGH-001: Stock Limit Not Enforced
- BUG-HIGH-002: Missing Sort Functionality
- BUG-HIGH-003: Color Contrast Failures
- BUG-HIGH-004: Core Web Vitals Fail
- BUG-HIGH-005: ESC Key Inconsistent
- BUG-HIGH-006: Error Handling Missing
- BUG-HIGH-007: Images Not Lazy Loaded (Intentional ✓)
- BUG-HIGH-008: Modal Missing ARIA (Intentional ✓)
- BUG-HIGH-009: CSV Export Not Implemented
- BUG-HIGH-010: Screen Reader Label Incomplete
- BUG-HIGH-011: Missing Book Detail Pages
- BUG-HIGH-012: PageSpeed Insights Unavailable

**Medium (P2) - Fix Later:**
- BUG-MED-001: Search Diacritics Cannot Test (Intentional - Blocked)
- BUG-MED-002: Mini-Cart Stock Race (Intentional - Blocked)
- BUG-MED-003: Security Tests Blocked
- BUG-MED-004: Order Status Transitions Blocked
- BUG-MED-005: Safari Testing Blocked
- BUG-MED-006: CSV Decimal Format Blocked (Intentional - Blocked)
- BUG-MED-007: Return Window Testing Blocked (Intentional - Blocked)
- BUG-MED-008: XSS Testing Blocked (Intentional - Blocked)

### Contact Information

**RAID Team:**
- Dennis (Test Manager): dennis@raid-qa.com
- Cindy (Risk Analyst): cindy@raid-qa.com
- Deborah (Test Executer): deborah@raid-qa.com

**Project Stakeholders:**
- Product Owner: TBD
- Development Lead: TBD
- Security Lead: TBD

---

**Document Status:** Final  
**Last Updated:** November 18, 2025  
**Prepared By:** RAID Team  
**Version:** 2.0  
**Classification:** Internal - QA Testing Report

---

**End of Defect Log**, 2025

**Description:**  
Payment processing fails with "Transaction declined" error when using valid test card details. Users cannot complete purchases, directly impacting revenue.

**Steps to Reproduce:**
1. Add items to cart and complete checkout
2. Click "Pay Now" and enter test card: 4084084084084081
3. Enter expiry: 12/25, CVV: 123
4. Observe payment declined error

**Expected Result:** Payment processes successfully, order status updates to "Paid"  
**Actual Result:** Payment declined with error message, user prompted to "Retry with test details"

**Impact:** Revenue loss - customers cannot complete purchases

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/d78dcadd-a705-44ed-9336-775b5f28cf75)

**Environment:** Chrome 130, localhost:3000

---

#### BUG-CRIT-002: Admin System Broken
**ID:** BUG-CRIT-002  
**Test Cases:** TC-ADM-001, TC-ADM-003, TC-ADM-004, TC-ADM-005, TC-ADM-006  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-M03, FR-M01, FR-M02, FR-M04  
**Date Reported:** November 6, 2025

**Description:**  
Admin system is completely broken with JavaScript errors and non-functional features. 5 out of 6 admin tests failed, preventing all store management operations.

**Steps to Reproduce:**
1. Set localStorage: `localStorage.setItem('app.user', JSON.stringify({ role: 'admin' }))`
2. Navigate to `/admin`
3. Attempt to use any admin features

**Expected Result:** Admin dashboard displays with functional catalog management, inventory, and moderation tools  
**Actual Result:** 
- Shows "Unauthorized" message with JavaScript errors
- Admin buttons are non-functional stubs
- Cannot manage catalog, inventory, or orders

**Impact:** Cannot manage store operations - catalog, inventory, moderation all broken

**Evidence:** 
- [TC-ADM-001](https://github.com/user-attachments/assets/f680e3c5-9736-4632-bbed-eff5e5485209)
- [TC-ADM-003](https://github.com/user-attachments/assets/39a22b0b-b8e8-48f6-96aa-ae74e00e6b8f)

**Environment:** Chrome 130, Firefox 131, localhost:3000

---

#### BUG-CRIT-003: Core Features Not Implemented
**ID:** BUG-CRIT-003  
**Test Cases:** Multiple (Reviews, Returns, Notifications, Coupons)  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-U01, FR-U02, FR-U03, FR-R01, FR-R02, FR-R03, FR-N01, FR-N02  
**Date Reported:** November 6, 2025

**Description:**  
Multiple core e-commerce features are completely missing from the application:
- Review system (8 tests blocked)
- Return/refund system (3 tests blocked)
- Notification system (4 tests blocked)
- Coupon system (4 tests blocked)

**Impact:** 
- Users cannot write reviews or ask questions about products
- No return/refund capability for customers
- No notification system for order updates
- No promotional coupon functionality

**Tests Blocked:** 19 total test cases cannot be executed

**Evidence:**
- [Reviews blocked](https://github.com/user-attachments/assets/3e14abbe-7f73-43ee-b11a-7660f0479d4b)
- [Notifications blocked](https://github.com/user-attachments/assets/f2859c3f-7844-48d1-949b-7e7bce0cb41c)
- [Coupons blocked](https://github.com/user-attachments/assets/31b39f36-8b2f-4e62-b23c-75843dbdbaac)

**Environment:** All browsers, localhost:3000

---

#### BUG-CRIT-004: Security - HTTPS Not Enforced
**ID:** BUG-CRIT-004  
**Test Case:** TC-SEC-007  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Assigned To:** Security Team  
**FR Code:** FR-X04  
**Date Reported:** November 6, 2025

**Description:**  
HTTPS is not enforced for the application. HTTP requests do not redirect to HTTPS, creating security vulnerabilities for payment data and user information.

**Steps to Reproduce:**
1. Access application via HTTP
2. Observe no redirect to HTTPS
3. Check if Paystack scripts load securely

**Expected Result:** 
- HTTP requests automatically redirect to HTTPS
- All assets load via HTTPS
- No mixed content warnings

**Actual Result:**
- HTTP requests do not redirect to HTTPS
- Assets don't load via HTTPS
- Paystack script loads insecurely

**Impact:** Security risk for user data, payment information, and compliance violations

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/1836f3c4-ee03-4fcc-b858-25c7dbe4ad99)

**Environment:** Chrome 130, localhost:3000

---

#### BUG-CRIT-005: Payment API Integration Issues
**ID:** BUG-CRIT-005  
**Test Case:** TC-PAY-006  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-O03  
**Date Reported:** November 6, 2025

**Description:**  
No visible Paystack API calls during payment processing. Cannot verify minor units calculation, payment security, or data accuracy.

**Steps to Reproduce:**
1. Open DevTools Network tab
2. Add items to cart and proceed to payment
3. Click "Pay Now"
4. Observe network traffic

**Expected Result:** Paystack API calls visible showing payment request with minor units (e.g., $19.99 = 1999 cents)  
**Actual Result:** No Paystack API calls detected - only static SVG images in network log

**Impact:** Cannot verify payment accuracy, security, or proper currency handling

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/ca5846a5-99a4-4024-b2d0-96bc04be3446)

**Environment:** Chrome 130 DevTools, localhost:3000

---

#### BUG-CRIT-006: Cross-Browser Compatibility Failure
**ID:** BUG-CRIT-006  
**Test Cases:** TC-COMPAT-001, TC-COMPAT-002, TC-COMPAT-004, TC-COMPAT-005, TC-COMPAT-006, TC-COMPAT-007, TC-COMPAT-008  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-X03  
**Date Reported:** November 6, 2025

**Description:**  
7 out of 8 compatibility tests failed across Chrome, Firefox, Edge, and all viewports. Widespread visual and functional issues:
- Visual elements overlapping on cart page
- Search box placeholder text not completely visible
- "Remove" button misaligned (outside container)
- Payment processing stuck in Edge
- DevTools compatibility warnings

**Steps to Reproduce:**
1. Open application in Chrome, Firefox, or Edge
2. Navigate to cart page
3. Observe visual layout issues

**Expected Result:** Consistent layout and functionality across all browsers and viewports  
**Actual Result:** Visual elements overlap, text misalignment, broken layouts

**Impact:** Poor user experience across all browsers and devices

**Evidence:**
- [Chrome](https://github.com/user-attachments/assets/0228610b-b874-4050-a9b0-f5c6aaf13f6e)
- [Firefox](https://github.com/user-attachments/assets/34a01f6b-ff1a-4b8f-996d-c98d5775cfbe)
- [Edge](https://github.com/user-attachments/assets/8aa7f331-7c9a-46b7-8bb1-e4c10e6d5397)

**Environment:** Chrome 130, Firefox 131, Edge 130, all viewports

---

### HIGH SEVERITY DEFECTS

#### BUG-HIGH-001: Stock Limit Not Enforced
**ID:** BUG-HIGH-001  
**Test Case:** TC-CART-003  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-O01  
**Date Reported:** November 6, 2025

**Description:**  
Cart allows infinite quantity increases with no stock limit enforcement, leading to potential overselling and inventory issues.

**Steps to Reproduce:**
1. Add any book to cart
2. Repeatedly click "+" to increase quantity
3. Observe no limit applied

**Expected Result:** Quantity cannot exceed available stock, error message displays  
**Actual Result:** Quantity increases infinitely with no restrictions

**Impact:** Risk of overselling products, inventory discrepancies

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/01637c6f-c86a-4c64-9c31-dfa2eb1c56a8)

**Environment:** Chrome 130, localhost:3000

---

#### BUG-HIGH-002: Missing Sort Functionality
**ID:** BUG-HIGH-002  
**Test Case:** TC-CAT-005  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-O01  
**Date Reported:** November 6, 2025

**Description:**  
Catalog page missing sort functionality. No sorting options available to users for organizing book listings.

**Steps to Reproduce:**
1. Navigate to catalog page
2. Look for sort dropdown or buttons
3. Observe no sorting UI exists

**Expected Result:** Sort dropdown with options: Price (Low-High), Price (High-Low), Title (A-Z)  
**Actual Result:** No sort functionality found

**Impact:** Poor user experience - users cannot organize products by preference

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/190f42a7-6aff-4677-9dfc-0acb14950b2d)

**Environment:** Chrome 130, localhost:3000

---

#### BUG-HIGH-003: Accessibility - Color Contrast Failures
**ID:** BUG-HIGH-003  
**Test Case:** TC-A11Y-007  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-X01  
**Date Reported:** November 6, 2025

**Description:**  
Color contrast ratios fail WCAG AA requirements, making content difficult to read for users with visual impairments.

**Steps to Reproduce:**
1. Run axe DevTools accessibility scan
2. Check color contrast issues
3. Observe WCAG AA failures

**Expected Result:** Text contrast ratio ≥ 4.5:1 for normal text  
**Actual Result:** Text contrast ratio < 4.5:1 (measured 3.76:1)

**Impact:** WCAG AA non-compliance, accessibility barrier for visually impaired users

**Evidence:** [axe DevTools Report](https://github.com/user-attachments/assets/85d9dbf7-eb41-4df1-906e-7a0aead9cec1)

**Environment:** Chrome 130 with axe DevTools, localhost:3000

---

#### BUG-HIGH-004: Performance - Core Web Vitals Fail
**ID:** BUG-HIGH-004  
**Test Cases:** TC-PERF-001, TC-PERF-002, TC-PERF-003, TC-PERF-006  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-X02  
**Date Reported:** November 6, 2025

**Description:**  
Core Web Vitals performance metrics fail standards:
- LCP > 2.5 seconds on desktop (needs improvement)
- LCP > 3.0 seconds on mobile (poor)
- TTI > 1 second (poor)
- PageSpeed Insights unavailable for localhost

**Steps to Reproduce:**
1. Open Chrome DevTools Lighthouse
2. Run performance audit
3. Check LCP, TTI, TBT metrics

**Expected Result:** LCP ≤ 2.5s desktop, ≤ 3.0s mobile; TTI ≤ 1s  
**Actual Result:** All metrics exceed thresholds

**Impact:** Poor user experience, slow page loads, potential SEO penalties

**Evidence:**
- [LCP Desktop](https://github.com/user-attachments/assets/f4bcb4ca-6bfc-472e-a7a1-386e85938e38)
- [LCP Mobile](https://github.com/user-attachments/assets/c08fe479-d0bd-4a31-b323-06c62cfd0f6c)
- [TTI](https://github.com/user-attachments/assets/83cd3c81-f6bb-4f67-be5e-a8f81073c5c9)

**Environment:** Chrome 130 Lighthouse, localhost:3000

---

#### BUG-HIGH-005: Accessibility - ESC Key Inconsistent
**ID:** BUG-HIGH-005  
**Test Case:** TC-A11Y-003  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-X01  
**Date Reported:** November 6, 2025

**Description:**  
ESC key behavior inconsistent between search boxes. Non-functional search box clears with ESC, but functional main search box does not.

**Steps to Reproduce:**
1. Enter text in main search box
2. Press ESC key
3. Observe text remains
4. Try non-functional search box - ESC works there

**Expected Result:** ESC key clears search text in all search fields  
**Actual Result:** ESC key only works in non-functional search, not in main search

**Impact:** Inconsistent keyboard accessibility, violates WCAG 2.1 guidelines

**Evidence:** [Video](https://github.com/user-attachments/assets/0d50b583-7ce4-4032-8b69-49c37a88dc56)

**Environment:** Chrome 130, Firefox 131, localhost:3000

---

#### BUG-HIGH-006: Security - Error Handling Missing
**ID:** BUG-HIGH-006  
**Test Cases:** TC-SEC-005, TC-SEC-006  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-S03  
**Date Reported:** November 6, 2025

**Description:**  
Missing proper error handling for:
1. localStorage quota limits (silent failure)
2. JSON parse errors (no error logging)

**Steps to Reproduce:**
1. Fill localStorage to capacity
2. Attempt to add more data
3. Observe no user feedback
4. Manually corrupt localStorage JSON
5. Refresh app - no error logged

**Expected Result:** 
- Graceful error messages for quota exceeded
- Error logging for parse failures
- User informed of issues

**Actual Result:** 
- Silent failures with no user feedback
- No error logging

**Impact:** Poor user experience, debugging difficulties, potential data loss

**Evidence:**
- [Quota](https://github.com/user-attachments/assets/42e80bca-94df-4594-8120-f83dc0ac3340)
- [Parse](https://github.com/user-attachments/assets/d1b2994c-9f95-41ef-bfe0-d55e8f42a7d0)

**Environment:** Chrome 130, localhost:3000

---

#### BUG-HIGH-007: Images Not Lazy Loaded (INTENTIONAL DEFECT - FOUND)
**ID:** BUG-HIGH-007  
**Test Case:** TC-CAT-006  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-X02  
**Date Reported:** November 6, 2025  
**Label:** intentional-defect

**Description:**  
Images do not have lazy loading enabled, impacting performance especially on catalog pages with many books. All images load immediately regardless of viewport position.

**Steps to Reproduce:**
1. Open DevTools Network tab
2. Navigate to catalog page
3. Observe all images load at once
4. Check image HTML - no `loading="lazy"` attribute

**Expected Result:** Images have `loading="lazy"` attribute, load as user scrolls  
**Actual Result:** All images load immediately, no lazy loading

**Impact:** Poor performance, increased initial page load time, unnecessary bandwidth usage

**Evidence:** 
- [Mobile](https://github.com/user-attachments/assets/f3b5e01f-fd5a-471c-ba67-bbfc7b203b69)
- [Desktop](https://github.com/user-attachments/assets/8c1dec24-6e44-4cae-9d6e-d71fdde0d1df)

**Environment:** Chrome 130, Firefox 131, localhost:3000

---

#### BUG-HIGH-008: Accessibility - Modal Missing ARIA (INTENTIONAL DEFECT - FOUND)
**ID:** BUG-HIGH-008  
**Test Case:** TC-A11Y-005  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-X01  
**Date Reported:** November 6, 2025  
**Label:** intentional-defect

**Description:**  
Modal dialogs missing `aria-modal="true"` attribute and proper focus management. This is an intentional defect that was successfully identified.

**Steps to Reproduce:**
1. Open cart modal
2. Inspect HTML
3. Check for `aria-modal="true"` attribute
4. Test focus trap - tab through elements

**Expected Result:** 
- Modal has `aria-modal="true"`
- Focus trapped within modal
- ESC closes modal
- Focus returns after close

**Actual Result:**
- `aria-modal="true"` missing
- Focus not trapped
- Can tab to background elements

**Impact:** WCAG 2.1 non-compliance, poor screen reader experience

**Evidence:** [Screenshots](https://github.com/user-attachments/assets/9b89fee3-5793-49ec-b166-752e19b18268)

**Environment:** Chrome 130 with axe DevTools, NVDA screen reader

---

#### BUG-HIGH-009: CSV Export Not Implemented
**ID:** BUG-HIGH-009  
**Test Case:** TC-ORD-004  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-O04  
**Date Reported:** November 6, 2025

**Description:**  
CSV export functionality not implemented in orders interface. No button or feature to export order data.

**Steps to Reproduce:**
1. Navigate to orders page
2. Look for "Export CSV" button
3. Observe feature missing

**Expected Result:** CSV export button available, downloads RFC4180-compliant CSV  
**Actual Result:** No export functionality exists

**Impact:** Cannot export order data for reporting, accounting, or analysis

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/a3159999-1368-427a-bd19-7d2ccfb888c4)

**Environment:** Chrome 130, localhost:3000

---

#### BUG-HIGH-010: Screen Reader Label Incomplete
**ID:** BUG-HIGH-010  
**Test Case:** TC-A11Y-002  
**Severity:** High  
**Priority:** P1  
**Status:** Open (Partial Pass)  
**Assigned To:** Development Team  
**FR Code:** FR-X01  
**Date Reported:** November 6, 2025

**Description:**  
Screen reader announces incomplete search label "Search book" instead of detailed description. Label should include "by title, author, or description" for clarity.

**Steps to Reproduce:**
1. Enable NVDA screen reader
2. Navigate to search field
3. Listen to announcement

**Expected Result:** "Search books by title, author, or description"  
**Actual Result:** "Search book"

**Impact:** Incomplete accessibility - users don't know full search capabilities

**Evidence:** [Video](https://github.com/user-attachments/assets/4a000f0c-8715-4ac6-96d4-066fd51810b1)

**Environment:** Windows 10, NVDA 2024, Chrome 130

---

#### BUG-HIGH-011: Missing Book Detail Pages
**ID:** BUG-HIGH-011  
**Test Cases:** TC-REV-001 to TC-REV-008  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-U01, FR-U02, FR-U03  
**Date Reported:** November 6, 2025

**Description:**  
No individual book detail pages accessible from catalog. Only catalog listing view available, preventing entire review system implementation.

**Steps to Reproduce:**
1. Navigate to catalog
2. Click on book card
3. Observe no detail page navigation

**Expected Result:** Book detail page with description, reviews, Q&A section  
**Actual Result:** No detail pages exist

**Impact:** Cannot implement review system, Q&A, or detailed product information

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/3e14abbe-7f73-43ee-b11a-7660f0479d4b)

**Environment:** All browsers, localhost:3000

---

#### BUG-HIGH-012: PageSpeed Insights Unavailable
**ID:** BUG-HIGH-012  
**Test Case:** TC-PERF-006  
**Severity:** High  
**Priority:** P1  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-X02  
**Date Reported:** November 6, 2025

**Description:**  
PageSpeed Insights cannot analyze localhost deployment, preventing comprehensive performance benchmarking against industry standards.

**Steps to Reproduce:**
1. Navigate to pagespeed.web.dev
2. Enter localhost:3000 URL
3. Observe "Unable to resolve" error

**Expected Result:** PageSpeed report with performance score and recommendations  
**Actual Result:** Cannot resolve localhost URL

**Impact:** Cannot benchmark against Google Core Web Vitals standards

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/697f96f3-92dc-482e-be03-422b84018486)

**Workaround:** Deploy to public URL for PageSpeed testing

**Environment:** pagespeed.web.dev, localhost:3000

---

### MEDIUM SEVERITY DEFECTS

#### BUG-MED-001: Search Diacritics Cannot Test (INTENTIONAL DEFECT - BLOCKED)
**ID:** BUG-MED-001  
**Test Case:** TC-CAT-003  
**Severity:** Medium  
**Priority:** P2  
**Status:** Blocked  
**Assigned To:** Development Team  
**FR Code:** FR-O01  
**Date Reported:** November 6, 2025  
**Label:** intentional-defect

**Description:**  
Cannot test diacritic search normalization because catalog contains no books with diacritical marks (e.g., "Café", "naïve", "façade").

**Steps to Reproduce:**
1. Review catalog data
2. Search for books with diacritics
3. Observe none exist

**Expected Result:** Test catalog should include books with diacritical marks  
**Actual Result:** All book titles use basic Latin characters only

**Impact:** Cannot verify search normalization feature, intentional defect cannot be tested

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/dc0e2d05-2aef-463e-851c-ff1e66b899b1)

**Resolution Needed:** Add test data with diacritical characters

**Environment:** Chrome 130, localhost:3000

---

#### BUG-MED-002: Mini-Cart Stock Race Condition (INTENTIONAL DEFECT - CANNOT VERIFY)
**ID:** BUG-MED-002  
**Test Case:** TC-CART-004  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  
**Assigned To:** Development Team  
**FR Code:** FR-O01  
**Date Reported:** November 6, 2025  
**Label:** intentional-defect

**Description:**  
Cannot verify mini-cart stock race condition because stock limit enforcement is not implemented at all (BUG-HIGH-001).

**Steps to Reproduce:**
1. Attempt to test stock race condition in mini-cart
2. Realize stock limits don't exist

**Expected Result:** Stock limits enforced, can test race condition  
**Actual Result:** No stock limits to bypass

**Impact:** Cannot test race condition - prerequisite functionality missing

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/eb6e3119-0b81-40bb-b61e-248a52bf9587)

**Dependencies:** Requires BUG-HIGH-001 fix first

**Environment:** Chrome 130, localhost:3000

---

#### BUG-MED-003: Security Tests Blocked
**ID:** BUG-MED-003  
**Test Cases:** TC-SEC-001, TC-SEC-003, TC-SEC-004  
**Severity:** Medium  
**Priority:** P2  
**Status:** Blocked  
**Assigned To:** Development Team  
**FR Code:** FR-S01, FR-S02  
**Date Reported:** November 6, 2025

**Description:**  
Security testing blocked due to missing features:
- Cannot test UGC script injection (no review system)
- Cannot test XSS via image URL (no admin catalog management)
- Cannot test URL scheme validation (no Q&A system)

**Impact:** Cannot verify security sanitization features

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/353647bf-b3df-4a82-8882-a364a6165acc)

**Dependencies:** Requires review system, admin features, Q&A system

**Environment:** All browsers, localhost:3000

---

#### BUG-MED-004: Order Status Transitions Blocked
**ID:** BUG-MED-004  
**Test Case:** TC-ORD-003  
**Severity:** Medium  
**Priority:** P2  
**Status:** Blocked  
**Assigned To:** Development Team  
**FR Code:** FR-O05  
**Date Reported:** November 6, 2025

**Description:**  
Order status transitions testing blocked because admin functionality is broken (BUG-CRIT-002).

**Steps to Reproduce:**
1. Set admin role in localStorage
2. Navigate to admin panel
3. Attempt to change order status

**Expected Result:** Can update order status through workflow  
**Actual Result:** Admin features non-functional

**Impact:** Cannot verify order lifecycle management

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/4800274c-b1e7-4497-8b2a-673100a198ff)

**Dependencies:** Requires BUG-CRIT-002 fix

**Environment:** Chrome 130, localhost:3000

---

#### BUG-MED-005: Safari Testing Blocked
**ID:** BUG-MED-005  
**Test Case:** TC-COMPAT-003  
**Severity:** Medium  
**Priority:** P2  
**Status:** Blocked  
**Assigned To:** QA Team  
**FR Code:** FR-X03  
**Date Reported:** November 6, 2025

**Description:**  
Safari compatibility testing blocked - no access to Safari browser for testing team.

**Impact:** Cannot verify Safari compatibility, potential unknown issues on macOS/iOS

**Resolution Needed:** Provide Safari testing environment or macOS device

**Environment:** Windows environment only

---

#### BUG-MED-006: CSV Decimal Format Blocked (INTENTIONAL DEFECT - BLOCKED)
**ID:** BUG-MED-006  
**Test Case:** TC-ORD-005  
**Severity:** Medium  
**Priority:** P2  
**Status:** Blocked  
**Assigned To:** Development Team  
**FR Code:** FR-O04  
**Date Reported:** November 6, 2025  
**Label:** intentional-defect

**Description:**  
CSV decimal format testing blocked because CSV export functionality is not implemented (BUG-HIGH-009).

**Expected Result:** CSV with decimal comma breaking columns (intentional defect)  
**Actual Result:** Cannot test - no CSV export exists

**Impact:** Cannot verify intentional defect

**Evidence:** [Screenshot](https://github.com/user-attachments/assets/a3159999-1368-427a-bd19-7d2ccfb888c4)

**Dependencies:** Requires BUG-HIGH-009 fix

**Environment:** Chrome 130, localhost:3000

---

#### BUG-MED-007: Return Window Testing Blocked (INTENTIONAL DEFECT - BLOCKED)
**ID:** BUG-MED-007  
**Test Cases:** TC-ORD-006, TC-ORD-007  
**Severity:** Medium  
**Priority:** P2  
**Status:** Blocked  
**Assigned To:** Development Team  
**FR Code:** FR-R01  
**Date Reported:** November 6

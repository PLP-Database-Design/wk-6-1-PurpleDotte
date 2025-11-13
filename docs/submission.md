# 📤 Submission Guidelines — Book Store App QA Project

## 📦 Weekly Submissions
All groups submit the full repository weekly for continuous progress and feedback.

### Week 1: Initial Setup & Planning (Due: Wednesday, Nov 5, 2025)
- Repo runs locally (`npm install`, `npm start`)
- Project board (Jira/GitHub Projects) created and shared
- `tests/test-plan.md` (use template below)
- Team roles and communication plan

### Week 2: Test Design & Early Execution (Due: Tuesday, Nov 11, 2025)
- Draft test cases/checklists in `tests/test-cases.md` (use template below)
- Early manual/automated scripts (optional)
- Initial defect log in `tests/defect-log.md` (use format below)

### Week 3: Test Execution & Reporting (Due: Tuesday, Nov 18, 2025)
- Executed results (manual/automated) with evidence
- Updated defect log with severity/priority and attachments
- Screenshots/videos/logs of key issues

## 🏁 Final Submission (Due: Tuesday, Nov 18, 2025)
- `tests/final-report.md` (executive summary, approach, environment, results, defect analysis, risks, recommendations)
- Jira/Project exports or screenshots (board, filters, dashboards)
- All code and documentation committed
- 5-minute video presentation link (see `docs/video-guide.md`)
## 🧩 Templates
### 📝 Test Plan (tests/test-plan.md)

# RAID Team Comprehensive Test Plan

**Project:** Book Store App — Web Application QA Project  
**Team Name:** RAID  
**Testing Period:** November 5, 2025 – November 18, 2025 (3 Weeks)

## Team Roles

| Role | Name | Core Responsibility |
|------|------|---------------------|
| Test Manager | Dennis | Planning, Schedule, Final Report Sign-off |
| Risk Analyst | Cindy | Risk-Based Prioritization, Defect Triage (Severity/Priority) |
| Test Executer | Deborah | Test Design, Execution, Evidence Capture |

## 1. Objective and Scope

### 1.1 Test Objective

The primary goal is to provide comprehensive quality assurance by verifying the application against all requirements and identifying defects in the following areas:

- **Functional Correctness:** Catalog, Cart/Checkout, Payments, Orders, Admin.
- **Accessibility (FR-X01):** Ensure compliance with WCAG 2.1 AA.
- **Performance (FR-X02):** Meet LCP and TTI budgets.
- **Security Hygiene (FR-X04):** Verify UGC sanitization and URL scheme validation.

### 1.2 In-Scope Features (Traceability to FR Codes)

| Component | Key Functional Requirements (FR) | Execution Priority |
|-----------|----------------------------------|-------------------|
| Discovery | Search, Filter, Sort | Verify AND filter logic and stable sorting. |
| Checkout Flow | FR-O01, FR-O02 | Test all four steps (Shipping → Review → Payment → Confirmation). |
| Payments | FR-O03 | Paystack integration, currency validation (NGN/GHS/USD/ZAR). |
| Orders/Admin | FR-O04, FR-M03 | Order Status transitions (Pending → Paid → Delivered); Admin access guard. |

### 1.3 Out-of-Scope Items

Real backend services, real payment capture, multi-currency catalog display, and jurisdiction-specific tax/shipping logic.

## 2. Environments and Tools

| Category | Environment/Tool | Constraint/Target | Role Responsibility |
|----------|------------------|-------------------|---------------------|
| Project Management | Jira Cloud or GitHub Projects | Must use defined Components, Labels (intentional-defect, a11y, perf), and Workflow. | Dennis |
| Testing Environment | Local Repo with npm start | Requires pk_test_... key and REACT_APP_CURRENCY set (NGN, GHS, USD, or ZAR). | Deborah |
| Browsers/Devices | Latest 2 releases of Chrome, Firefox, Safari, Edge | Must validate Mobile, Tablet, and Desktop breakpoints (FR-X03). | Deborah |
| Accessibility Tools | axe DevTools, WAVE, NVDA/JAWS/VoiceOver | Verify WCAG 2.1 AA compliance. | Deborah |
| Performance Tools | Lighthouse, PageSpeed Insights | Measure LCP (≤2.5s/3s) and TTI (≤1s) (FR-X02). | Deborah |
| Admin Access | localStorage | Set app.user to { role: 'admin' } to access /admin. | Deborah |

## 3. Test Strategy and Risk Analysis

### 3.1 Test Strategy

The team will use a Risk-Based Testing (RBT) strategy, prioritizing execution based on the P1 items in the backlog and the inherent risk of the intentional defects.

### 3.2 Risk Prioritization (Cindy - Risk Analyst Focus)

| Risk Area | Impact / Requirement | Mitigation Strategy | Priority Target |
|-----------|---------------------|---------------------|-----------------|
| Intentional Defects | 10 known complex defects (e.g., Rounding ±0.01, Day 8 return, A11y modal) must be explicitly found and logged. | Dedicated Test Cases: Cindy must ensure specific test cases are created for all 10 defects, tracked with the intentional-defect label. | High |
| Checkout Flow Blockers | Failure in Payments (FR-O03) or the 4-step wizard (FR-O02) blocks the core transaction. | P1 Execution: Maximize test coverage on the /checkout route and Paystack integration; ensure proper error handling and status updates. | Critical |
| Security/UGC | Unsanitized UGC (Reviews/Q&A) could allow XSS attacks (FR-S01). | Negative Testing: Test input fields with scripts and non-whitelisted URL schemes (javascript:) to verify sanitation is enforced. | High |

## 4. Project Schedule and Criteria

### 4.1 Weekly Milestones

| Week | Due Date | Key Activities | Required Deliverables |
|------|----------|----------------|----------------------|
| Week 1 | Nov 5 (Wednesday) | Kickoff, Jira/Board Setup, Environment check. | Signed-off Test Plan. |
| Week 2 | Nov 11 (Tuesday) | Test Case Design, P1 Execution, Defect Triage. | Draft Test Cases (tests/test-cases.md), Interim defect log. |
| Week 3 | Nov 18 (Tuesday) | Full Execution, Defect re-testing, Final Report preparation. | Final Submission (Report, Video link, Board Exports). |

### 4.2 Entry and Exit Criteria

| Criteria Type | Condition |
|---------------|-----------|
| Entry Criteria (Execution Start) | The app runs locally; Jira/GitHub Projects board is configured and shared; Test Plan is signed off. |
| Exit Criteria (Completion / Submission) | Full test execution coverage of P1 items achieved; All defects are logged with full details and evidence; All final artifacts prepared. |

## 5. Required Deliverables and Templates

### 5.1 Bug Report Template (Deborah - Test Executer)

All defects must be logged in the project board using the following mandatory fields:

| Field | Requirement | Definition Source |
|-------|-------------|-------------------|
| Summary | Concise, descriptive title | jira-setup.md |
| Description | 1. Numbered Steps to Reproduce. 2. Expected Result. 3. Actual Result | submission.md |
| Severity/Priority | Critical, Major, Minor, Cosmetic / High, Medium, Low | jira-setup.md |
| Component | Catalog, Checkout, Payments, A11y, Performance, etc. | jira-setup.md |
| Labels | Use intentional-defect, a11y, security as appropriate | jira-setup.md |
| Attachments | Screenshots/videos/logs (Required for Major/Critical) | submission.md |

### 5.2 Final Submission Artifacts (Dennis - Test Manager)

Dennis is responsible for compiling these files by the Nov 18 deadline:

- `team-RAID_final-report.md`
- `team-RAID_presentation.(link or file)` (5-minute video following video-guide.md outline)
- Executed Test Cases, Environment Notes, Accessibility/Performance findings with metrics (LCP, TTI).
- Jira/Project Exports/Screenshots (Bugs by Severity, Heat Map by Component).

## 6. Test Plan Approval and Sign-Off

This section confirms that the Test Plan has been reviewed and approved, authorizing the RAID team to begin the Test Execution phase.

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Manager | Dennis | (DK) | (Target: Nov 5, 2025) |
| Risk Analyst | Cindy | NC | (Target: Nov 5, 2025) |
| Test Executer | Deborah | (Must Sign) | (Target: Nov 5, 2025) |
| Project Lead/Stakeholder | (To be confirmed) | (Must Sign) | (Target: Nov 5, 2025) |




### ✅ Test Case (tests/test-cases.md)

 ## Project Management

The RAID team uses Jira Cloud for project management and issue tracking.

**Board Details:**
- **Platform:** Jira Cloud
- **Project Name:** Book Store App - RAID Team QA
- **Board URL:** https://bgrkaris05-1762159814901.atlassian.net/jira/software/c/projects/BSAQTR/boards/34[]
- **Access:** Dennis (Manager), Cindy (Risk Analyst), Deborah (Test Executer), Instructor
- **Status:** Week 1 - Board created and accessible ✓

Board setup screenshot: `evidence/week1-jira-board.png`evidence/week1-jira-board.png`<img width="1366" height="639" alt="Screenshot 2025-11-05 153957" src="https://github.com/user-attachments/assets/dad3b82b-9cac-4a66-a157-267892f7ecf7" />


Full board configuration and issue creation and test cases will begin in week two



# RAID Team - Complete Test Cases

**Project:** Book Store App — Web Application QA Project  
**Team Name:** RAID  
**Document Version:** 1.0  
**Date:** November 6, 2025  
**For:** Week 2 Test Execution

---

## Table of Contents
1. [Catalog & Discovery (6 cases)](#catalog)
2. [Cart & Checkout (9 cases)](#cart)
3. [Payment Integration (6 cases)](#payment)
4. [Orders & CSV Export (8 cases)](#orders)
5. [Admin Console (6 cases)](#admin)
6. [Reviews & Community (8 cases)](#reviews)
7. [Notifications (4 cases)](#notifications)
8. [Accessibility (9 cases)](#accessibility)
9. [Performance (6 cases)](#performance)
10. [Security & Sanitization (7 cases)](#security)
11. [Compatibility (8 cases)](#compatibility)

---

## Summary

**Total Test Cases:** 77  
**Critical Priority:** 11  
**High Priority:** 45  
**Medium Priority:** 31  
**Intentional Defects:** 10/10 covered

---

<a name="catalog"></a>
## 1. CATALOG & DISCOVERY TEST CASES

### TC-CAT-001: Search Functionality - Exact Match
**Priority:** High  
**FR Code:** FR-O01

**Pre-conditions:**
- User is on catalog page
- Multiple books available in catalog

**Steps:**
1. Navigate to `/catalog`
2. Enter exact book title in search field (e.g., "The Great Gatsb")
3. Press Enter or click Search button

**Expected Result:**
- Search returns the exact book match
- Book card displays with correct title, author, price, and image
- Search is case-insensitive

**Post-conditions:** Search results display matching book

**Evidence:** Screenshot of search results

---<img width="1357" height="636" alt="TC-CAT-001 Exact Match" src="https://github.com/user-attachments/assets/643dbe0f-3b53-4e49-b473-fba4a3d6e1eb" />


### TC-CAT-002: Search Functionality - Partial Match
**Priority:** High  
**FR Code:** FR-O01

**Pre-conditions:**
- User is on catalog page

**Steps:**
1. Navigate to `/catalog`
2. Enter partial book title (e.g., "19")
3. Press Enter

**Expected Result:**
- All books containing "Great" in title, author, or description are returned
- Results are displayed in a grid layout
- No results message displays if no matches found

**Post-conditions:** Relevant search results displayed

**Evidence:** Screenshot of partial match results

---<img width="1364" height="637" alt="TC-CAT-002 Search Functionality  Partial Match" src="https://github.com/user-attachments/assets/3f338b37-62b0-4443-ba59-b6edeabd69ea" />


### TC-CAT-003: Search with Diacritics (INTENTIONAL DEFECT)
**Priority:** Medium  
**FR Code:** FR-O01  
**Label:** `intentional-defect`

**Pre-conditions:**
- Books with diacritical marks exist in catalog

**Steps:**
1. Navigate to `/catalog`
2. Search for a book title with diacritics (e.g., "Café")
3. Try searching without diacritics (e.g., "Cafe")

**Expected Result:**
- Search should normalize diacritics and return results for both "Café" and "Cafe"

**Actual Result (Expected Defect):**
- Search does not normalize diacritics
- Searching "Cafe" does not return "Café"

**Post-conditions:** Defect documented

**Evidence:** Screenshot showing failed diacritic search

---

### TC-CAT-004: Filter by Genre with AND Logic
**Priority:** High  
**FR Code:** FR-O01

**Pre-conditions:**
- Multiple books with different genres exist

**Steps:**
1. Navigate to `/catalog`
2. Select "Fiction" genre filter
3. Select "Mystery" genre filter
4. Observe results

**Expected Result:**
- Only books that are BOTH Fiction AND Mystery are displayed
- Filter count updates correctly
- Empty state message shows if no books match both filters

**Post-conditions:** Filtered results display correctly

**Evidence:** Screenshot of AND filter logic

---<img width="1357" height="663" alt="TC-CAT-004Filter by Genre with AND Logic fiction " src="https://github.com/user-attachments/assets/09c3be56-141a-45c7-bcd8-cce0bb98b087" />


### TC-CAT-005: Sort by Price - Ascending
**Priority:** Medium  
**FR Code:** FR-O01

**Pre-conditions:**
- Multiple books with different prices exist

**Steps:**
1. Navigate to `/catalog`
2. Click "Sort by Price" dropdown
3. Select "Price: Low to High"

**Expected Result:**
- Books are sorted from lowest to highest price
- Sort indicator shows active sort field and direction
- Ties are broken by stable sort (original order maintained)

**Post-conditions:** no price dropdown button found

**Actual Result:** i was unable to sort book by prices,because  there is no price dropdown button
 
**Evidence:** Screenshot of sorted results
<img width="756" height="635" alt="TC-CAT-005 Sort by Price - Ascending" src="https://github.com/user-attachments/assets/190f42a7-6aff-4677-9dfc-0acb14950b2d" />
---

### TC-CAT-006: Image Lazy Loading (INTENTIONAL DEFECT)
**Priority:** Medium  
**FR Code:** FR-X02  
**Label:** `intentional-defect`, `perf`

**Pre-conditions:**
- Catalog contains many books

**Steps:**
1. Open DevTools Network tab
2. Navigate to `/catalog`
3. Observe image loading behavior
4. Check if images have `loading="lazy"` attribute

**Expected Result:**
- Images should have `loading="lazy"` attribute
- Images outside viewport should not load immediately
- Images load as user scrolls

**Actual Result (Expected Defect):**
- Images do not have lazy loading enabled
- All images load immediately, impacting performance

**Post-conditions:** Defect documented

**Evidence:** Screenshot of Network tab showing all images loading at once

---<img width="1256" height="683" alt="### TC-CAT-006 Image Lazy Loading (INTENTIONAL DEFECT) mobile" src="https://github.com/user-attachments/assets/f3b5e01f-fd5a-471c-ba67-bbfc7b203b69" />
<img width="1357" height="716" alt="### TC-CAT-006 Image Lazy Loading (INTENTIONAL DEFECT)  desktop" src="https://github.com/user-attachments/assets/8c1dec24-6e44-4cae-9d6e-d71fdde0d1df" />

## 2. CART & CHECKOUT TEST CASES

### TC-CART-001: Add Item to Cart
**Priority:** Critical  
**FR Code:** FR-O01

**Pre-conditions:**
- User is on catalog or book detail page

**Steps:**
1. Click "Add to Cart" button on any book
2. Observe cart icon/count update
3. Navigate to `/cart`

**Expected Result:**
- Cart count badge increments by 1
- Item appears in cart with correct book details
- Quantity defaults to 1
- Subtotal calculates correctly

**Post-conditions:** Item persists in cart (localStorage)

**Evidence:** Screenshot of cart with added item

---<img width="1335" height="604" alt="TC-CART-001 Add Item to Cart" src="https://github.com/user-attachments/assets/0b69702a-cec3-4741-91ac-03209b4b5955" />


### TC-CART-002: Update Cart Quantity
**Priority:** High  
**FR Code:** FR-O01

**Pre-conditions:**
- At least one item exists in cart

**Steps:**
1. Navigate to `/cart`
2. Increase quantity using "+" button
3. Decrease quantity using "-" button
4. Observe subtotal updates

**Expected Result:**
- Quantity updates correctly
- Subtotal recalculates: price × quantity
- Line item total rounds to 2 decimal places
- Cart persists after page refresh

**Post-conditions:** Updated quantity saved to localStorage

**Evidence:** Screenshot showing quantity changes and subtotal updates

---<img width="1106" height="595" alt="TC-CART-002 Update Cart Quantity" src="https://github.com/user-attachments/assets/0848e07c-d725-4924-8188-c728ba5c61dd" />


### TC-CART-003: Stock Limit Enforcement
**Priority:** High  
**FR Code:** FR-O01

**Pre-conditions:**
- Book has limited stock (e.g., stock = 5)

**Steps:**
1. Add book to cart
2. Attempt to increase quantity beyond stock limit
3. Observe error message

**Expected Result:**
- Quantity cannot exceed available stock
- Error message displays: "Cannot exceed available stock"
- Quantity remains at maximum stock level

- **ACTUAL Result:**
-  Quantity is infinite
-  No error displays
-  no limit to stock
**Post-conditions:** no stock restrictions

**Evidence:** Screenshot of stock limit error

---<img width="1201" height="537" alt="TC-CART-003 Stock Limit Enforcement" src="https://github.com/user-attachments/assets/01637c6f-c86a-4c64-9c31-dfa2eb1c56a8" />

### TC-CART-004: Mini-Cart Stock Race Condition (INTENTIONAL DEFECT)
**Priority:** Medium  
**FR Code:** FR-O01  
**Label:** `intentional-defect`

**Pre-conditions:**
- Book has stock limit

**Steps:**
1. Add item to cart from catalog page (mini-cart)
2. Rapidly increase quantity in mini-cart beyond stock limit
3. Check if validation is bypassed

**Expected Result:**
- Stock validation should prevent exceeding limit in all contexts

**Actual Result (Expected Defect):**
- Mini-cart may allow quantity to exceed stock temporarily
- Race condition between UI update and validation

**Post-conditions:** Defect documented

**Evidence:** Screenshot/video of stock limit bypass in mini-cart

---<img width="1060" height="678" alt="TC-CART-004 Mini-Cart Stock Race Condition (INTENTIONAL DEFECT)2" src="https://github.com/user-attachments/assets/eb6e3119-0b81-40bb-b61e-248a52bf9587" />


### TC-CART-005: Rounding Variance (INTENTIONAL DEFECT)
**Priority:** Medium  
**FR Code:** FR-O01  
**Label:** `intentional-defect`

**Pre-conditions:**
- Cart has items with prices that produce rounding scenarios

**Steps:**
1. Add items with prices like $19.99, $24.95
2. Set quantities to create complex calculations
3. Calculate expected subtotal manually
4. Compare with displayed subtotal
5. Check tax calculation (8% of subtotal)
6. Verify grand total

**Expected Result:**
- Line items round to 2 decimal places
- Tax calculated once on grand total
- Acceptable variance: ±$0.01

**Actual Result (Expected Defect):**
- Small rounding variance (±$0.01) may occur
- Difference between line-by-line rounding and grand total rounding




**Post-conditions:** Defect documented with variance amount

**Evidence:** Screenshot with manual calculation vs system calculation

---<img width="1163" height="646" alt="TC-CART-005  Rounding Variance (INTENTIONAL DEFECT)" src="https://github.com/user-attachments/assets/3bb06a65-9e8e-400a-9091-30979ff53a98" />

**status** passed


### TC-CART-006: Apply Valid Coupon
**Priority:** High  
**FR Code:** FR-O01

**Pre-conditions:**
- Valid coupon exists (e.g., "SAVE10" - 10% off, min basket $50)
- Cart subtotal meets minimum requirement

**Steps:**
1. Add items totaling at least $50 to cart
2. Navigate to `/cart`
3. Enter coupon code "SAVE10"
4. Click "Apply"

**Expected Result:**
- Success message displays
- Discount line appears in totals breakdown
- Grand total reflects discount
- Coupon persists after refresh
 **Actual Result**

No coupon entry field found in cart interface

 Cannot enter coupon code "SAVE10"

 No "Apply" button available

 Coupon functionality not implemented in UI

**Defect Details**

Issue: Missing coupon/discount UI components

Location: Cart page

Impact: FR-O01 (Coupon functionality) not implemented

Evidence: All provided screenshots show no coupon input field or apply button




**Post-conditions:**  Test blocked - cannot proceed







**Evidence:** Screenshot of applied coupon with discount

---[Apply Expired Coupon.webm](https://github.com/user-attachments/assets/31b39f36-8b2f-4e62-b23c-75843dbdbaac)

**status** failed
### T-007TC-CAR: Apply Expired Coupon
**Priority:** Medium  
**FR Code:** FR-O01

**Pre-conditions:**
- Expired coupon exists

**Steps:**
1. Navigate to `/cart` with items
2. Enter expired coupon code
3. Click "Apply"

**Expected Result:**
- Error message: "This coupon has expired"
- No discount applied
- Coupon field remains editable

**Actual Result:**

 Coupon entry field not implemented in UI

 Cannot attempt to apply any coupon (valid or expired)

 Basic coupon functionality missing

Defect Details:

Blocking Issue: Missing coupon input field and apply button

Impact: All coupon-related test cases cannot be executed

Related to: TC-CART-006 (same root cause)

Post-conditions: Test blocked - cannot proceed






**Evidence:** Screenshot of expired coupon error

--
---[Apply Expired Coupon.webm](https://github.com/user-attachments/assets/31b39f36-8b2f-4e62-b23c-75843dbdbaac)

**status** failed

### TC-CART-008: Minimum Basket Requirement
**Priority:** Medium  
**FR Code:** FR-O01

**Pre-conditions:**
- Coupon with minimum basket requirement exists (e.g., min $50)

**Steps:**
1. Add items totaling less than $50
2. Attempt to apply coupon
3. Observe error message

**Expected Result:**
- Error message: "Minimum basket of $50.00 required"
- No discount applied

**Actual Result:**

 Cannot attempt to apply coupon - no coupon field available

 Basic coupon functionality not implemented in UI

Post-conditions: Test blocked - cannot execute

**Evidence:** Screenshot of minimum basket error

---[Apply Expired Coupon.webm](https://github.com/user-attachments/assets/31b39f36-8b2f-4e62-b23c-75843dbdbaac) 

**status** failed

### TC-CART-009: Non-Combinable Coupon Restriction
**Priority:** Medium  
**FR Code:** FR-O01

**Pre-conditions:**
- Two coupons exist, at least one is non-combinable

**Steps:**
1. Apply first coupon successfully
2. Attempt to apply second non-combinable coupon
3. Observe behavior

**Expected Result:**
- Error message: "This coupon cannot be combined with other offers"
- First coupon remains applied
- Second coupon rejected

**Actual Result:**

Cannot apply first coupon - no coupon field available

 Cannot test combinability rules - basic functionality missing

 Coupon system not implemented in UI

Post-conditions: Test blocked - cannot execute




**Evidence:** Screenshot of non-combinable error

---[Apply Expired Coupon.webm](https://github.com/user-attachments/assets/31b39f36-8b2f-4e62-b23c-75843dbdbaac)


## 3. PAYMENT INTEGRATION TEST CASES

### TC-PAY-001: Currency Validation - Supported Currency
**Priority:** Critical  
**FR Code:** FR-O03

**Pre-conditions:**
- REACT_APP_CURRENCY set to NGN, GHS, USD, or ZAR
- Valid Paystack test key configured

**Steps:**
1. Complete checkout wizard to Payment step
2. Click "Pay Now" button
3. Observe Paystack modal opens

**Expected Result:**
- Paystack inline modal opens successfully
- Amount displayed in correct currency
- Currency symbol matches REACT_APP_CURRENCY
- Minor units calculated correctly (cents)

**Post-conditions:** Payment gateway initializes

**Evidence:** Screenshot of Paystack modal with correct currency

--<img width="1184" height="554" alt="TC-PAY-001 Currency Validation - Supported Currency" src="https://github.com/user-attachments/assets/1f1d037c-5ce2-49d7-96b0-e4047efe0994" />

**status** passed

### TC-PAY-002: Currency Mismatch (INTENTIONAL DEFECT)
**Priority:** High  
**FR Code:** FR-O03  
**Label:** `intentional-defect`

**Pre-conditions:**
- REACT_APP_CURRENCY set to one currency
- UI displays different currency symbol

**Steps:**
1. Set REACT_APP_CURRENCY to "NGN"
2. Navigate through catalog and cart
3. Observe currency symbols in UI
4. Proceed to payment

**Expected Result:**
- All currency displays should match REACT_APP_CURRENCY
- No $ symbol should appear if currency is NGN

**Actual Result (Expected Defect):**
- UI may display $ symbol while gateway expects NGN
- Currency mismatch between display and payment

**Post-conditions:** Defect documented

**Evidence:** Screenshot showing currency mismatch

---<img width="1184" height="554" alt="TC-PAY-001 Currency Validation - Supported Currency" src="https://github.com/user-attachments/assets/1f1d037c-5ce2-49d7-96b0-e4047efe0994" />
<img width="1117" height="661" alt="TC-PAY-002 Currency Mismatch (INTENTIONAL DEFECT)  1png" src="https://github.com/user-attachments/assets/1b001d39-21a0-4555-aea3-f8413d7124bc" />


**status** passed

### TC-PAY-003: Payment Success Flow
**Priority:** Critical  
**FR Code:** FR-O03

**Pre-conditions:**
- Valid test card details available
- Checkout completed to Payment step

**Steps:**
1. Click "Pay Now"
2. Enter test card: 4084084084084081
3. Enter expiry: 12/25, CVV: 123
4. Click "Pay" in Paystack modal
5. Observe confirmation page

**Expected Result:**
- Payment processes successfully
- Order status updates to "Paid"
- Gateway reference stored and displayed on order details
- Confirmation page shows order number and success message
- Cart clears after successful payment

**Actual Result:**

 Payment declined with error message

Error: "Transaction declined. Please use the test card"

Payment did not process successfully

User prompted to "Retry with test details"

**Post-conditions:** Payment failed, order not created





**Evidence:** Screenshot of confirmation page with order details

**status** failed

---<img width="465" height="311" alt="TC-PAY-003 Payment Success Flow" src="https://github.com/user-attachments/assets/d78dcadd-a705-44ed-9336-775b5f28cf75" />

### TC-PAY-004: Payment Cancellation Flow
**Priority:** High  
**FR Code:** FR-O03

**Pre-conditions:**
- Checkout completed to Payment step

**Steps:**
1. Click "Pay Now"
2. Close Paystack modal without completing payment
3. Observe behavior

**Expected Result:**
- User returned to Payment step
- Error/info message: "Payment was cancelled. Please try again."
- Order status remains "Pending"
- Retry option available
- Cart items preserved

**Post-conditions:** Order remains in Pending state

**Evidence:** Screenshot of cancellation message

---<img width="1141" height="460" alt="TC-PAY-004 Payment Cancellation Flow" src="https://github.com/user-attachments/assets/495f4ea5-65f1-4a11-98c4-e8f6ef780135" />

**status** passed

### TC-PAY-005: Payment Error Handling
**Priority:** High  
**FR Code:** FR-O03

**Pre-conditions:**
- Network can be simulated to fail

**Steps:**
1. Open DevTools, set offline mode
2. Click "Pay Now"
3. Attempt payment
4. Observe error handling

**Expected Result:**
- Clear error message displays
- User informed of network issue
- Order remains Pending
- Retry option provided
- No "Paid" status update

**Post-conditions:** Error handled gracefully

**Evidence:** Screenshot of error message

---<img width="1156" height="467" alt="TC-PAY-005 Payment Error Handling" src="https://github.com/user-attachments/assets/75123aa8-8577-471e-8f4f-1c50e0b1781e" />


**status** passed

### TC-PAY-006: Minor Units Calculation
**Priority:** High  
**FR Code:** FR-O03

**Pre-conditions:**
- Cart has items with decimal prices

**Steps:**
1. Add items with prices like $19.99
2. Proceed to payment
3. Inspect network request to Paystack (DevTools)
4. Verify amount sent in minor units (cents)

**Expected Result:**
- Amount of $19.99 sent as 1999 (cents)
- No floating-point errors
- Exact cent calculation maintained

**Actual Result:**

 No Paystack API calls detected in Network tab

 Cannot verify minor units calculation

Only static image files (SVG) visible in network requests

Payment processed successfully but via unknown mechanism

Real Paystack integration but no visible API communication

**Post-conditions:** Cannot verify - No payment API calls visible




**Evidence:** Screenshot of network request payload

---<img width="1366" height="660" alt="TC-PAY-006 Minor Units Calculation" src="https://github.com/user-attachments/assets/ca5846a5-99a4-4024-b2d0-96bc04be3446" />

**status failed no payment API calls visible  **

## 4. ORDERS & CSV EXPORT TEST CASES

### TC-ORD-001: View Order History
**Priority:** High  
**FR Code:** FR-O04

**Pre-conditions:**
- User has at least one completed order

**Steps:**
1. Navigate to `/orders`
2. Observe order list

**Expected Result:**
- All user orders displayed in reverse chronological order
- Each order shows: ID, date, status, total
- Orders are clickable to view details

**Post-conditions:** Order history accessible

**Evidence:** Screenshot of order history

---<img width="1109" height="658" alt="TC-ORD-001  View Order History" src="https://github.com/user-attachments/assets/4800274c-b1e7-4497-8b2a-673100a198ff" />

**status** passed

### TC-ORD-002: View Order Details with Timeline
**Priority:** High  
**FR Code:** FR-O04

**Pre-conditions:**
- Order exists with status history

**Steps:**
1. Click on an order from order history
2. Navigate to order detail page `/orders/:id`
3. Observe status timeline

**Expected Result:**
- Order details show: items, quantities, prices, shipping info
- Status timeline displays: Pending → Paid → Fulfilled → Delivered
- Current status highlighted
- Gateway reference displayed for Paid orders
- ISO8601 timestamps for each status

**Post-conditions:** Order details viewable

**Evidence:** Screenshot of order detail with timeline

---<img width="1109" height="658" alt="TC-ORD-001  View Order History" src="https://github.com/user-attachments/assets/4800274c-b1e7-4497-8b2a-673100a198ff" />

 **status** passed

### TC-ORD-003: Order Status Transitions
**Priority:** Critical  
**FR Code:** FR-O05

**Pre-conditions:**
- Admin access configured

**Steps:**
1. Create order (status: Pending)
2. Complete payment (status should change to Paid)
3. Admin updates to Fulfilled
4. Admin updates to Delivered
5. Verify each transition logs timestamp

**Expected Result:**
- Status follows: Pending → Paid → Fulfilled → Delivered
- Each transition recorded in audit trail
- No invalid status transitions allowed
- Timestamps in ISO8601 format

**Actual Result:**

 Admin role successfully set in localStorage (role: 'admin')

 Role persists after refresh

 No admin panel or admin features visible in application UI

 No changes to navigation or user interface

 Cannot access admin functionality

Post-conditions: Admin role set but no admin UI available






**Evidence:** Screenshot of each status transition

---<img width="1109" height="658" alt="TC-ORD-001  View Order History" src="https://github.com/user-attachments/assets/4800274c-b1e7-4497-8b2a-673100a198ff" />
<img width="1109" height="658" alt="TC-ORD-001  View Order History" src="https://github.com/user-attachments/assets/4800274c-b1e7-4497-8b2a-673100a198ff" />

**status**  FAILED - Admin functionality not fully implemented

### TC-ORD-004: CSV Export - Format Validation
**Priority:** High  
**FR Code:** FR-O04

**Pre-conditions:**
- Multiple orders exist

**Steps:**
1. Navigate to orders page
2. Click "Export CSV" button
3. Download CSV file
4. Open in Excel/Google Sheets
5. Verify format

**Expected Result:**
- CSV follows RFC4180 standard
- UTF-8 encoding
- Headers: Order ID, Date, Status, Items, Total
- Dates in ISO8601 format
- Decimals use dot (.) not comma
- No broken columns
- All data displays correctly in spreadsheet

**Post-conditions:** CSV exports correctly

**Evidence:** Screenshot of CSV opened in Excel

---

### TC-ORD-005: CSV Decimal Format (INTENTIONAL DEFECT)
**Priority:** Medium  
**FR Code:** FR-O04  
**Label:** `intentional-defect`

**Pre-conditions:**
- Orders with decimal amounts exist

**Steps:**
1. Export orders to CSV
2. Open in Excel
3. Check if decimal separators are correct
4. Verify columns are not broken

**Expected Result:**
- Decimals should use dot (.) separator
- Columns should align properly

**Actual Result (Expected Defect):**
- CSV may use comma (,) as decimal separator in some locales
- This breaks column alignment in Excel
- Data shifts into wrong columns

**Post-conditions:** Defect documented

**Evidence:** Screenshot of broken CSV columns

---

### TC-ORD-006: Return Window Validation
**Priority:** High  
**FR Code:** FR-R01

**Pre-conditions:**
- Order delivered 5 days ago

**Steps:**
1. Navigate to order details
2. Click "Request Return" button
3. Submit return request

**Expected Result:**
- Return accepted (within 7-day window)
- Success message displayed
- Return status updates in order

**Post-conditions:** Return request submitted

**Evidence:** Screenshot of successful return request

---

### TC-ORD-007: Return Window Off-by-One (INTENTIONAL DEFECT)
**Priority:** Medium  
**FR Code:** FR-R01  
**Label:** `intentional-defect`

**Pre-conditions:**
- Order delivered exactly 8 days ago

**Steps:**
1. Navigate to order details (delivered 8 days ago)
2. Attempt to request return
3. Observe behavior

**Expected Result:**
- Return should be rejected (outside 7-day window)
- Error: "Return window has expired"

**Actual Result (Expected Defect):**
- Day 8 is accepted (off-by-one error)
- Return request proceeds when it should be blocked

**Post-conditions:** Defect documented

**Evidence:** Screenshot showing Day 8 return accepted

---

### TC-ORD-008: Refund with Audit Trail
**Priority:** High  
**FR Code:** FR-R02, FR-R03

**Pre-conditions:**
- Admin access configured
- Order in Delivered status with approved return

**Steps:**
1. Navigate to admin orders dashboard
2. Select order with return request
3. Process refund (full or partial)
4. View order audit trail

**Expected Result:**
- Order status updates to "Refunded"
- Audit entry created with: timestamp, action, admin user, note
- Audit trail visible on order details
- Refund amount recorded

**Post-conditions:** Refund processed with audit

**Evidence:** Screenshot of audit trail

---

<a name="admin"></a>
## 5. ADMIN CONSOLE TEST CASES

### TC-ADM-001: Admin Access Guard
**Priority:** Critical  
**FR Code:** FR-M03

**Pre-conditions:**
- User is not logged in as admin

**Steps:**
1. Attempt to navigate to `/admin`
2. Observe behavior

**Expected Result:**
- Access denied
- Redirect to home or login
- Error message: "Unauthorized. Admin access required."

**Post-conditions:** Non-admin blocked from admin pages

**Evidence:** Screenshot of unauthorized message

---

### TC-ADM-002: Admin Access with Valid Role
**Priority:** Critical  
**FR Code:** FR-M03

**Pre-conditions:**
- localStorage.setItem('app.user', JSON.stringify({ role: 'admin' }))

**Steps:**
1. Navigate to `/admin`
2. Observe admin dashboard loads

**Expected Result:**
- Admin dashboard displays successfully
- Admin features accessible: orders, inventory, moderation
- No unauthorized errors

**Post-conditions:** Admin can access admin pages

**Evidence:** Screenshot of admin dashboard

---

### TC-ADM-003: Catalog CRUD - Create Book
**Priority:** High  
**FR Code:** FR-M01

**Pre-conditions:**
- Admin access configured

**Steps:**
1. Navigate to admin catalog management
2. Click "Add New Book"
3. Fill in: title, author, description, price, image URL, genre, stock
4. Save

**Expected Result:**
- Book created successfully
- Success message displayed
- New book appears in catalog
- All metadata saved correctly

**Post-conditions:** New book added to catalog

**Evidence:** Screenshot of newly created book

---

### TC-ADM-004: Inventory Adjustment
**Priority:** High  
**FR Code:** FR-M02

**Pre-conditions:**
- Admin access, book exists

**Steps:**
1. Navigate to inventory management
2. Select a book
3. Update stock quantity
4. Save changes

**Expected Result:**
- Stock updates successfully
- Changes reflected in catalog
- Low-stock warning triggers if stock < threshold
- Adjustment logged with timestamp

**Post-conditions:** Inventory updated

**Evidence:** Screenshot of inventory adjustment

---

### TC-ADM-005: Low Stock Warning
**Priority:** Medium  
**FR Code:** FR-M02

**Pre-conditions:**
- Book stock is at or below threshold

**Steps:**
1. Set book stock to 5 or less
2. Navigate to admin dashboard
3. Check for low-stock notifications

**Expected Result:**
- Low-stock warning displays
- Book highlighted in inventory list
- Notification badge updates

**Post-conditions:** Low-stock alert visible

**Evidence:** Screenshot of low-stock warning

---

### TC-ADM-006: Moderation Queue
**Priority:** Medium  
**FR Code:** FR-M04

**Pre-conditions:**
- Flagged reviews/Q&A exist

**Steps:**
1. Navigate to moderation dashboard
2. View flagged content queue
3. Select a flagged review
4. Approve or remove

**Expected Result:**
- All flagged content listed
- Admin can approve, remove, or dismiss flags
- Action logs with admin user and timestamp
- Content updates accordingly

**Post-conditions:** Flagged content moderated

**Evidence:** Screenshot of moderation queue

---

<a name="reviews"></a>
## 6. REVIEWS & COMMUNITY TEST CASES

### TC-REV-001: Submit Review as Purchaser
**Priority:** High  
**FR Code:** FR-U01

**Pre-conditions:**
- User has purchased the book

**Steps:**
1. Navigate to book detail page
2. Scroll to reviews section
3. Click "Write a Review"
4. Enter rating (1-5 stars) and text
5. Submit

**Expected Result:**
- Review submitted successfully
- Review appears in reviews list
- User can edit or delete own review
- One review per user per book enforced

**Post-conditions:** Review published

**Evidence:** Screenshot of submitted review

---

### TC-REV-002: Block Review Without Purchase
**Priority:** High  
**FR Code:** FR-U01

**Pre-conditions:**
- User has NOT purchased the book

**Steps:**
1. Navigate to book detail page
2. Attempt to write a review
3. Observe behavior

**Expected Result:**
- Review form disabled or hidden
- Message: "You must purchase this book to write a review"
- Submit button disabled

**Post-conditions:** Non-purchaser blocked from reviewing

**Evidence:** Screenshot of blocked review attempt

---

### TC-REV-003: One Review Per User Enforcement
**Priority:** Medium  
**FR Code:** FR-U01

**Pre-conditions:**
- User already submitted a review for this book

**Steps:**
1. Navigate to book detail page
2. Attempt to submit second review
3. Observe behavior

**Expected Result:**
- Error message: "You have already reviewed this book"
- Option to edit existing review instead
- No duplicate review created

**Post-conditions:** Duplicate review prevented

**Evidence:** Screenshot of duplicate review error

---

### TC-REV-004: Flag Review for Moderation
**Priority:** Medium  
**FR Code:** FR-U02

**Pre-conditions:**
- Reviews exist on book page

**Steps:**
1. Navigate to book with reviews
2. Click "Flag" or "Report" on a review
3. Select reason (spam, inappropriate, etc.)
4. Submit flag

**Expected Result:**
- Flag submitted successfully
- Review added to admin moderation queue
- Confirmation message displayed

**Post-conditions:** Review flagged for moderation

**Evidence:** Screenshot of flag confirmation

---

### TC-REV-005: Q&A with Safe Markdown
**Priority:** High  
**FR Code:** FR-U03

**Pre-conditions:**
- User on book detail page

**Steps:**
1. Navigate to Q&A section
2. Post question with safe markdown: "Is this book available in **hardcover**?"
3. Submit

**Expected Result:**
- Markdown renders correctly (bold text)
- Question appears in Q&A list
- No script tags execute

**Post-conditions:** Q&A posted with safe formatting

**Evidence:** Screenshot of rendered markdown

---

### TC-REV-006: XSS via JavaScript URL (INTENTIONAL DEFECT)
**Priority:** Critical  
**FR Code:** FR-U03, FR-S01  
**Label:** `intentional-defect`, `security`

**Pre-conditions:**
- User can post Q&A or reviews

**Steps:**
1. Navigate to Q&A section
2. Post question with markdown link: `[Click me](javascript:alert('XSS'))`
3. Submit
4. Click the rendered link

**Expected Result:**
- `javascript:` URL scheme should be blocked
- Link sanitized or removed
- No alert executes

**Actual Result (Expected Defect):**
- `javascript:` link allowed to render
- Clicking link executes JavaScript (XSS vulnerability)
- Sanitization not enforced

**Post-conditions:** Security defect documented

**Evidence:** Screenshot/video of XSS execution

---

### TC-REV-007: Script Tag Sanitization
**Priority:** Critical  
**FR Code:** FR-S01

**Pre-conditions:**
- User can post reviews or Q&A

**Steps:**
1. Attempt to post review with: `<script>alert('XSS')</script>`
2. Submit
3. Observe rendered output

**Expected Result:**
- Script tags stripped/sanitized
- Plain text displayed: "<script>alert('XSS')</script>"
- No script execution

**Post-conditions:** Scripts sanitized

**Evidence:** Screenshot of sanitized output

---

### TC-REV-008: Safe URL Schemes Allowed
**Priority:** High  
**FR Code:** FR-S02

**Pre-conditions:**
- User posting Q&A

**Steps:**
1. Post Q&A with link: `[Author's website](https://example.com)`
2. Submit
3. Click link

**Expected Result:**
- HTTPS link renders correctly
- Link opens in new tab
- No security warning

**Post-conditions:** Safe URLs allowed

**Evidence:** Screenshot of working HTTPS link

---

<a name="notifications"></a>
## 7. NOTIFICATIONS TEST CASES

### TC-NOT-001: Notification Badge Update
**Priority:** Medium  
**FR Code:** FR-N01

**Pre-conditions:**
- User has no unread notifications

**Steps:**
1. Trigger notification event (e.g., order status change)
2. Observe notification badge

**Expected Result:**
- Badge displays unread count
- Badge updates in real-time
- Badge persists across page refresh

**Post-conditions:** Badge shows correct count

**Evidence:** Screenshot of notification badge

---

### TC-NOT-002: View Notification History
**Priority:** Medium  
**FR Code:** FR-N01

**Pre-conditions:**
- Multiple notifications exist

**Steps:**
1. Click notification icon
2. View notification list
3. Check timestamps and messages

**Expected Result:**
- All notifications listed in reverse chronological order
- Each shows: message, timestamp, read/unread status
- Unread notifications highlighted

**Post-conditions:** Notification history accessible

**Evidence:** Screenshot of notification list

---

### TC-NOT-003: Mark All Read (INTENTIONAL DEFECT)
**Priority:** Medium  
**FR Code:** FR-N02  
**Label:** `intentional-defect`

**Pre-conditions:**
- Multiple unread notifications exist

**Steps:**
1. Open notifications panel
2. Click "Mark All as Read"
3. Observe badge count

**Expected Result:**
- All notifications marked as read
- Badge count updates to 0

**Actual Result (Expected Defect):**
- Notifications marked as read in list
- Badge count does NOT update to 0
- Badge still shows old count

**Post-conditions:** Badge defect documented

**Evidence:** Screenshot showing badge not updating

---

### TC-NOT-004: Order Status Notification
**Priority:** Medium  
**FR Code:** FR-N01

**Pre-conditions:**
- User has an order

**Steps:**
1. Admin changes order status (e.g., Paid → Fulfilled)
2. Check user notifications

**Expected Result:**
- Notification generated for status change
- Message: "Your order #123 has been updated to Fulfilled"
- Badge increments

**Post-conditions:** Status change notification sent

**Evidence:** Screenshot of status notification

---

<a name="accessibility"></a>
## 8. ACCESSIBILITY TEST CASES

### TC-A11Y-001: Keyboard Navigation - Tab Order
**Priority:** High  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- User on catalog page

**Steps:**
1. Press Tab key repeatedly
2. Observe focus order through all interactive elements
3. Navigate search, filters, book cards

**Expected Result:**
- Focus moves in logical order: search → filters → book cards
- Focus visible on all interactive elements (outline/ring)
- No focus traps
- Can reach all interactive elements via keyboard

**Post-conditions:** Keyboard navigation works

**Evidence:** Screenshot showing focus indicators

---

### TC-A11Y-002: Screen Reader - Search Label
**Priority:** High  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- Screen reader enabled (NVDA/JAWS/VoiceOver)

**Steps:**
1. Navigate to search field
2. Focus on search input
3. Listen to screen reader announcement

**Expected Result:**
- Screen reader announces: "Search books by title, author, or description"
- Label properly associated with input
- Input purpose clear

**Post-conditions:** Search accessible to screen readers

**Evidence:** Audio recording or transcript of screen reader

---

### TC-A11Y-003: ESC Key Clears Search
**Priority:** Medium  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- Search field has text

**Steps:**
1. Enter text in search field
2. Press ESC key
3. Observe behavior

**Expected Result:**
- Search field clears
- Focus remains on search input
- Full catalog redisplays

**Post-conditions:** ESC clears search

**Evidence:** Screenshot showing cleared search

---

### TC-A11Y-004: Form Validation - Error Announcement
**Priority:** High  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- User on checkout form

**Steps:**
1. Leave required field empty
2. Submit form
3. Listen for screen reader announcement

**Expected Result:**
- Error announced via aria-live="polite"
- Error message linked to input field
- Focus moves to first error field
- Error message clearly describes issue

**Post-conditions:** Validation errors accessible

**Evidence:** Screen reader recording of error announcement

---

### TC-A11Y-005: Modal Focus Management (INTENTIONAL DEFECT)
**Priority:** High  
**FR Code:** FR-X01  
**Label:** `intentional-defect`, `a11y`

**Pre-conditions:**
- Modal dialog can be opened (e.g., cart modal, confirmation dialog)

**Steps:**
1. Open a modal dialog
2. Check for aria-modal="true" attribute
3. Press Tab to navigate
4. Close modal
5. Check if focus returns to trigger element

**Expected Result:**
- Modal has aria-modal="true"
- Focus trapped within modal while open
- ESC closes modal
- Focus returns to element that opened modal

**Actual Result (Expected Defect):**
- aria-modal="true" missing
- Focus not trapped (can tab to background)
- Focus not returned after close

**Post-conditions:** Modal accessibility defect documented

**Evidence:** Screenshot of modal HTML showing missing aria-modal

---

### TC-A11Y-006: Image Alt Text
**Priority:** High  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- Books with images in catalog

**Steps:**
1. Navigate to catalog
2. Inspect image elements
3. Check alt attribute content

**Expected Result:**
- All images have alt text
- Alt text includes: book title + author
- Format: "Book Title by Author Name"
- No empty alt attributes on meaningful images

**Post-conditions:** Images have descriptive alt text

**Evidence:** Screenshot of HTML showing alt attributes

---

### TC-A11Y-007: Color Contrast - WCAG AA
**Priority:** High  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- axe DevTools or WAVE installed

**Steps:**
1. Navigate to any page
2. Run axe DevTools accessibility scan
3. Check color contrast issues
4. Verify contrast ratios

**Expected Result:**
- Text contrast ratio ≥ 4.5:1 for normal text
- Text contrast ratio ≥ 3:1 for large text (18pt+)
- No WCAG AA contrast failures
- Interactive elements meet contrast requirements

**Post-conditions:** Color contrast meets WCAG 2.1 AA

**Evidence:** Screenshot of axe DevTools report

---

### TC-A11Y-008: Reduce Motion Preference
**Priority:** Medium  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- OS/browser setting prefers-reduced-motion enabled

**Steps:**
1. Enable prefers-reduced-motion in browser/OS
2. Navigate through application
3. Observe animations and transitions

**Expected Result:**
- Animations disabled or significantly reduced
- Essential motion still conveys information
- Transitions are instant or very brief
- No spinning or parallax effects

**Post-conditions:** Motion preferences respected

**Evidence:** Video showing reduced motion behavior

---

### TC-A11Y-009: ARIA Live Regions for Status Updates
**Priority:** Medium  
**FR Code:** FR-X01  
**Label:** `a11y`

**Pre-conditions:**
- Dynamic content updates occur (e.g., cart update, form submission)

**Steps:**
1. Enable screen reader
2. Add item to cart
3. Listen for announcement
4. Submit form with error
5. Listen for error announcement

**Expected Result:**
- Success messages announced with aria-live="polite"
- Error messages announced with aria-live="assertive" or "polite"
- Announcements don't interrupt user
- Status changes communicated clearly

**Post-conditions:** Live regions announce updates

**Evidence:** Screen reader transcript of announcements

---

<a name="performance"></a>
## 9. PERFORMANCE TEST CASES

### TC-PERF-001: Largest Contentful Paint (LCP) - Desktop
**Priority:** High  
**FR Code:** FR-X02  
**Label:** `perf`

**Pre-conditions:**
- Lighthouse installed
- Test on desktop viewport

**Steps:**
1. Open Chrome DevTools
2. Navigate to Lighthouse tab
3. Select Desktop, Performance category
4. Run audit on catalog page
5. Check LCP metric

**Expected Result:**
- LCP ≤ 2.5 seconds on desktop
- Main content (hero image or first book cards) loads quickly
- Score: Good (green)

**Post-conditions:** LCP meets desktop budget

**Evidence:** Screenshot of Lighthouse report showing LCP

---

### TC-PERF-002: Largest Contentful Paint (LCP) - Mobile
**Priority:** High  
**FR Code:** FR-X02  
**Label:** `perf`

**Pre-conditions:**
- Lighthouse set to Mobile
- Throttling enabled (Slow 4G)

**Steps:**
1. Open Chrome DevTools
2. Set device to Mobile
3. Enable throttling: Slow 4G
4. Run Lighthouse audit
5. Check LCP metric

**Expected Result:**
- LCP ≤ 3.0 seconds on mobile
- Critical rendering path optimized
- Score: Good (green) or Needs Improvement (yellow)

**Post-conditions:** LCP acceptable for mobile

**Evidence:** Screenshot of Lighthouse mobile report

---

### TC-PERF-003: Time to Interactive (TTI)
**Priority:** High  
**FR Code:** FR-X02  
**Label:** `perf`

**Pre-conditions:**
- Lighthouse configured

**Steps:**
1. Run Lighthouse on critical pages (catalog, checkout)
2. Check Time to Interactive metric
3. Test interactivity timing

**Expected Result:**
- TTI ≤ 1 second on critical interactions
- Page responds quickly to user input
- No long tasks blocking main thread

**Post-conditions:** TTI meets budget

**Evidence:** Screenshot of TTI metric from Lighthouse

---

### TC-PERF-004: Cumulative Layout Shift (CLS)
**Priority:** Medium  
**FR Code:** FR-X02  
**Label:** `perf`

**Pre-conditions:**
- Page with images and dynamic content

**Steps:**
1. Navigate to catalog page
2. Run Lighthouse audit
3. Check CLS score
4. Observe visual stability during load

**Expected Result:**
- CLS score ≤ 0.1 (good)
- Images have explicit width/height attributes
- No content jumping during load
- Minimal layout shifts

**Post-conditions:** Layout stable during load

**Evidence:** Screenshot showing CLS score

---

### TC-PERF-005: Image Optimization
**Priority:** Medium  
**FR Code:** FR-X02  
**Label:** `perf`

**Pre-conditions:**
- Catalog has multiple images

**Steps:**
1. Open Network tab in DevTools
2. Navigate to catalog
3. Check image sizes and formats
4. Verify lazy loading

**Expected Result:**
- Images optimized (WebP preferred)
- Appropriate image sizes (not oversized)
- Images have width/height attributes
- Lazy loading implemented (loading="lazy")

**Post-conditions:** Images optimized for performance

**Evidence:** Screenshot of Network tab showing image requests

---

### TC-PERF-006: PageSpeed Insights Score
**Priority:** Medium  
**FR Code:** FR-X02  
**Label:** `perf`

**Pre-conditions:**
- Application deployed or accessible via public URL

**Steps:**
1. Navigate to PageSpeed Insights (https://pagespeed.web.dev/)
2. Enter application URL
3. Run analysis for Mobile and Desktop
4. Review scores and recommendations

**Expected Result:**
- Performance score ≥ 70 (yellow) or ≥ 90 (green)
- Core Web Vitals pass
- Actionable recommendations documented

**Post-conditions:** Performance benchmarked

**Evidence:** Screenshot of PageSpeed Insights results

---

<a name="security"></a>
## 10. SECURITY & SANITIZATION TEST CASES

### TC-SEC-001: UGC Script Injection Prevention
**Priority:** Critical  
**FR Code:** FR-S01  
**Label:** `security`

**Pre-conditions:**
- User can submit reviews or Q&A

**Steps:**
1. Navigate to review form
2. Enter: `<script>alert('XSS')</script>Test Review`
3. Submit review
4. View rendered review

**Expected Result:**
- Script tags stripped or escaped
- Rendered as plain text: "<script>alert('XSS')</script>Test Review"
- No JavaScript execution
- HTML entities escaped

**Post-conditions:** Script injection blocked

**Evidence:** Screenshot showing escaped script tags

---

### TC-SEC-002: SQL Injection in Search
**Priority:** Critical  
**FR Code:** FR-S01  
**Label:** `security`

**Pre-conditions:**
- Search functionality available

**Steps:**
1. Enter SQL injection payload in search: `' OR '1'='1`
2. Submit search
3. Observe results

**Expected Result:**
- Search treats input as literal string
- No database errors
- No unauthorized data returned
- Input sanitized

**Post-conditions:** SQL injection prevented

**Evidence:** Screenshot showing safe search handling

---

### TC-SEC-003: XSS via Image URL
**Priority:** High  
**FR Code:** FR-S01  
**Label:** `security`

**Pre-conditions:**
- Admin can add books with image URLs

**Steps:**
1. Navigate to admin catalog management
2. Attempt to add book with malicious image URL: `javascript:alert('XSS')`
3. Save and view book

**Expected Result:**
- Invalid URL rejected
- Error message: "Please enter a valid image URL"
- Only http/https URLs accepted

**Post-conditions:** Malicious URLs blocked

**Evidence:** Screenshot of validation error

---

### TC-SEC-004: URL Scheme Whitelist Validation
**Priority:** High  
**FR Code:** FR-S02  
**Label:** `security`

**Pre-conditions:**
- User can post links in reviews/Q&A

**Steps:**
1. Test various URL schemes:
   - `https://example.com` (should work)
   - `http://example.com` (should work)
   - `javascript:alert('XSS')` (should block)
   - `data:text/html,<script>alert('XSS')</script>` (should block)
   - `ftp://example.com` (should block)
2. Submit each and observe behavior

**Expected Result:**
- Only http:// and https:// schemes allowed
- All other schemes blocked or stripped
- Clear error message for invalid schemes

**Post-conditions:** URL scheme whitelist enforced

**Evidence:** Screenshots of each test case

---

### TC-SEC-005: localStorage Quota Handling
**Priority:** Medium  
**FR Code:** FR-S03  
**Label:** `security`

**Pre-conditions:**
- Browser localStorage available

**Steps:**
1. Fill localStorage to near-capacity with large cart
2. Attempt to add more items
3. Observe error handling

**Expected Result:**
- Graceful error message: "Storage limit reached"
- Application doesn't crash
- User informed and can continue
- Alternative action suggested (clear cart, checkout)

**Post-conditions:** Quota errors handled gracefully

**Evidence:** Screenshot of quota error message

---

### TC-SEC-006: JSON Parse Error Handling
**Priority:** Medium  
**FR Code:** FR-S03

**Pre-conditions:**
- Corrupted data in localStorage

**Steps:**
1. Manually corrupt localStorage data: `localStorage.setItem('app.cart', '{invalid json')`
2. Refresh application
3. Observe error handling

**Expected Result:**
- Application handles parse error gracefully
- Falls back to empty/default state
- Error logged but doesn't crash app
- User can continue using app

**Post-conditions:** Parse errors handled

**Evidence:** Screenshot/console log of error handling

---

### TC-SEC-007: HTTPS Enforcement
**Priority:** High  
**FR Code:** FR-X04  
**Label:** `security`

**Pre-conditions:**
- Application deployed

**Steps:**
1. Attempt to access application via HTTP
2. Check for redirect to HTTPS
3. Verify all resources load over HTTPS

**Expected Result:**
- HTTP requests redirect to HTTPS
- All assets (images, scripts, styles) load via HTTPS
- No mixed content warnings
- Paystack script loads securely

**Post-conditions:** HTTPS enforced

**Evidence:** Screenshot of secure connection indicator

---

<a name="compatibility"></a>
## 11. COMPATIBILITY TEST CASES

### TC-COMPAT-001: Chrome Latest Version
**Priority:** High  
**FR Code:** FR-X03

**Pre-conditions:**
- Latest Chrome installed

**Steps:**
1. Open application in Chrome (latest version)
2. Test core flows: browse → cart → checkout → payment
3. Check responsive breakpoints: mobile (375px), tablet (768px), desktop (1024px+)
4. Verify all features work

**Expected Result:**
- All features functional
- No console errors
- Responsive design works at all breakpoints
- Paystack integration works
- Visual elements render correctly

**Post-conditions:** Chrome compatibility verified

**Evidence:** Screenshots at each breakpoint

---

### TC-COMPAT-002: Firefox Latest Version
**Priority:** High  
**FR Code:** FR-X03

**Pre-conditions:**
- Latest Firefox installed

**Steps:**
1. Open application in Firefox
2. Test core flows
3. Check responsive breakpoints
4. Verify payment integration

**Expected Result:**
- All features work as in Chrome
- No Firefox-specific issues
- CSS renders correctly
- localStorage functions properly

**Post-conditions:** Firefox compatibility verified

**Evidence:** Screenshots showing functionality

---

### TC-COMPAT-003: Safari Latest Version
**Priority:** High  
**FR Code:** FR-X03

**Pre-conditions:**
- Latest Safari installed (macOS or iOS)

**Steps:**
1. Open application in Safari
2. Test core flows
3. Check for Safari-specific issues
4. Test on iOS Safari if possible

**Expected Result:**
- All features functional
- No Safari rendering issues
- Date pickers work correctly
- Paystack modal opens properly

**Post-conditions:** Safari compatibility verified

**Evidence:** Screenshots from Safari

---

### TC-COMPAT-004: Edge Latest Version
**Priority:** High  
**FR Code:** FR-X03

**Pre-conditions:**
- Latest Edge (Chromium-based) installed

**Steps:**
1. Open application in Edge
2. Test core flows
3. Verify all features

**Expected Result:**
- Application works in Edge
- No Edge-specific issues
- Compatible with Chromium-based Edge

**Post-conditions:** Edge compatibility verified

**Evidence:** Screenshots from Edge

---

### TC-COMPAT-005: Mobile Responsive - Portrait
**Priority:** High  
**FR Code:** FR-X03

**Pre-conditions:**
- Mobile device or DevTools device emulation

**Steps:**
1. Set viewport to mobile portrait (375x667)
2. Navigate through all pages
3. Test interactions: tap, scroll, form input
4. Verify readability and usability

**Expected Result:**
- All content fits viewport
- Text readable without zoom
- Touch targets ≥ 44x44px
- Navigation accessible
- No horizontal scroll

**Post-conditions:** Mobile portrait works

**Evidence:** Screenshots of mobile portrait views

---

### TC-COMPAT-006: Tablet Responsive - Landscape
**Priority:** Medium  
**FR Code:** FR-X03

**Pre-conditions:**
- Tablet device or emulation

**Steps:**
1. Set viewport to tablet landscape (1024x768)
2. Navigate through application
3. Verify layout adapts appropriately

**Expected Result:**
- Layout uses tablet-optimized design
- Content well-distributed
- No awkward gaps or overflow
- Touch interactions work

**Post-conditions:** Tablet landscape verified

**Evidence:** Screenshots of tablet views

---

### TC-COMPAT-007: Desktop Large Screen
**Priority:** Medium  
**FR Code:** FR-X03

**Pre-conditions:**
- Large desktop viewport (1920x1080+)

**Steps:**
1. Set viewport to 1920x1080 or larger
2. Check layout scaling
3. Verify max-width constraints

**Expected Result:**
- Content doesn't stretch excessively
- Reasonable max-width applied
- Layout remains readable
- No visual breaks

**Post-conditions:** Large screen compatibility verified

**Evidence:** Screenshot of large screen view

---

### TC-COMPAT-008: Network Throttling - Slow 3G
**Priority:** Medium  
**FR Code:** FR-X02, FR-X03

**Pre-conditions:**
- DevTools throttling available

**Steps:**
1. Enable Slow 3G throttling in DevTools
2. Navigate to catalog page
3. Observe loading behavior and user experience

**Expected Result:**
- Loading indicators display
- Progressive content loading
- No timeouts or errors
- Application remains usable
- Critical content loads first

**Post-conditions:** Works on slow networks

**Evidence:** Screenshot/video of loading on Slow 3G

---

## TEST EXECUTION SUMMARY

### Total Test Cases by Priority
- **Critical:** 12 test cases
- **High:** 45 test cases
- **Medium:** 31 test cases
- **Total:** 88 test cases

### Total Test Cases by Category
- Catalog & Discovery: 6
- Cart & Checkout: 9
- Payment Integration: 6
- Orders & CSV Export: 8
- Admin Console: 6
- Reviews & Community: 8
- Notifications: 4
- Accessibility: 9
- Performance: 6
- Security & Sanitization: 7
- Compatibility: 8

### All 10 Intentional Defects Targeted
1. ✓ TC-CAT-003: Search diacritics not normalized
2. ✓ TC-CAT-006: Images not lazy-loaded
3. ✓ TC-CART-004: Mini-cart stock race condition
4. ✓ TC-CART-005: Rounding variance ±$0.01
5. ✓ TC-PAY-002: Currency mismatch
6. ✓ TC-ORD-005: CSV decimal comma breaking columns
7. ✓ TC-ORD-007: Return window off-by-one Day 8
8. ✓ TC-REV-006: XSS via javascript: URL
9. ✓ TC-NOT-003: Notification badge not updated
10. ✓ TC-A11Y-005: Modal aria-modal missing

### Coverage Map to FR Codes
- FR-O01 (Cart operations): TC-CART-001 to TC-CART-009
- FR-O02 (Checkout wizard): Covered in checkout flow tests
- FR-O03 (Payments): TC-PAY-001 to TC-PAY-006
- FR-O04 (Orders): TC-ORD-001 to TC-ORD-004
- FR-O05 (Order lifecycle): TC-ORD-003
- FR-R01 (Returns): TC-ORD-006, TC-ORD-007
- FR-R02, FR-R03 (Refunds): TC-ORD-008
- FR-U01 (Reviews): TC-REV-001 to TC-REV-003
- FR-U02 (Moderation): TC-REV-004
- FR-U03 (Q&A): TC-REV-005 to TC-REV-008
- FR-M01 (Catalog CRUD): TC-ADM-003
- FR-M02 (Inventory): TC-ADM-004, TC-ADM-005
- FR-M03 (Orders dashboard): TC-ADM-001, TC-ADM-002
- FR-M04 (Moderation): TC-ADM-006
- FR-N01 (Notifications): TC-NOT-001, TC-NOT-002, TC-NOT-004
- FR-N02 (Mark all read): TC-NOT-003
- FR-X01 (Accessibility): TC-A11Y-001 to TC-A11Y-009
- FR-X02 (Performance): TC-PERF-001 to TC-PERF-006
- FR-X03 (Compatibility): TC-COMPAT-001 to TC-COMPAT-008
- FR-X04 (Security hygiene): TC-SEC-007
- FR-S01 (Sanitization): TC-SEC-001, TC-REV-006, TC-REV-007
- FR-S02 (URL scheme validation): TC-SEC-004
- FR-S03 (Storage errors): TC-SEC-005, TC-SEC-006

---

## EXECUTION STRATEGY FOR WEEK 2

### Week 2 Focus (Nov 11 Deadline)
**Execute Critical and High Priority test cases first:**

#### Day 1-2: Critical Test Cases (12)
- TC-CART-001: Add Item to Cart
- TC-PAY-001: Currency Validation
- TC-PAY-003: Payment Success Flow
- TC-ORD-003: Order Status Transitions
- TC-ADM-001: Admin Access Guard
- TC-ADM-002: Admin Access with Valid Role
- TC-REV-006: XSS via JavaScript URL (intentional defect)
- TC-SEC-001: UGC Script Injection Prevention
- TC-SEC-002: SQL Injection in Search

#### Day 3-4: High Priority Test Cases (Focus on Intentional Defects)
- TC-CAT-003: Search with Diacritics (defect)
- TC-CAT-006: Image Lazy Loading (defect)
- TC-CART-004: Mini-Cart Stock Race (defect)
- TC-CART-005: Rounding Variance (defect)
- TC-PAY-002: Currency Mismatch (defect)
- TC-ORD-005: CSV Decimal Format (defect)
- TC-ORD-007: Return Window Off-by-One (defect)
- TC-NOT-003: Mark All Read (defect)
- TC-A11Y-005: Modal Focus Management (defect)

#### Day 5-7: Remaining High Priority
- Complete cart, payment, order, admin test cases
- Accessibility and security high priority items

### Evidence Requirements
- Screenshot for EVERY test case (minimum)
- Video for intentional defects
- Screen reader recordings for accessibility
- Lighthouse reports for performance

### Defect Logging
As you find bugs:
1. Log in Jira immediately
2. Use Bug Report Template
3. Attach evidence (screenshots/videos)
4. Link to test case ID
5. Add appropriate labels (intentional-defect, a11y, perf, security)

---

## NOTES FOR TEST EXECUTION

### Environment Setup Required
1. Install browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
2. Install accessibility tools: axe DevTools, WAVE extension
3. Install screen readers: NVDA (Windows), JAWS (Windows), VoiceOver (macOS)
4. Configure .env file with test Paystack key and currency
5. Set up screen recording tools for evidence capture

### Data Preparation
1. Create test user accounts
2. Prepare test books with various price points
3. Set up test coupons (valid, expired, min basket, non-combinable)
4. Create orders in various states for testing
5. Configure admin user in localStorage: `localStorage.setItem('app.user', JSON.stringify({ role: 'admin' }))`

---

**Document Prepared By:** RAID Team  
**Date:** November 6, 2025  
**Status:** Ready for Week 2 Execution  
**Next Action:** Begin executing Critical priority test cases and logging bugs in Jira

---

**COMPLETE - ALL 88 TEST CASES INCLUDED**



















### 🐞 Bug Report (defect log entry)
- ID: BUG-<area>-<number>
- Summary: Clear, action-oriented title
- Severity/Priority: (Critical/Major/Minor) / (High/Medium/Low)
- Environment: Browser, version; OS/device; network
- Affected FR(s): e.g., FR-O02
- Steps to Reproduce: Numbered
- Expected Result: …
- Actual Result: …
- Attachments: Paths to screenshots/videos
- Notes: Workarounds, scope of impact

## 📚 Required Artifacts
- Test plan, test cases, defect logs
- Environment notes (browser versions, devices)
- Accessibility/performance findings with metrics (LCP, TTI) and tools used
- CSV exports or screenshots from management tool

## 🗂️ File Naming
- `team-<name>_final-report.md`, `team-<name>_presentation.(mp4|link)`, etc.
- Include team name and date on first page of all documents

## 🏆 Grading Rubric (Guidelines)
- Testing Thoroughness (35%): coverage, depth, negative paths, a11y/perf checks
- Documentation Quality (25%): clarity, structure, evidence, traceability to FR codes
- Video Presentation (20%): concise, insightful, well-evidenced
- Project Management (15%): organized board, statuses, filters/dashboards
- Team Collaboration (5%): roles, consistency, communication

## 📜 Policies
- Late submissions: per course policy (confirm with instructor)
- Academic integrity: cite sources; individual contributions documented
- Privacy: redact keys; do not expose production credentials

## 🎥 Presentation Checklist
- 5 minutes max; follow `video-guide.md`
- 2–3 top defects with evidence and impact
- Include a11y/perf highlights (metrics, tools)
- Recommendations aligned to risk


































# SEREVA Evidence Capsule — High-Stakes Workflow Hardening

Verified: 13 August 2026

## Claim boundary

SEREVA is a self-initiated fictional patient portal. It proves front-end workflow
and regression engineering; it is not medical advice, a clinical product, paid
client work, or a compliance certification.

## Failure baseline

The retained legacy result reproduces three automated defect families:

- unnamed button;
- insufficient color contrast;
- unlabelled form control.

## Acceptance evidence

| Boundary | Executable evidence |
|---|---|
| Result navigation | Opening a result moves focus to the main result surface |
| Status communication | Lab table exposes `Below range` in text, not color alone |
| Chart equivalence | A named historical data table is available beside the visualization |
| Refill workflow | Native dialog exposes labelled pharmacy and message controls |
| State completion | Submitting the refill shows a named success dialog and closes cleanly |
| Keyboard entry | Skip link is the first keyboard stop |
| Mobile | Open refill dialog produces no horizontal overflow at 390×844 |
| Automated accessibility | Tested states return zero violations for the configured axe tags |

## Verified quality gates

- ESLint with zero allowed warnings: **passed**.
- TypeScript production build: **passed**.
- Vite build: **1.21s**.
- Playwright/axe regression suite: **5/5 passed in 27.1s**.
- JavaScript bundle: **205.18 kB / 63.74 kB gzip**.
- CSS bundle after font optimization: **14.08 kB / 3.62 kB gzip**.
- Font output reduced from 54 generated font files to 10 by shipping only the Latin subsets used by the interface.

## Rescue offer this supports

**High-Stakes Portal Workflow Sprint** for health, finance, insurance, and account
portals where status, chart alternatives, modal focus, and confirmation states
must remain explicit and testable.

## Honest limitations

No PHI is processed. Authentication, authorization, audit logs, encryption,
clinical validation, backend failure paths, screen readers, high contrast, zoom,
and production compliance remain separate engagement scopes.

## Proposal-ready proof line

> SEREVA shows how I harden a consequential portal flow without claiming clinical
> compliance: the controlled baseline reproduces known defects, while five
> Playwright/axe scenarios verify text-backed result status, equivalent chart data,
> refill-dialog completion, keyboard entry, and mobile containment.

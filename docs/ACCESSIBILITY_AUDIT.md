# Accessibility Audit Record

## Tested scope

Patient overview, care-task states, result navigation, complete blood count table, haemoglobin chart and data disclosure, refill dialog, success state, first-focus skip link, and 390px layout.

Automated tags: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, and `wcag22aa`.

## Controlled baseline

`audit/fixtures/legacy-results.html` intentionally exposes missing button name, insufficient contrast, and missing textarea label. It is controlled portfolio evidence, not client history.

## Remediation evidence

| Risk | Evidence |
| --- | --- |
| Color-only result | “Below range” / “In range” text plus distinct icons |
| Table ambiguity | Caption, column headers, and row headers |
| Visual-only chart | SVG title/description and an expandable data table |
| Dialog context/focus | Native modal dialog with an accessible title and close action |
| Form ambiguity | Explicit labels, optional-state wording, and native select/textarea |
| Lost success state | Dialog name and visible content update to “Request sent” |
| Small-screen failure | Mobile sheet, 44px targets, and overflow assertion |

Five scenarios pass with no configured axe violations in tested states.

Not claimed: medical validation, certification, legal compliance, full WCAG audit, or completed screen-reader testing.


# SEREVA Case Study

## Summary

SEREVA is a self-initiated technical case study for a fictional healthcare patient portal. I designed and built a product surface that helps a patient identify care tasks, interpret result status, access the underlying chart data, and request a medication refill.

Role: product design, front-end engineering, accessibility remediation, interaction design, and automated regression coverage.

Stack: React, TypeScript, Vite, CSS, Playwright, and axe-core.

## Problem

Healthcare portals must communicate consequential information without relying on color, visual charts, or pointer-only interactions. Lab tables, care tasks, messages, and modal forms create failure points when status is ambiguous, focus is lost, or a visualization has no equivalent data.

## Solution

The dashboard uses explicit care-task status and clear action hierarchy. The results screen uses a semantic table, written status, icons, an accessible SVG description, and a complete chart-data disclosure. The refill workflow uses a native dialog, labelled form controls, an emergency-service clarification, cancellation, and a local success state.

## Verification

Five Playwright scenarios pass: reproducible baseline defects, clean configured axe scans, navigation focus movement, table/chart evidence, dialog labelling and success, skip navigation, and mobile overflow protection.

Automated testing applies only to the tested states and rules. No medical outcome, certification, complete audit, or completed screen-reader matrix is claimed.

## Business value

- Makes patient tasks and abnormal status easier to understand
- Gives non-visual users equivalent access to chart data
- Reduces ambiguity in a medication-refill workflow
- Gives engineering teams repeatable regression evidence


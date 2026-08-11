import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'
import { readFile } from 'node:fs/promises'
const tags = ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']
async function clean(page: Page) { const result = await new AxeBuilder({ page }).withTags(tags).analyze(); expect(result.violations, JSON.stringify(result.violations,null,2)).toEqual([]) }

test('controlled legacy result preserves expected baseline defects', async ({ page }) => { const fixture = await readFile(new URL('../audit/fixtures/legacy-results.html', import.meta.url),'utf8'); await page.setContent(fixture); const ids=(await new AxeBuilder({page}).withTags(tags).analyze()).violations.map(v=>v.id); expect(ids).toEqual(expect.arrayContaining(['button-name','color-contrast','label'])) })

test('overview is clean and result navigation moves focus to main', async ({ page }) => { await page.goto('/'); await expect(page.getByRole('heading',{name:'Good morning, Kalil.'})).toBeVisible(); await clean(page); await page.getByRole('button',{name:/Review result/}).click(); await expect(page.getByRole('main')).toBeFocused(); await expect(page.getByRole('heading',{name:'Complete blood count'})).toBeVisible() })

test('results table communicates status in text and exposes chart data', async ({ page }) => { await page.goto('/'); await page.getByRole('button',{name:/Review result/}).click(); const row=page.getByRole('row',{name:/Haemoglobin/}); await expect(row).toContainText('Below range'); await page.getByText('View chart data').click(); await expect(page.getByRole('table',{name:'Haemoglobin history'})).toBeVisible(); await clean(page) })

test('refill dialog labels controls, confirms submission, and closes', async ({ page }) => { await page.goto('/'); await page.getByRole('button',{name:/Request refill/}).first().click(); const dialog=page.getByRole('dialog',{name:'Request Metformin refill'}); await expect(dialog).toBeVisible(); await expect(dialog.getByLabel('Preferred pharmacy')).toHaveValue('central'); await dialog.getByLabel(/Message for your care team/).fill('Please confirm when this is ready.'); await dialog.getByRole('button',{name:'Send request'}).click(); const success=page.getByRole('dialog',{name:'Request sent'}); await expect(success.getByRole('heading',{name:'Request sent'})).toBeVisible(); await clean(page); await success.getByRole('button',{name:'Return to overview'}).click(); await expect(success).toBeHidden() })

test('skip link is first and mobile dialog has no horizontal overflow', async ({ page }) => { await page.setViewportSize({width:390,height:844}); await page.goto('/'); await page.keyboard.press('Tab'); await expect(page.getByRole('link',{name:'Skip to main content'})).toBeFocused(); await page.getByRole('button',{name:/Request refill/}).first().click(); const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth); expect(overflow).toBe(false); await clean(page) })

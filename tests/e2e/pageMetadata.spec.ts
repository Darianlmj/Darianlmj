/**
 * This test suite is for testing the metadata of the page.
 */
import { test, expect, Page } from '@playwright/test'
import { PageMetadata } from './page-objects/page-metadata'
import { HomePage } from './page-objects/home-page'

test.beforeEach(async ({ page }: { page: Page }) => {
  const homePage = new HomePage(page)
  await homePage.navigateToHomePage()
})

test.describe('Page Metadata Tests', () => {
  test('should have correct title and meta description', async ({ page }) => {
    const metadata = new PageMetadata(page)

    await expect(metadata.getTitle()).resolves.toBe('Darian Lee')
    await expect(metadata.getMetaContent('description')).resolves.toBe(
      'Software engineer by day, photographer by later day (sometimes night)'
    )
  })

  test('should have correct charset', async ({ page }) => {
    const metadata = new PageMetadata(page)

    await expect(metadata.getCharset()).resolves.toBe('utf-8')
  })

  test('should have correct viewport meta tag', async ({ page }) => {
    const metadata = new PageMetadata(page)

    await expect(metadata.getViewportContent()).resolves.toBe(
      'width=device-width, initial-scale=1'
    )
  })
})

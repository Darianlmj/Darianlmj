/**
 * This test suite is for testing the home page.
 */
import { test, expect, Page } from '@playwright/test'
import { HomePage } from './page-objects/home-page'
import { HeroBanner } from './page-objects/hero-banner'

test.beforeEach(async ({ page }: { page: Page }) => {
  const homePage = new HomePage(page)
  await homePage.navigateToHomePage()
})

test.describe('Home Page Tests', () => {
  test.describe('Page Components', () => {
    test('should have navigation bar', async ({ page }) => {
      const homePage = new HomePage(page)

      await expect(homePage.isNavigationBarVisible()).resolves.toBe(true)
    })

    test('should have hero section', async ({ page }) => {
      const homePage = new HomePage(page)

      await expect(homePage.getSection('hero-banner')).resolves.toBe(true)
    })

    test('should have body sections', async ({ page }) => {
      const homePage = new HomePage(page)

      await expect(homePage.getSection('nerd-stuff')).resolves.toBe(true)
      await expect(homePage.getSection('projects')).resolves.toBe(true)
      await expect(homePage.getSection('experience')).resolves.toBe(true)
      await expect(homePage.getSection('about')).resolves.toBe(true)
      await expect(homePage.getSection('photography')).resolves.toBe(true)
      await expect(homePage.getSection('contact')).resolves.toBe(true)
    })
  })

  test.describe('Hero Banner Component', () => {
    let heroBanner: HeroBanner;
  
    test.beforeEach(async ({ page }) => {
      heroBanner = new HeroBanner(page);
    });
  
    test('should render the hero banner', async () => {
      expect(await heroBanner.isVisible()).toBeTruthy();
    });
  
    test('should display the correct typing animation text', async () => {
      await expect
        .poll(async () => await heroBanner.getTypingText(), {
          timeout: 5000,
          intervals: [100, 200, 300]
        })
        .toBe("Hi there, I'm Darian");
    });
  
    test('should display the correct title with focus word', async () => {
      const title = await heroBanner.getTitleText();
      expect(title?.replace(/\u00A0/g, ' ')).toBe('Fullstack Software Engineer based in Sydney, Australia');
    });

    test('should display the correct focus word', async () => {
      const focusWord = await heroBanner.getFocusWord();
      expect(focusWord).not.toBeNull();
      expect(focusWord).not.toBe('');
      expect(focusWord).toBe('Software Engineer');
    });
  
    test('should display the correct description', async () => {
      const description = await heroBanner.getDescriptionText();
      expect(description).not.toBeNull();
      expect(description).not.toBe('');
      expect(description).toBe('I love experimenting and developing with exciting new technologies. I also dabble in product design, illustration and photography.');
    });
  
    test('should have correct primary button linking to projects', async () => {
      const href = await heroBanner.getPrimaryButtonHref();
      expect(href).toBe('/#projects');
    });
  
    test('should have correct secondary button linking to contact section', async () => {
      const href = await heroBanner.getSecondaryButtonHref();
      expect(href).toBe('/#contact');
    });
  });
})

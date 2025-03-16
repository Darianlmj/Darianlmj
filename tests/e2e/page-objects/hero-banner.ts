import { Page, Locator } from '@playwright/test';

export class HeroBanner {
  readonly page: Page;
  readonly heroSection: Locator;
  readonly typingText: Locator;
  readonly title: Locator;
  readonly focusWord: Locator;
  readonly description: Locator;
  readonly primaryButton: Locator;
  readonly secondaryButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroSection = page.locator('#hero-banner');
    this.typingText = page.locator('#hero-banner .text-2xl.font-semibold.tracking-tight');
    this.title = page.locator('#hero-banner h1.text-4xl.font-extrabold.tracking-tight');
    this.focusWord = page.locator('#hero-banner span');
    this.description = page.locator('#hero-banner p');
    this.primaryButton = page.locator('#hero-banner a:has-text("Check out my work")');
    this.secondaryButton = page.locator('#hero-banner a:has-text("Connect with me")');
  }

  async isVisible() {
    await this.heroSection.waitFor();
    return await this.heroSection.isVisible();
  }

  async getTypingText() {
    return await this.typingText.textContent();
  }

  async getTitleText() {
    return await this.title.textContent();
  }

  async getFocusWord() {
    return await this.focusWord.textContent();
  }

  async getDescriptionText() {
    return await this.description.textContent();
  }

  async getPrimaryButtonHref() {
    return await this.primaryButton.getAttribute('href');
  }

  async getSecondaryButtonHref() {
    return await this.secondaryButton.getAttribute('href');
  }
}

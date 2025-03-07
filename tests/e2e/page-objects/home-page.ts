import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto(process.env.TEST_APP_URL || 'http://localhost:3001');
  }

  async isNavigationBarVisible(): Promise<boolean> {
    return await this.page.isVisible('nav');
  }

  async getSection(sectionId: string): Promise<boolean> {
    return await this.page.isVisible(`section[id="${sectionId}"]`);
  }
}

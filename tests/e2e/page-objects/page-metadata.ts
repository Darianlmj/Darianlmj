import { Page } from "@playwright/test";

export class PageMetadata {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getMetaContent(name: string): Promise<string | null> {
    return await this.page.locator(`meta[name="${name}"]`).getAttribute("content");
  }

  async getCharset(): Promise<string | null> {
    return await this.page.locator("meta[charset]").getAttribute("charset");
  }

  async getCanonicalUrl(): Promise<string | null> {
    return await this.page.locator('link[rel="canonical"]').getAttribute("href");
  }

  async getViewportContent(): Promise<string | null> {
    return await this.getMetaContent("viewport");
  }
}

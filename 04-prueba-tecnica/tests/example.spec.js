// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_IMAGE_API = 'https://cataas.com/cat/says'

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.locator('h1');
  const image = await page.locator('img');

  const textContext = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({textContext, imageSrc})

  await expect(textContext?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_API)).toBeTruthy()
});

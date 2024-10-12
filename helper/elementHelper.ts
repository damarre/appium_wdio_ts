import { Element } from 'webdriverio';

/**
 * Sets a value for an element and verifies it.
 * @param element - The element to set the value for.
 * @param value - The value to set and verify.
 * @throws Error if the current value does not match the expected value.
 */
export async function setFieldAndVerify(element: Element<'async'>, value: string): Promise<void> {
  await element.setValue(value);
  const currentValue = await element.getText();
  if (currentValue !== value) {
    throw new Error(`Expected value "${value}" but got "${currentValue}"`);
  }
}

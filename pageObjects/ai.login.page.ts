/**
 * author: damar
 * date  : 30/10/2024
 */

import fs from 'fs';
import { ai, chatGPT, savePageSource, getCommandFromChatGPT } from '../helper/gptHelper';


class LoginPage {

  async doLogin() {
    await ai(`User want to fill "username" field with "standard_user"`);
    await ai(`User want to fill "password" field with "secret_sauce"`);
    await ai(`User click "LOGIN" button`);
  }

  async selectProduct() {
    await ais(`User click "Source Labs Backpack" text`);
  }
}

export default new LoginPage();

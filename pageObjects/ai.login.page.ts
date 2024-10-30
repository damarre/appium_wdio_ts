/**
 * author: damar
 * date  : 4/10/2024
 */
import fs from 'fs';
import { ais, chatGPT, savePageSource, getCommandFromChatGPT } from '../helper/gptHelper';


class LoginPage {

  async doLogin() {
    await ais(`User want to fill "username" field with "standard_user"`);
    await ais(`User want to fill "password" field with "secret_sauce"`);
    await ais(`User click "LOGIN" button`);
  }

  async selectProduct() {
    await ais(`User click "Source Labs Backpack" text`);
  }
}

export default new LoginPage();

import { setFieldAndVerify } from '../helper/elementHelper';

class RegisterPage {
  /**
   * author: damar
   * date  : 4/10/2024
   */
  
  getElementByDesc(desc) {
    return $(`//*[@content-desc="${desc}"]`);
  }

  get registerButton() {
    return $('//*[@resource-id="com.xero.touch:id/signup_start_button"]');
  }

  async doRegister() {
    await this.registerButton.click();
    await setFieldAndVerify(this.getElementByDesc("First name"), "standard_user");
    await setFieldAndVerify(this.getElementByDesc("Last name"), "secret_sauce");
    await setFieldAndVerify(this.getElementByDesc("Email address"), "dear.ananta@gmail.com");
    await setFieldAndVerify(this.getElementByDesc("Phone number"), "081285202353");
    await setFieldAndVerify(this.getElementByDesc("Business location"), "Indonesia");
  }
}

export default new RegisterPage();

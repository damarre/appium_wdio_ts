class LoginPage {
  /**
  * author : damar
  * date   : 4/10/2024
  */

  get usernameField() {
    return $('//*[@content-desc="test-Username"]');
  }

  get passwordField() {
    return $('//*[@content-desc="test-Password"]');
  }

  get buttonLogin() {
    return $('//*[@content-desc="test-LOGIN"]');
  }

  async doLogin() {
    await this.usernameField.setValue("standard_user");
    await this.passwordField.setValue("secret_sauce");
    await this.buttonLogin.click();
  }
}

export default new LoginPage();

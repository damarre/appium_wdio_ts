/**
 * author: damar
 * date  : 4/10/2024
 */

class LoginPage {

  private getElementByDesc(desc: string) {
    return $(`//*[@content-desc="${desc}"]`);
  }

  async doLogin(username: string = "standard_user", password: string = "secret_sauce") {
    await this.getElementByDesc("test-Username").setValue(username);
    await this.getElementByDesc("test-Password").setValue(password);
    await this.getElementByDesc("test-LOGIN").click();
  }
}

export default new LoginPage();

import RegisterPage from '../../pageObjects/xero.register.page.js';

describe('As a user, I can register XERO', () => {

    it('User access page and fill data', async () => {
        await RegisterPage.doRegister();
    });
});

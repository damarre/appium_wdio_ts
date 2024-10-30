import LoginPage from '../../pageObjects/ai.login.page.js';

describe('++ As a user, I can go to login page', () => {

    it('User access login page', async () => {
        await LoginPage.doLogin();
    });

    it('User select one of the product', async () => {
        await LoginPage.selectProduct();
    });
});

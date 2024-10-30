import LoginPage from '../../pageObjects/ai.login.page.js';

describe('[AI] As a user, I can go to access product page', () => {

    it('User access login page', async () => {
        await LoginPage.doLogin();
    });

    it('User select one of the product', async () => {
        await LoginPage.selectProduct();
    });
});

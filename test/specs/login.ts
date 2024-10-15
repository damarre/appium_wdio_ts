import LoginPage from '../../pageObjects/login.page.js';

describe('As a user, I can go to login page', () => {

    it('User accesses login page', async () => {
        await LoginPage.doLogin();
    });
});

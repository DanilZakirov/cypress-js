describe('автотесты для формы логина и пароля на Staya', function () {
   it('проверка на позитивный кейс авторизации', function () {
        cy.visit('https://staya.dog');
        cy.get(".header-bottom__right--link").click();
        cy.get('.auth-form > form > [type="email"]').type("zakirov278@yandex.ru");
        cy.get('.auth-form > form > [type="password"]').type("udacha");
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');

        })
})


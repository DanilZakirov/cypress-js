describe('Автотесты для лформы авторизации логинкуастудио', function () {
   it('проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type('zakirov278@yandex.ru');
        cy.get("#restoreEmailButton").click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton');
    })
})

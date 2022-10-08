describe('Автотесты для лформы авторизации логинкуастудио', function () {
   it('проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#mail").type('german@dolniko.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton');
    })
})

describe('Автотесты для лформы авторизации логинкуастудио', function () {
   it('проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio');
        cy.get("#loginButton").click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton');
    })
})

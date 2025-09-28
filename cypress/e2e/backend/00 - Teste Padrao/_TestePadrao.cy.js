context('nomeDaTela', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - `, () => 
	{
		let complemento = 1;
        describe(`${cenario} - `, () =>
        {
            beforeEach(() => {
				//Executa antes de cada it
				cy.visit(Cypress.env("baseUrl"));
			});

			//Se houver
			afterEach(() => {
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

            it(`${teste}.${complemento} - `, () =>
            {
                //Para fazer uma requisição
                cy.request({
                    method: 'GET',
                    url: '...'
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body[0]).to.have.property('...')
                    expect(res.body[0].description).to.be.equal('...')
                });
            });

            it(`${teste}.${++complemento} - `, () =>
            {
                cy.request({
                    method: 'POST',
                    url: '...',
                    body: Cypress.env()
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('...')
                    expect(res.body.id).to.be.equal()
                    expect(res.body).to.have.property('...')
                    expect(res.body.email).to.be.equal("...")
                });
            });
        });
    });

    context(`${++contexto} - .`, () => 
	{
		let complemento = 1;
		describe(`${++cenario} - `, () => 
		{
			//Se houver
			beforeEach(() => {
				//Executa antes de cada it
			});

			//Se houver
			afterEach(() => {
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it(`${++teste}.${complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});

			
			it(`${teste}.${++complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});
		});
	});

	context(`${++contexto} - .`, () => 
	{
		let complemento = 1;
		describe(`${++cenario} - Fluxos Funcionais`, () => 
		{
			//Se houver
			beforeEach(() => {
				//Executa antes de cada it
			});

			//Se houver
			afterEach(() => {
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it(`${++teste}.${complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});

			it(`${teste}.${++complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});
		});
    });
});
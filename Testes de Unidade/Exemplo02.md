Introdução a testes unitários em .NET
    #C#
    #.NET

Introdução
    Os testes unitários são uma forma de verificar o comportamento de um código isoladamente, para assegurar a qualidade do software, para realizar testes unitários em C# podemos utilizar a biblioteca xUnit, você pode conferir a documentação dela no link a seguir: https://xunit.net/docs/getting-started/netcore/cmdline.

Criando o meu primeiro teste unitário

    Para facilitar a visualização vamos utilizar o exemplo dado na aula de testes unitários, após criar uma Solution e referenciar a Calculadora a Calculadora Testes, vamos criar o primeiro teste unitário.

    O teste vai validar o método somar:

    Para isso, na classe CalculadoraTestes.cs vamos criar uma classe é um método para validar os dados obtidos.

    O [Fact] é o atributo que indica que é um método de teste.
    O método public void DeveSomar5Com10ERetornar15()indica o comportamento esperado do código.
    Para instanciar a classe utilizamos calc = new CalculadoraImp();
    Arrange é a preparação do ambiente de testes, no caso abaixo definimos as variáveis num1 recebendo o valor 5 e a num2 recebendo o valor 10.
    O Act é a funcionalidade que está sendo testado, no presente exemplo criamos a variável resultado para receber o resultado do método Somar.
    Assert é a verificação do resultado em si. No caso em análise passamos dois argumentos, o primeiro é o resultado esperado e o segundo o resultado do código Assert.Equal(15, resultado).

    Exemplos:

    Para rodar o teste devemos acessar a pasta CalculadoraTestes e executar o comando no terminal:

    dotnet test
    Resultado:

    Testes parametrizados

    Os testes parametrizados permitem que você execute o mesmo teste com diferentes valores de entrada. O xUnit fornece o atributo  Theory para marcar um teste como parametrizado, enquanto no teste unitário convencional o atributo utilizado é Fact. Vejamos os exemplos acima na forma de um teste parametrizado:

    Note-se que nesse caso, não utilizamos o arrange no corpo do código, pois inserimos os dados anteriormente.
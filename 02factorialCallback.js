/**
 * Crie uma função chamada 'fatorial' que receba um número e retorne o fatorial dela. 
 * Teste a função com os números 5 e 6 e imprima o resultado no console
 * Exemplo: 
 * Entrada: 5
 * Saída: 120
 * 
 * OBS: Quanto menor for o nº de linhas de seu código maior será sua nota!
 * OBS: Considere utilizar recursividade para um maior desempenho
 */

// ESPAÇO PARA RESOLUÇÃO ***************************************************


function factorial(number) {
    
    if (!Number.isInteger(number))
    {
    return 'A função fatorial é definida para não-inteiros só pela função gamma.'
    }

    if (number < 0) 
    {      
    return 'A função fatorial não é definida para inteiros negativos.'
    }

    else if (number == 0 || number == 1 )
    { 
        return 1
    }
    
    else 
    {
        return (number * factorial(number - 1) ) //! Enquanto houver um valor tipo Number,
                                                 //! no endereço number, maior que 1, factorial
                                                 //! é acionada como "callback".
    }
}

function displayfactorial(number)
{
    console.log(factorial(number))
}


displayfactorial(7.5)
displayfactorial(-7)
displayfactorial(0)
displayfactorial(1)
displayfactorial(6)
displayfactorial(4)


// *************************************************************************

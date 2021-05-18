/**
 * Crie uma função chamada 'inverterNome' que receba um nome e retorne esse nome ao contrário. 
 * Teste a função com os nomes: 'Carolina' e 'Israel Assis' imprimindo o resultando no console
 * Exemplo: 
 * Entrada: 'Matheus'
 * Saída: 'suehtaM'
 * 
 * OBS: Quanto menor for o nº de linhas de seu código maior será sua nota!
 */

// ESPAÇO PARA RESOLUÇÃO ***************************************************

function 
invertString
(string)
{
let stringToArrayByLetter = string.split("") // ! Separar caractere por 
                                             // ! caractere.

let invertArrayElements = stringToArrayByLetter.reverse()

//! Array foi invertido, agora vai ser convertido para string:

let invertedArrayToString = invertArrayElements.join("") //! Juntar   
                                                         //! caractere 
                                                         //! por
                                                         //! caractere.

return console.log(invertedArrayToString)

}

invertString('Carolina')
invertString('Israel Assis')



// *************************************************************************

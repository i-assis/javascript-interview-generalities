/**
 * O NodeJS possui bibliotecas nativas que foram concebidas no seu nascimento. 
 * Usá-las torna nosso projeto mais independente de bibliotecas externas, 
 * aumentando o controle que temos sobre nossos códigos. 
 * 
 * Para a obtenção de dados em uma API remota usando o protocolo HTTP temos 
 * duas bibliotecas nativas bastante conhecidas: 'http' e 'https'.
 * Elas diferem apenas no tipo de criptografia usada na comunicação:
 * com ou sem SSL.
 * 
 * O treço de código abaixo mostra a obtenção de uma lista de usuários de uma
 * API pública usada para testes diversos. 
 * A função 'getUsersName' obtem uma lista de usuários em dados formatos no padrão UTF-8
 * em JSON, Tranforma o JSON em um Array Javascript e imprime no console os dados
 * 
 */

const https = require('https')

// function getUsersName() {
//     https.get('https://jsonplaceholder.typicode.com/users', res => {  // res => {..} é uma callback chamada no sucesso da comunicação com a API
//         res.setEncoding('utf8') // define a codificação da mensagem recebida UTF-8
//         let body = '' // declara uma variável de string vazia

//         res.on('data', data => { // registra um 'escutador' para o evento 'on('data')' que representa a chegada dos dados formatados em UTF-8
//             body = body + data; // concatena os dados recebidos na variável 'body' criada
//         })

//         res.on('end', () => { // registra um 'escutador' para o evento que representa o fim dos dados (conhecido como cauda, comode fosse o rabo de um animal)
//             body = JSON.parse(body); // esse escutador, então, transforma os dados recebidos (JSON) para uma estrutura javascript
//             console.log(body) // imprimi os dados recebidos no console
//         })
//     })
// }

//  getUsersName()


/**
 * Tarefa 1: Faça uma adaptação na função 'getUsersName' de modo que ela retorne um array de usuários com nome, email, rua, cidade e nome da empresa na forma de callback. 
 * Observe que da forma que 'getUsersName' está escrita ela não está retornando nada, apenas imprimindo no console. 
 * Teste a sua função nova fazendo o seguinte:
 * 1. imprima no console 'Carregando usuários...'
 * 2. imprima no console a lista de usuários obtidas da API
 * 3. imprima no console 'Carregamento concluído'
 */

// ESPAÇO PARA RESOLUÇÃO ***************************************************
const APIurl = 'https://jsonplaceholder.typicode.com/users'

function getUsersName(url, callback) {

    https.get(url, res => {
        res.setEncoding('utf8')
        let body = ''
        res.on('data', data => {
            body = body + data;
        })
        //* Milhões de coisas podem ocorrer aqui.
        //* Pode-se, primeiro armazenar a string
        //* para só depois fazer o parsing.
        res.on('end', () => {
            body = JSON.parse(body);
            callback(body)
        })
    })
}

// CODIGO DO CLIENTE ....
// console.log('carregando usuários...')
// getUsersName(APIurl,
//     function (userList) {
//         console.log(userList) // Corrigir Retorno
//         console.log('Carregamento concluído')
//     }
// )

getUsersName(APIurl, 
    function (userList) 
    {
    userList
   .forEach( (elementoAgora) => { 
        delete elementoAgora.id
        delete elementoAgora.username
        delete elementoAgora.address.suite
        delete elementoAgora.address.city
        delete elementoAgora.address.zipcode
        delete elementoAgora.address.geo
        delete elementoAgora.phone
        delete elementoAgora.website
        delete elementoAgora.company.catchPhrase
        delete elementoAgora.company.bs
    })

    console.log(userList)

    console.log('Carregamento concluído !')
    }
)

getUsersName(APIurl, 
    function (userList) 
    {
    userList
   .forEach( (elementoAgora, indice, array) => { 
    array[indice] = 
    {
    nome: elementoAgora.name,
    email: elementoAgora.email,
    endereco: elementoAgora.address.street,
    nomeEmpresa: elementoAgora.company.name
    }
    })

    console.log(userList)

    console.log('Carregamento concluído !')
    }
)

// Usar pacote Lodash

// *************************************************************************

/**
 * Tarefa 2: Seguindo a mesma resolução da Tarefa 1, refaça a adaptação de modo que 'getUsersName' retorne uma PROMISE que se resolverá quando
 * os dados estiverem prontos.
 * * Teste a sua função nova fazendo o seguinte:
 * 1. imprima no console 'Carregando usuários...'
 * 2. imprima no console a lista de usuários obtidas da API
 * 3. imprima no console 'Carregamento concluído'
 * OBS: Utilize ASYNC AWAIT
 */
// ESPAÇO PARA RESOLUÇÃO ***************************************************


// function getUsersName2(url) {

//     return new Promise(function (resolve, reject) {

//         https.get(url, res => {
//             res.setEncoding('utf8')
//             let body = ''

//             res.on('data', data => {
//                 body = body + data;
//             })

//             res.on('end', () => {
//                 body = JSON.parse(body);
//                 resolve(body)
//             })
//         })
//     })
// }


// //  getUsersName2(APIurl).then(userList => {
// //      console.log(userList)
// //  })

//   async function escreverConsole(){
//         console.log('carregando usuários...')
//         const userList = await getUsersName2(APIurl)
//         console.log(userList)
//         console.log('carregamento concluído')
//  }

//  escreverConsole()


















// *************************************************************************

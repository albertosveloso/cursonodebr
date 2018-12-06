/*
0 - Obter usuário
1 - Obter o numero de telefone de usuario a partir de seu id
2 - Obter o endereco do usuario pelo id
*/
function obterUsuario(){
    // quando der algum problema -> reject(erro)
    // quando sucess -> RESOLVE
    return new Promise(function resolvePromise(resolve,reject){
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Luiz',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '99999999',
            ddd: 17
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua Valente',
            numero: 2
        })
    }, 2000);
}

const usuarioPromise = obterUsuario()

// para manipular o sucesso usamos a funcao .then
// para manipular erros, usamos o .catch
usuarioPromise
    .then(function(resultado){
        console.log('resultado', resultado)
    })
    .catch(function(error){
        console.error('Deu ruim', error)
    })

// obterUsuario(function resolverUsuario(error, usuario){
//     // null || "" || 0 === false
//     if(error){
//         console.error("Deu ruim em usuário", error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1 ,telefone){
//         if(error1){
//             console.error("Deu ruim em Telefone", error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error("Deu ruim em Endereço", error)
//                 return;
//             }

//             console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         }) 
//     })
// })
// const telefone = obterTelefone(usuario.id)
// console.log('telefone', telefone)


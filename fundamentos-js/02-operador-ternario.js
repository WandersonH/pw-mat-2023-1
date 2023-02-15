let media = 5.1, resultado

if(media>=6){
    resultado = 'Aprovado'
}
else{
    resultado - 'Reprovado'
}

console.log({media,resultado})



// Usando o Operador Ternario para chegar ao mesmo resultado

resultado = media >= 6? 'Aprovado' : 'Reprovado'

console.log('Usando Operador Ternário', {media, resultado})

let user = 'guest', msg
//quando há apenas uma linha depois de um if, um else
//um while, etc, podemos omitir as chaves

if(user === 'admin') msg = 'Bem Vindo'
else msg = 'Sem Permisão'

//usando o operador ternário
msg = user === 'Admin' ? 'Bem-Vindo' : 'Sem Permissão'

console.log('Usando operador ternário',{user,msg})
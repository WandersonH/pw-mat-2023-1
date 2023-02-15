let nome = 'Wanderson'
let idade = 31
let cidade = 'Franca/SP'

console.log('Meu Nome é ' + nome + ', tenho ' + idade + 
' Anos e moro em ' + cidade + '.')

// mesma mensagem usando string template
//Strig templates são strings especiais delimitadas
//Pelos caracteres ``(acentos graves, "Crases"), que 
//permitem a interpolação direta de variáveis no meio delas
//permite quebra de linhas no codigo sem erros


console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)


// Dentro de uma string template, não estamos limitados a coocar apenas
// variaveis ${}, podemos inserir qualquer codigo js valido ali

console.log(`DAQUI A 5 ANOS, ${nome.toUpperCase()} TERÁ ${idade + 5} ANOS`)
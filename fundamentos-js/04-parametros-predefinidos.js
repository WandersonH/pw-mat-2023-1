//Função que calcula a aárea de uma figura geometrica plana

function calcular_area(base,altura, forma){
    switch(forma){
        case 'R': //Retangulo
            return base * altura
        case 'T': //Triangulo
            return base * altura / 2
        case 'E':
            return(base/2) * (altura/2) * Math.PI
        default: //forma desconhecida
        return null

    }
}

console.log(calcular_area(2,2,'R'))
console.log(`Área retangulo 12x16: ${calcular_area(12, 16, 'R')}`)
console.log(`Área Triangulo 15x9: ${calcular_area(15, 9, 'T')}`)
console.log(`Área elipse 10x10: ${calcular_area(10, 10, 'E')}`)
console.log(`Área forma desconhecidao 7x13: ${calcular_area(7, 13, 'A')}`)

//Exercício 1

const imprimirSeEpar = () =>{
    const numero = +prompt("Digite um número e direi se é par")
    const verificaSeEpar = numero % 2

    if (verificaSeEpar === 0) {
       console.log("O número digitado é par");     
    } else {
        console.log("O número não é par");
    }
}

imprimirSeEpar()
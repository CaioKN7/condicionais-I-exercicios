//Exercício 2

const imprimirDadosDoUsuario = () =>{
    const idadeUsuario = +prompt("Me diga sua idade. (Ex: 19)")
    const terminouEnsinoMedio = prompt("Já terminou o ensino médio? (responda com sim ou não)")
    const estaCursandoFaculdade = prompt("Se já erminou o ensino médio, está cursando alguma faculdade? (responda com sim ou não)")



    if (idadeUsuario >= 18) {
        console.log("A pessoa é maior de idade");
        
    } else {
        console.log("A pessoa é menor de idade");
        
    }

    if (terminouEnsinoMedio.toLowerCase() === 'sim') {
        console.log("A pessoa terminou o ensino médio");
        
    } else{
        console.log("A pessoa não terminou o ensino médio");
    }

    if (estaCursandoFaculdade.toLowerCase() === 'sim') {
        console.log("A pessoa está cursando a faculdade");
        
    } else{
        console.log("A pessoa não está cursando a faculdade");
    }

}

imprimirDadosDoUsuario()
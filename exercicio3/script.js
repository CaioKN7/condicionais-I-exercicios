//Exercício 3

const verificarNacionalidade = () => {
    const nacionalidade = prompt("Escreva aqui sua nacionalidade.");
  
    if (nacionalidade.toLowerCase() === 'brasileira') {
      console.log("Você é uma pessoa brasileira.");
    } else if (nacionalidade.toLowerCase() === 'argentina') {
      console.log("Você é uma pessoa argentina.");
    } else if (nacionalidade.toLowerCase() === 'uruguaia') {
      console.log("Você é uma pessoa uruguaia.");
    } else if (nacionalidade.toLowerCase() === 'chilena') {
      console.log("Você é uma pessoa chilena.");
    } else if (nacionalidade.toLowerCase() === 'colombiana') {
      console.log("Você é uma pessoa colombiana.");
    } else {
      console.log("Nacionalidade não encontrada.");
    }
  };
  
  verificarNacionalidade();
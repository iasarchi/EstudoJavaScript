const salasJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [7,8,8,7,10];
const salaPython = [7,8,8];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`${calculaMedia(salasJS)}`)
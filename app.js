function IMC(altura, peso) {
    return  peso/Math.pow(altura,2);
}

alert('Agora iremos calcular seu IMC');
let altura = prompt('Digite sua altura em metros');
let peso = prompt('Digite seu peso em kg')

let imc = IMC(altura,peso);

alert(`Seu IMC equivale a: ${imc}`);
alert('Agora iremos calcular a tabuada de um número');
let numero = prompt('Digite o número que deseja que seja calculada a tabuada')

function tabuada(numero) {
    cont = 1;

    while (cont <=10) {
        resultado = numero * cont
        let mensagemConsole = (`${numero} X ${cont} = ${resultado}`);
        console.log(mensagemConsole);
        cont++;
    }

}

tabuada(numero);
const form = document.querySelector('.nums-form');

const campoA = document.getElementById('valorA');
const campoB = document.getElementById('valorB');

let formValido = false;

function checagemValores(valorA, valorB) {
    return valorB > valorA; 
}

form.addEventListener('submit', function(e){
    e.preventDefault();    

    formValido = checagemValores(campoA.value, campoB.value);

    const mensagemSucesso = `Formulário válido! ${campoB.value} > ${campoA.value}`;
    const mensagemErro = "Formulário inválido! Valor B deve ser maior que Valor A";

    if(formValido) { 
        alert(mensagemSucesso);
        campoA.value = ''; 
        campoB.value = ''; 
    } else { 
        alert(mensagemErro);
        campoA.value = ''; 
        campoB.value = ''; 
    }
});

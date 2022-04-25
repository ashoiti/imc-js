
function calculateIMC() {
    
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var imc = peso / (altura*altura);

    return getIMCDesc(imc);
}

function getIMC() {
    document
        .querySelector('.imc p')
        .innerHTML = calculateIMC();
}

function getIMCDesc(imc) {
    if (imc < 18.5) {
        return 'Magreza';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Normal';
    } else if (imc >= 24.9 && imc < 30) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}



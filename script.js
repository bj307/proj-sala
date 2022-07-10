// calculadora imc

const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value !== '' && peso.value !== '') {
        const altura2 = (altura.value * altura.value)
        const imc = (peso.value / altura2) .toFixed(2)
        let classification = ''
        let proteina = ''
        let gordura = ''
        let carboidrato = ''
        let pesoMin = ''
        let pesoMax = ''

        if (imc < 18.5) {
            classification = 'Abaixo do peso'
            proteina = (peso.value * 2.3) .toFixed(0)
            gordura = (peso.value * 1.2) .toFixed(0)
            carboidrato = (peso.value * 2.7) .toFixed(0)
            pesoMin = (altura2 * 18.5) .toFixed(0)
            pesoMax = (altura2 * 24.9) .toFixed(0)
        } else if (imc < 25) {
            classification = 'Peso normal'
            proteina = (peso.value * 2) .toFixed(0)
            gordura = (peso.value * 1) .toFixed(0)
            carboidrato = (peso.value * 2.3) .toFixed(0)
            pesoMin = (altura2 * 18.5) .toFixed(0)
            pesoMax = (altura2 * 24.9) .toFixed(0)
        } else if (imc < 30) {
            classification = 'Acima do peso'
            proteina = (peso.value * 2) .toFixed(0)
            gordura = (peso.value * 1) .toFixed(0)
            carboidrato = (peso.value * 2) .toFixed(0)
            pesoMin = (altura2 * 18.5) .toFixed(0)
            pesoMax = (altura2 * 24.9) .toFixed(0)
        } else if (imc < 35) {
            classification = 'Obesidade grau I'
            proteina = (peso.value * 1.8) .toFixed(0)
            gordura = (peso.value * 0.8) .toFixed(0)
            carboidrato = (peso.value * 1.6) .toFixed(0)
            pesoMin = (altura2 * 18.5) .toFixed(0)
            pesoMax = (altura2 * 24.9) .toFixed(0)
        } else if (imc < 41) {
            classification = 'Obesidade grau II'
            proteina = (peso.value * 1.8) .toFixed(0)
            gordura = (peso.value * 0.8) .toFixed(0)
            carboidrato = (peso.value * 1.6) .toFixed(0)
            pesoMin = (altura2 * 18.5) .toFixed(0)
            pesoMax = (altura2 * 24.9) .toFixed(0)
        } else {
            classification = 'Obesidade grau III'
            proteina = (peso.value * 1.8) .toFixed(0)
            gordura = (peso.value * 0.8) .toFixed(0)
            carboidrato = (peso.value * 1.6) .toFixed(0)
            pesoMin = (altura2 * 18.5) .toFixed(0)
            pesoMax = (altura2 * 24.9) .toFixed(0)
        }

        imc2.innerHTML = `${imc}`
        classification2.innerHTML = `${classification}`
        proteina2.innerHTML = `${proteina}g por dia`
        gordura2.innerHTML = `${gordura}g por dia`
        carboidrato2.innerHTML = `${carboidrato}g por dia`
        pesoMin2.innerHTML = `${pesoMin}kg`
        pesoMax2.innerHTML = `${pesoMax}kg`
        tabelaDieta.classList.toggle('tabela'); 

    } else {
        resultado.innerHTML = 'Preencha os campos'
    }
}

// banner slide pagina inicio

let timerSlide = 1;

document.getElementById("slide1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    timerSlide++;
    if(timerSlide>4){
        timerSlide = 1;
    }
    document.getElementById("slide"+timerSlide).checked = true;
}
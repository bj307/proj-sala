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


// quiz


/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    correta      : "Norte",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Sul",
    alternativaC : "Norte",
    correta      : "Sul",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Leste",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Norte",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Oeste",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "América",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}
const quizdisplay = document.getElementById("display");
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let wrapper = document.getElementById("wrapper");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Question and Options array
// Add questions, options and correct option in below format
const quizArray = [
	{
		id: "0",
		question: "Quantas gramas de creatina se deve tomar por dia?",
		options: ["5g", "15g", "1g", "150g"],
		correct: "5g"
	},
	{
		id: "1",
		question: "Qual o elemento principal para formação de musculo?",
		options: ["Proteina", "Gordura", "Sódio", "Fibra"],
		correct: "Proteina"
	},
	{
		id: "2",
		question: "Qual malefício é causado pelo uso da creatina?",
		options: ["Nenhum", "Pedra nos rins", "Problema de coração", "Problemas respiratórios"],
		correct: "Nenhum"
	},
	{
		id: "3",
		question: "Whey é uma proteina derivada de?",
		options: ["Leite", "Ovos", "Carne", "Vegetais"],
		correct: "Leite"
	},
	{
		id: "4",
		question: "Qual suplemento pode ser usado como alternativa para whey?",
		options: ["Albumina", "BCAA", "Hipercalóricos", "Creatina"],
		correct: "Albumina"
	},
	{
		id: "5",
		question: "Qual a função de um termogenico?",
		options: ["Acelerar o metabolismo proporcionando mais energia", "Aumentar vitaminas no sangue", "Ajudar no aumento de peso e massa muscular", "Acelerar a recuperação pós treino"],
		correct: "Acelerar o metabolismo proporcionando mais energia"
	}
];
// restart game
restart.addEventListener("click", () => {
	inital(); //call initial function
	wrapper.classList.remove("hide");
	scoreContainer.classList.add("hide");
});
// Next button
nextBtn.addEventListener(
	"click",
	(displayNext = () => {
		//increment questionCount
		questionCount += 1;
		//if last question
		if (questionCount == quizArray.length) {
			//hide question container and display score
			wrapper.classList.add("hide");
			scoreContainer.classList.remove("hide");
			// user score
			userScore.innerHTML =
				"Your score is " + scoreCount + " out of " + questionCount;
		} else {
			//display questionCount
			countOfQuestion.innerHTML =
				questionCount + 1 + " of " + quizArray.length + " questões";
			//display Quiz
			quizDisplay(questionCount);
			//count=11 (so that it starts with 10)
			count = 11;
			//clear interval for next question
			clearInterval(countdown);
			//display timer (start countdown)
			timerDisplay();
		}
	})
);
// Timer
const timerDisplay = () => {
	countdown = setInterval(() => {
		count--;
		timeLeft.innerHTML = `${count}s`;
		if (count == 0) {
			//when countdown reaches 0 clearInterval and go to next question
			clearInterval(countdown);
			displayNext();
		}
	}, 1000);
};
//display quiz
const quizDisplay = (questionCount) => {
	let quizCards = document.querySelectorAll(".container_mid");
	//hide other cards
	quizCards.forEach((card) => {
		card.classList.add("hide");
	});
	//display current question card
	quizCards[questionCount].classList.remove("hide");
};
// Quiz creation
function quizCreator() {
	//randomly sort questions
	quizArray.sort(() => Math.random() - 0.5);
	//generate quiz
	for (let i of quizArray) {
		//randomly sort options
		i.options.sort(() => Math.random() - 0.5);
		//quiz card creation
		let div = document.createElement("div");
		div.classList.add("container_mid", "hide");
		//question number
		countOfQuestion.innerHTML = 1 + " de " + quizArray.length + " questões";
		//question
		let question_DIV = document.createElement("p");
		question_DIV.classList.add("question");
		question_DIV.innerHTML = i.question;
		div.appendChild(question_DIV);
		//options
		div.innerHTML += `
<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
<button class="option-div" onclick="checker(this)">${i.options[1]}</button>
<button class="option-div" onclick="checker(this)">${i.options[2]}</button>
<button class="option-div" onclick="checker(this)">${i.options[3]}</button>

`;
		quizContainer.appendChild(div);
	}
}
// Check option is correct or not
function checker(userOption) {
	let userSolution = userOption.innerText;
	let question = document.getElementsByClassName("container_mid")[questionCount];
	let options = question.querySelectorAll(".option-div");
	//if user's clicked anaswer==correct option stored in object
	if (userSolution === quizArray[questionCount].correct) {
		//green background and score increment
		userOption.classList.add("correct");
		scoreCount++;
	} else {
		//red background
		userOption.classList.add("inCorrect");
		//for marking green(correct)
		options.forEach((element) => {
			if (element.innerText == quizArray[questionCount].correct) {
				element.classList.add("correct");
			}
		});
	}
	//clear interval(stop timer)
	clearInterval(countdown);
	//disabled all options
	options.forEach((element) => {
		element.disabled = true;
	});
}
//initial setup
function inital() {
	quizContainer.innerHTML = "";
	questionCount = 0;
	scoreCount = 0;
	clearInterval(countdown);
	count = 11;
	timerDisplay();
	quizCreator();
	quizDisplay(questionCount);
}
// when user click on start button
startButton.addEventListener("click", () => {
	startScreen.classList.add("hide");
	wrapper.classList.remove("hide");
	inital();
});
//hide quiz and display start screen
window.onload = () => {
	startScreen.classList.remove("hide");
	wrapper.classList.add("hide");
};
let quizData = [];

const params = new URLSearchParams(window.location.search);

const subject = params.get("subject") || "html";

fetch(`../JSON/${subject}.json`)
.then(response => response.json())
.then(data => {

    quizData = data;

    userAnswers = new Array(quizData.length).fill(null);

    loadQuestion();

})
.catch(error => {

    console.log(error);

    alert("Unable to load quiz.");

});
// ==========================
// VARIABLES
// ==========================

let currentQuestion = 0;

let score = 0;

const question = document.getElementById("question");

const optionButtons = document.querySelectorAll(".option-btn");

const questionNumber = document.getElementById("question-number");

const progressBar = document.getElementById("progress-bar");

const nextBtn = document.getElementById("next-btn");

const prevBtn = document.getElementById("prev-btn");

// ==========================
// LOAD QUESTION
function loadQuestion() {

    const q = quizData[currentQuestion];

    question.innerText = q.question;

    questionNumber.innerText =
        `Question ${currentQuestion + 1} / ${quizData.length}`;

    progressBar.style.width =
        ((currentQuestion + 1) / quizData.length) * 100 + "%";

    optionButtons.forEach((button, index) => {

        button.innerText = q.options[index];

        button.style.background = "white";
        button.style.color = "black";

        if(userAnswers[currentQuestion] === index){

            button.style.background = "#ec4899";
            button.style.color = "white";

        }

    });

    // Previous Button

    if(currentQuestion === 0){

        prevBtn.disabled = true;

    }else{

        prevBtn.disabled = false;

    }

    // Next & Submit Button

    if(currentQuestion === quizData.length - 1){

        nextBtn.classList.add("d-none");

        submitBtn.classList.remove("d-none");

    }else{

        nextBtn.classList.remove("d-none");

        submitBtn.classList.add("d-none");

    }

}

// ==========================
// PREVIOUS BUTTON
// ==========================

prevBtn.addEventListener("click", () => {

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

    }

});

const submitBtn = document.getElementById("submit-btn");

const timer = document.getElementById("timer");

let timeLeft = 10;


// ==========================
// OPTION SELECTION
// ==========================

optionButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        userAnswers[currentQuestion] = index;

        optionButtons.forEach(btn => {

            btn.style.background = "white";
            btn.style.color = "black";

        });

        button.style.background = "#ec4899";
        button.style.color = "white";

    });

});

// ==========================
// NEXT BUTTON
// ==========================

nextBtn.addEventListener("click", () => {

    if(currentQuestion < quizData.length - 1){

        currentQuestion++;

        loadQuestion();

    }

});

// ==========================
// TIMER
// ==========================

const countdown = setInterval(() => {

    timer.innerText = `⏱ ${timeLeft} sec`;

    timeLeft--;

    if (timeLeft < 0) {

        clearInterval(countdown);

        calculateScore();

    }

}, 1000);


// ==========================
// SCORE
// ==========================

function calculateScore(){

    score = 0;

    userAnswers.forEach((answer,index)=>{

        if(answer === quizData[index].answer){

            score++;

        }

    });

    localStorage.setItem("score",score);

    localStorage.setItem("total",quizData.length);

    window.location.href="result.html";

}

// ==========================
// SUBMIT
// ==========================

submitBtn.addEventListener("click",()=>{

    clearInterval(countdown);

    calculateScore();

});
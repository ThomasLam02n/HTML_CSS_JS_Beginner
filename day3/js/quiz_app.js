function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(

                    `<label>
    <input type="radio" name="question${questionNumber}"value="${letter}" class="rad_butn">
    ${letter} :
    ${currentQuestion.answers[letter]}
    </label>`
                );
            }

            output.push(
                `<div class="slide">
    <div class="question"> ${(questionNumber + 1)}. ${currentQuestion.question} </div>
    
    <div class="answers"> ${answers.join("")} </div>
    </div>`
            );
        }
    );
    quizBox.innerHTML = output.join('');
}
function showResults() {
    const answerBoxs = quizBox.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerBox = answerBoxs[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerBox.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerBoxs[questionNumber].style.color = 'green';
        }
        else {
            answerBoxs[questionNumber].style.color = 'red';
        }
    });
    resultsBox.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}
function showNextSlide() {
    showSlide(currentSlide + 1);
}
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}
const quizBox = document.getElementById('quiz');
const resultsBox = document.getElementById('result');
const submitButton = document.getElementById('submit');

/* const: không thể khai báo mà không có khởi tạo
   var: Có thể khai báo mà không cần khởi tạo
   let: Có thể khai báo mà không cần khởi tạo */
/* 
   JavaScript has 3 types of scope:
Block scope - biến được khai báo bên trong {}, không thể truy cập từ bên ngoài Block
Function scope
Global scope */

const myQuestions = [];
for (i = 0; i < data.lenght; i++) {
    myQuestions.push(data[i]); // push the next question
}

buildQuiz();
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(currentSlide);
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
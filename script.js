const questions = [
    {
        question: "Which player has scored the most career points in NBA history?",
        answers: [
            {text: "Lebron James", correct: true},
            {text: "Michael Jordan", correct: false},
            {text: "Kobe Bryant", correct: false},
            {text: "Kevin Knox", correct: false}
        ]   
    },
    {
        question: "In which round did Conor McGregor submit to Khabib?",
        answers: [
            {text: "One", correct: false},
            {text: "Two", correct: false},
            {text: "Three", correct: false},
            {text: "Four", correct: true}
        ]   
    },
    {
        question: "Which team won gold for Mens Basketball at the 2024 Olympics",
        answers: [
            {text: "USA", correct: true},
            {text: "France", correct: false},
            {text: "Germany", correct: false},
            {text: "Serbia", correct: false}
        ]   
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


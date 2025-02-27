import React,{useState} from "react";
const Quiz = () => {
    const question =[
        {
            question:"What is React?",
            options:[" Library "," Framework ","Language","None of the above"],
            answer:"Library"
        },
        {
           question:"Who created JavaScrip?", 
              options:["Brendan Eich","James Gosling","Guido van Rossum","Rasmus Lerdorf"],
              answer:"Brendan Eich"
        },
        {
            question:"What does HTML stand for?",
            options:["Hyper Text Markup Language","High Text Markup Language","Hyper Tabular Markup Language","None of the above"],
            answer:"Hyper Text Markup Language"
        },
        {
            question:"What CSS?",
            options:["Cascading Style Sheet","Color and Style Sheet","Creative Style Sheet","None of the above"],
            answer:"Cascading Style Sheet"
        },
        {
            question:"what is use of ReactJs?",
            options:["Server side","User Interface","Database","None of the above"],
            answer:"User Interface"
        },
    ];
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const handleAnswer = (option) => {
        if(option === question[currentQuestion].answer){
            setScore(score+1);
        }
        if(currentQuestion < question.length-1){
            setCurrentQuestion(currentQuestion+1);
        }
        if(currentQuestion === question.length-2){
            setCurrentQuestion(currentQuestion+1);
        }
        if(currentQuestion === question.length-3){
            setCurrentQuestion(currentQuestion+1);
        }
        if(currentQuestion === question.length-4){
            setCurrentQuestion(currentQuestion+1);
        }
            
        else{
            alert("Quiz Completed! Your score is {score+1}/{question.length}");
            
        }
    };
    return (
        <div>
            <h2>{question[currentQuestion].question}</h2>
                {question[currentQuestion].options.map((option,index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
                ))}
        </div>
    );
};
export default Quiz;
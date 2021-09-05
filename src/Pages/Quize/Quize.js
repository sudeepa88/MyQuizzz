import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import Question from "../../Components/Questions/Question";
import './Quiz.css';
// import { Score } from '@material-ui/icons';

const Quize = ({name, questions, score, setScore, setQuestions }) => {
    const[options, setOptions]= useState();
    const [currentQues, setCurrentQues]= useState(0);

    useEffect(() => {
       

        setOptions(questions && handleShuffle([questions[currentQues]?.correct_answer, ...questions[currentQues]?.incorrect_answers, ]))
    }, [currentQues,questions]);
    console.log(options);

    const handleShuffle =(optionss)=> {
        return optionss.sort(()=> Math.random() - 0.5);


    }
    return (
        <div className="quiz">
            <span className="subtitle">
                Welcome, {name} </span>
                {
                    questions ?( <>
                    <div className="quizInfo">
                        <span>{questions[currentQues].category}</span>
                        <span> Score : {score}</span>

                    </div>
                    <Question currentQues={currentQues}
                              setCurrentQues={setCurrentQues}
                              questions={questions}
                              options={options}
                              correct={questions[currentQues]?.correct_answer}
                              score={score}
                              setScore={setScore}
                              setQuestions={setQuestions}
                               />
                    </>

                    ):(
                    
                        <CircularProgress style={{ margin: 100}} color='inherit' size={150} thickness={1} /> 
                    )
                    
                }
        </div>
    )
}

export default Quize;

// import { Select } from '@material-ui/core';
import React, {useState} from 'react';
import ErrorMessage from '../ErroMessage/ErrorMessage';
import "./Question.css";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Question = ({
    currentQues,
    setCurrentQues,
    questions,
    options,
    correct,
    
    score,
    setScore,
    setQuestions,
    
}) => {
    const [selected, setSelected]= useState();
    const [error, setError]= useState(false);
    const history = useHistory();
    const handleSelect = (i) => {
        if(selected===i && selected===correct)
            return "select";
        
        else if (selected===i && selected!== correct)
            return 'wrong';
        
        else if (i=== correct)

            return 'select';
        
    };

    const handleCheck = (i) => {
           setSelected(i);
           if(i === correct) setScore(   score + 1);
  
           setError(false);
    };
    
    const handleNext =() =>
    {
        if(currentQues>8){
            history.push('/result');
        }
        else if(selected){
            setCurrentQues(currentQues+1)
            setSelected ()
        }
        else{
            setError("Please select an option first");
        }
    };
    const handleQuit = () => {
        setCurrentQues(0);
        setQuestions();
    };

    return (
        <div className="question">
            <h1>
                Question: {currentQues + 1 } 
            </h1>
            <div className="singleQuestion">
                <h2> { questions[currentQues].question}</h2>
                <div className='options'>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {
                        options && 
                        options.map( (i) => (
                            <button
                            
                            className={`singleOption ${selected && handleSelect(i)}`}
                            key={i}
                            onClick={ () => handleCheck(i) }
                            disabled={selected}
                            >{i}</button>
                        )
                        )
                    }


                </div>
                <div className='controls'>
                    <Button variant="contained" color="secondary" size="large" style={{ width: 185}} href="/"
                    onClick={ handleQuit}>
                        Quit
                    </Button>
                    <Button variant= "contained" color="primary" size="large" style={{width: 185}}
                    onClick={handleNext}>
                        {currentQues > 20 ? "Submit" : "Next"}
                    </Button>

                </div>

            </div>
        </div>
    )
}

export default Question;

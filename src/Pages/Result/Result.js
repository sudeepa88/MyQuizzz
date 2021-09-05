import { useEffect } from "react";
import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Result.css";

const Result = ({name,score}) => {
    const history = useHistory();
    useEffect(() => {
        if (!name){
            history.push("/");
        }
       
    }, [name, history]);
    return (
        <div className="result">
            <span className="title"> Final Score: {score}</span>
            <Button variant="contained" color="secondary"  size="large" style={{ alignSelf:"center", marginTop:20}} href="/">
                 GO TO HOMEPAGE
            </Button>
            
        </div>
    )
}

export default Result;

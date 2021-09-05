//  import  background from "./Images/night_view.jpeg"
import './App.css';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quize from './Pages/Quize/Quize';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';
// import { Category } from '@material-ui/icons';


function App() {
  const [name, setName]= useState();
  const [questions , setQuestions]= useState();
  const [score, setScore]= useState(0);

  const fetchQuestions= async(category="",difficulty="") => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty = ${difficulty}`}&type=multiple`);
    setQuestions(data.results);

  }
  return (
    <div>
    <BrowserRouter>
    <div className="App"  >
      
      <Header/>
      <Switch>
        <Route exact path="/" >
            <Home  name={name} setName={setName} fetchQuestions={fetchQuestions}/>
        </Route>
        <Route exact path="/quiz" >
            <Quize name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />
        </Route>
        <Route exact path="/result"  >
            <Result name={name} score={score}/>
        </Route>
      </Switch>
      </div>
      
      <Footer/>
    </BrowserRouter>
    
    </div>
    
  );
}

export default App;

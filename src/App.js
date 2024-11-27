
import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header/header'
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import axios from 'axios';

function App() {

  const [name , setName] = useState("");
  const [questions , setQuestions] = useState();
  const[score , setScore] = useState(0);

  const fetchQuestions = async (category = "" ,difficulty = "" ) =>{

    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    //console.log(data);
    setQuestions(data.results);

  }; 

  return (
    <BrowserRouter>
        <div className='app' style={{backgroundImage : "url(./quiz_bg_img.jpg"}}>
          <Header />
          <Routes>
          <Route path='/' element={<Home name = {name} setName = {setName} fetchQuestions={fetchQuestions}/>} />
          <Route path='/Quiz' element={<Quiz 
              name= {name} 
              score = {score}
              setScore = {setScore}
              questions = {questions}
          />} />
          <Route path='/Result' element={<Result 
            name = {name} score = {score} />} />
          </Routes>
        </div>
    </BrowserRouter>
    

   
  )
}

export default App
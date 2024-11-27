import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../../components/Question/Question";

const Quiz = ({ name, score, setScore, questions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer, //correct answers are 1
          ...questions[currQues]?.incorrect_answers, //incorrect answers are 3
        ])
    );
  }, [questions , currQues]);

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={100}
          thickness={0.5}
        />
      )}
    </div>
  );
};

export default Quiz;

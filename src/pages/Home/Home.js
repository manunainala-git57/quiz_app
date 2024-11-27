import React, { useState } from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import Categories from "../../Data/Categories";
import { MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({name , setName , fetchQuestions}) => {
  const [category , setCategory] = useState("");
  const[difficulty , setDifficulty]  = useState("");
  const[error , setError] = useState(false);
  
  const history = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings-select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ marginBottom: 25 }}
            id="select-basic"
            select
            label="Select"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value = {category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
            
          </TextField>
          <TextField
          id= 'select-basic-hard'
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value = {difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button  id = "quiz-button"variant="contained" color="primary" 
           onClick={handleSubmit}>Start Quiz</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

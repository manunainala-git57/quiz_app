import { Button } from '@mui/material';
import { useEffect } from "react";
import { useHistory, useNavigate } from "react-router";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useNavigate();

  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
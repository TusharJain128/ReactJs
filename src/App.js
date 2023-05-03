import React from "react";
import axios from 'axios'
import "./style.css";

export default function App() {
  const data = axios.get("https://quizapi.io/api/v1/questions")
  return (
    <div>
      <h1 align="center">Quiz</h1>
      <div>
        {data}
      </div>
    </div>
  );
}

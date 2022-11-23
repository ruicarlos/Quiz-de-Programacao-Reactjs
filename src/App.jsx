
import {useContext} from 'react';
import {QuizContext} from "./context/quiz"

import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';

import './App.css'
import { useEffect } from 'react';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  useEffect(()=>{
    // ação a ser Executada
    dispatch({type: "REORDER_QUESTIONS"});
  },[])


  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage ==="Start" && <Welcome/>}
      {quizState.gameStage ==="Playing" && <Question/>}
      {quizState.gameStage ==="End" && <GameOver/>}
    </div>
  )
}

export default App

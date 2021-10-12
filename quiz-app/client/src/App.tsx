import React, { useState, useEffect} from 'react';

import { Quiz } from '@tensei/sdk'


import tensei from './client';

import QuizCard from './components/QuizCard';

const App = () => {
 const [quizState, setQuizState] = useState<Quiz[]>([])
 const [start, setStart] = useState(false)
 const [currentIndex, setCurrentIndex] = useState(0)
 const [score, setScore] = useState(0)

 const fetchQuiz = () => {
  tensei.quizzes().findMany().then(quizzes => {
    // @ts-ignore
    const quizData = quizzes.data.data.map((quiz) => ({
      ...quiz, 
      answers:[quiz.answer, ...quiz.options]
    }))
     // @ts-ignore
    setQuizState(quizData)
  })
 }

 //Button to display quizzes
 const handleStart = () => {
  setStart(true)
}

// Function to validate the user answer
const handleAnswer = (userAnswer: string) => {
  if(userAnswer === quizState[currentIndex].answer) {
    setScore(score + 1)
  }
}

//Function to move to the previous question
const handlePrevButton = () => {
  const prevQuestion = currentIndex - 1
  if(prevQuestion >= 0) {
    setCurrentIndex(prevQuestion)
  }
}

//Function to move to the next question
const handleNextButton = () => {
  setCurrentIndex(currentIndex + 1)
}



 useEffect(() => {
  fetchQuiz()
}, [])  

	return (
    <>
      <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div className="box">
                  <h2 className="title">Welcome!</h2>
                    <button type="submit" className="control button is-success" onClick={handleStart}>
                      Start Quiz
                    </button>
                </div>
                {start ? 
                <div className="box">
                  {currentIndex >= quizState.length ? (
                    <div className="notification is-success">You scored {score} out of {quizState.length}</div>
                  ) : <QuizCard 
                        quizzes={quizState[currentIndex]} 
                        currentIndex= {currentIndex}
                        handleAnswer={handleAnswer} 
                        handlePrevButton={handlePrevButton} 
                        handleNextButton={handleNextButton}                  
                      />}    
                </div> : null }
              </div>
            </div>
          </div>
        </section>
    </>
	);
}


export default App;

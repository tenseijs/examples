import React, { useState } from 'react'

import { Quiz } from '@tensei/sdk'

interface QuizCardProp {
    quizzes: Quiz
    currentIndex: number;
    handleAnswer: (useAnswer: string) => void;
    handlePrevButton: () => void;
    handleNextButton: () => void;
}

const QuizCard: React.FC<QuizCardProp> = ({ quizzes: {question, options}, currentIndex, handleAnswer, handlePrevButton, handleNextButton }) => {
   
    return (
        <>
            <h2 className="title">Questions</h2>
            <p>{currentIndex + 1}. {question}</p>
            
            <div>
                {options.map((option) =>  (
                        <div>
                            <br />
                            <button className="button is-success" onClick={() => handleAnswer(option)}>{option}</button>
                            <br />
                        </div>
                    )
                )}
            </div>
         
            <br />

                <div className = "columns is-mobile is-multiline is-centered">
                    <div className="column is-narrow">
                        <button className="button is-outlined" onClick={handlePrevButton}>Prev Question</button>
                    </div>
                    <div className="column is-narrow">
                        <button className="button is-outlined" onClick={handleNextButton}>Next Question</button>
                    </div>
                </div>
        </>
    )
}

export default QuizCard

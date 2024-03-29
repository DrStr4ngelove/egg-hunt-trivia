import React, { useState } from 'react'
import { useEggHuntProps } from './hooks'
import { TriviaModal } from './components/TriviaModal'
import { Header } from './components/Header'
import './styles.css';

function EggHunt() {
  const {
    modalOpen,
    result,
    showModal,
    closeModal,
    revealAnswer,
    triviaQuestions,
    currentQuestion,
    getRandomColor
} = useEggHuntProps()
  return (
    <div className="container">
      <Header />
      <div className="egg-container">
        {triviaQuestions.map((question, index) => (
          <div className="egg" 
            key={index} 
            style={{ 
              background: `linear-gradient(to bottom right, ${getRandomColor()}, #ffffff)` }}
              onClick={() => showModal(question)}>
          </div>
        ))}
      </div>
      {modalOpen && <TriviaModal currentQuestion={currentQuestion} result={result} closeModal={closeModal} revealAnswer={revealAnswer} />}
    </div>
  );
}

export default EggHunt

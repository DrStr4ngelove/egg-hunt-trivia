import React from 'react'
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
    eggs,
    currentEgg,
    getRandomColor
  } = useEggHuntProps()

  return (
    <div className="container">
      <Header />
      <div className="egg-container">
        {eggs.map((egg, index) => (
          <div className={egg.cracked ? "cracked" : "egg"} 
            key={index} 
            style={{...egg.style}}
              onClick={() => showModal(egg)}>
          </div>
        ))}
      </div>
      {modalOpen && <TriviaModal currentEgg={currentEgg} result={result} closeModal={closeModal} revealAnswer={revealAnswer} />}
    </div>
  );
}

export default EggHunt

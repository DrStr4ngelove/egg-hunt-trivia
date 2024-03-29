import React, { useState } from 'react'
import { reactQuestions } from './triviaQuestions/reactQuestions'
import { shuffle } from 'lodash'

const triviaQuestions = shuffle([...reactQuestions, ...reactQuestions])

export const useEggHuntProps = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [result, setResult] = useState('')
    const showModal = (question) => {
      setCurrentQuestion(question)
      setModalOpen(true)
    }
  
    const closeModal = () => {
      setModalOpen(false)
      setResult('')
    }
  
    const revealAnswer = () => {
        setResult(currentQuestion.answer)
    }

    const getRandomColor = () => {
        // Generate random values for RGB
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        
        // Construct CSS color string
        return `rgb(${r}, ${g}, ${b})`
    }

    return {
        modalOpen,
        result,
        showModal,
        closeModal,
        revealAnswer,
        triviaQuestions,
        currentQuestion,
        getRandomColor
    }
}
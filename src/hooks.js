import React, { useState, useEffect } from 'react'
import { reactQuestions } from './triviaQuestions/reactQuestions'
import { shuffle } from 'lodash'

const triviaQuestions = shuffle([...reactQuestions])

export const useEggHuntProps = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentEgg, setCurrentEgg] = useState({})
    const [result, setResult] = useState('')
    const [eggs, setEggs] = useState([])

    useEffect(()=> {
      const newEggs = triviaQuestions.map((egg, index) => ({
          ...egg,
          id: index, 
          style: {
            background: `linear-gradient(to bottom right, ${getRandomColor()}, #ffffff)` 
          }
        }
      ))

      setEggs(newEggs)

    }, [])

    const showModal = (egg) => {
      setCurrentEgg(egg)
      setModalOpen(true)
    }
  
    const closeModal = () => {
      setModalOpen(false)
      setResult('')
    }
  
    const revealAnswer = () => {
      setResult(currentEgg.answer)
      // crack the egg
      eggs[currentEgg.id].cracked = true
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
        eggs,
        currentEgg,
        getRandomColor
    }
}
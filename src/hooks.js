import React, { useState, useEffect } from 'react'
import {
  javascriptQuestions,
  mongodbQuestions,
  reactQuestions,
  typescriptQuestions,
  demosphereQuestions,
  movieQuestions,
  nestjsQuestions
} from './triviaQuestions'
import { shuffle, flatten } from 'lodash'

const triviaQuestions = shuffle(
  flatten([
    javascriptQuestions,
    mongodbQuestions,
    reactQuestions,
    typescriptQuestions,
    demosphereQuestions,
    movieQuestions,
    nestjsQuestions
  ])
)

const crackedEggStyle = {
  background: 'none',
  border: 'none',
  boxShadow: 'none'
}
export const useEggHuntProps = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentEgg, setCurrentEgg] = useState({})
  const [result, setResult] = useState('')
  const [eggs, setEggs] = useState([])

  useEffect(() => {
    const newEggs = triviaQuestions.map((egg, index) => ({
      ...egg,
      id: index,
      style: {
        background: `linear-gradient(to bottom right, ${getRandomColor()}, #ffffff)`
      }
    }))

    setEggs(newEggs)
  }, [])

  const showModal = egg => {
    if (!egg.cracked) {
      setCurrentEgg(egg)
      setModalOpen(true)
    }
  }

  const closeModal = () => {
    setModalOpen(false)
    setResult('')
  }

  const revealAnswer = () => {
    setResult(currentEgg.answer)
    // crack the egg
    eggs[currentEgg.id].cracked = true
    eggs[currentEgg.id].style = crackedEggStyle
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

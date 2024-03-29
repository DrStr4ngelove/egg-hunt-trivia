import React, { useState, useEffect } from 'react';

export const useTimerProps = () => {
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          setTimer(prevTimer => prevTimer + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [isRunning]);
  
    const startTimer = () => {
      setIsRunning(true);
    };
  
    const stopTimer = () => {
      setIsRunning(false);
    };

    return {
        timer,
        startTimer,
        stopTimer,
        isRunning
    }
}
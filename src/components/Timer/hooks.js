import React, { useState, useEffect } from 'react';

export const useTimerProps = (props) => {
    const { onClose} = props
    const [timer, setTimer] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
  
    const startTimer = () => {
      setIsRunning(true);
    };

    useEffect(() => {
      let interval;
  
      if (isRunning) {
        interval = setInterval(() => {
          setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
        }, 1000);
      }
  
      return () => clearInterval(interval);
    }, [isRunning]);
  
    useEffect(() => {
      startTimer();
    }, []);

    return {
        timer,
        isRunning,
        onClose
    }
}
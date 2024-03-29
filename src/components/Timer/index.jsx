import React from 'react';
import { useTimerProps } from './hooks';
import '../../styles.css';
export const Timer = (props) => {
    const {
        timer,
        onClose
    } = useTimerProps(props)
    
    const clockStyle = {
        color: timer <= 10 ? 'red': 'black',
    }

    return (
    <div className={'timer'}>
        <p className="clock" style={clockStyle}>{timer} sec</p>
        {timer === 0 && <p className="times-up">TIMES UP!!!</p>}
        <span className="close" onClick={onClose}>X</span>
    </div>
    )
};

export default Timer

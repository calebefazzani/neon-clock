import React from 'react';
import useClock from '../hook/useClock';
import StardardClock from './StandardClock';
import TimeReadout from './TimeReadout';
import '../NeonClock.css';

const NeonClock = () =>{
    const time = useClock();
    return(
        <div className="clock">
            <StardardClock time={time} />
            <TimeReadout time={time} />
        </div>
    )
}

export default NeonClock;
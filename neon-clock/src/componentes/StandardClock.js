import React from 'react';
const StandardClock = ({time}) =>{
    const clockMarks = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

    const hourAngle = ((time.hour % 12) * 60 + time.minute)/ 2;
    const minuteAngle = (time.minute * 60 + time.second)/10;
    const secondAngle = time.second * 6;

    return (
        <div className='standard-clock'>
            <div>
                {
                    clockMarks.map(mark => <span className='mark'>{mark}</span>)
                }
            </div>
            <div>
                {
                    Array(60).fill(1).map((tick,index) => <span key={Math.random()} className='tick' />)
                }
            </div>
            <div className="inner-circle"></div>
            <div className="inner-circle-2"></div>
            <div className="hour-hand" style={{ transform:`rotate(${hourAngle}deg)` }}></div>
            <div className="minute-hand" style={{transform : `rotate(${minuteAngle}deg)`}}></div>
            <div className="second-hand" style={{transform: `rotate(${secondAngle}deg)`}}></div>
            <div className="center"></div>
        </div>
    )
}

export default StandardClock;
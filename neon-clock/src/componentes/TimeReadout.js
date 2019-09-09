import React from 'react';
import {getReadoutConfig, getHighlights} from '../funcoes/clock.functions';
const TimeReadout = ({time}) =>{
    const readoutConfig = getReadoutConfig(time);
    const highlighted = getHighlights(readoutConfig);
    const sentencas = ['IT IS', 'ABOUT', 'NEARLY', 'TEN', 'QUARTER', 'TWENTY', 'FIVE', 'HALF', 'PAST', 'TO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'NOON', 'MIDNIGHT', 'O\' CLOCK', 'IN THE', 'MORNING', 'AFTERNOON', 'EVENING', ];

    const sentencasList = sentencas.map((sentenca, index) =>{
        return(<span key={index} className={highlighted[index] ? 'glow' : ''}>{sentenca}</span>);
    });
    return(
        <div className="readout">
            <p className="sentencas">
                {sentencasList}
            </p>
            <p className="timer">{time.display}</p>
        </div>
    );
}


export default TimeReadout;
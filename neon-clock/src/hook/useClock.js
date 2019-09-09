import {useState, useEffect} from 'react';
import {getNow} from '../funcoes/clock.functions';
function useClock(){
    const [timer, setTimer] = useState(null);
    const [time,setTime] = useState(getNow());

    useEffect(() =>{
        if(!timer) initTimer();

        return(() => (timer && window.clearInterval(timer) && setTimer(null)));
    }, [timer]);

    function initTimer(){
        const now = Date.now();
        const nextSec = (Math.floor(now / 1000) + 1) * 1000;
        const timeLeft = nextSec - now;

        window.setTimeout(() => {
            const interval = window.setInterval(() => setTime(getNow()), 1000);

            setTimer(interval);
        }, timeLeft);
    }

    return time;
}

export default useClock;
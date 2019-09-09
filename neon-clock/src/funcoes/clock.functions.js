
function getNow(){
    const now = new Date(Date.now());
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const display = now.toLocaleString();
    return {
        hour, minute, second, display
    };
}

function getReadoutConfig({hour, minute}){
    const lastMinuteMark = Math.floor(minute/5) * 5;
    const distFromLast = minute - lastMinuteMark;
    const isExact = distFromLast === 0;
    const isNearly = !isExact && distFromLast > 2;
    const isAbout = !isExact && !isNearly;
    const nearestMinuteMark = isNearly ? (lastMinuteMark + 5) % 60: lastMinuteMark;
    const isOClock = nearestMinuteMark === 0;
    const isPast = !isOClock && nearestMinuteMark <= 30;
    const isTo = !isOClock && !isPast;
    const minuteMark = (isPast || isOClock) ? nearestMinuteMark : 60 - nearestMinuteMark;
    const nearestHour = (isTo || (isOClock && isNearly)) ? (hour + 1) % 24 : hour;
    const nearestHour12 = nearestHour > 12 ? nearestHour - 12 : nearestHour;
    const isNoon = nearestHour === 12;
    const isMidnight = nearestHour === 0;
    const isMorning = !isMidnight && nearestHour < 12;
    const isAfternoon = nearestHour > 12 && nearestHour <= 18;
    const isEvening = nearestHour > 18;

    return {
        isExact,
        isAbout,
        isNearly,
        minute : minuteMark,
        isOClock: isOClock && !isNoon && !isMidnight,
        isPast,
        isTo,

        hour: nearestHour12,
        isNoon,
        isMidnight,
        isMorning,
        isAfternoon,
        isEvening,
    };
}

function getHighlights(config){
    return[
        true,
        config.isAbout,
        config.isNearly,
        config.minute === 10,
        config.minute === 15,
        config.minute === 20 || config.minute === 25,
        config.minute === 5 || config.minute === 25,
        config.minute === 30,
        config.isPast,
        config.isTo,
        config.hour === 1,
        config.hour === 2,
        config.hour === 3,
        config.hour === 4,
        config.hour === 5,
        config.hour === 6,
        config.hour === 7,
        config.hour === 8,
        config.hour === 9,
        config.hour === 10,
        config.hour === 11,
        config.isNoon,
        config.isMidnight,
        config.isOClock,
        config.isMorning || config.isAfternoon ||  config.isEvening,
        config.isMorning,
        config.isAfternoon,
        config.isEvening,
    ];
}
/*
const readoutConfig = getReadoutConfig(time);
const highlighted = getHighlights(readoutConfig);
const readoutString = frases.filter((frase, index) => highlighted[index]).join(' ');*/

export {getNow, getReadoutConfig, getHighlights};
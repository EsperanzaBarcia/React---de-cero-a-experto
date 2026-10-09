import { useEffect, useEffectEvent, useState } from "react";

//* como los colores son algo del semaforo, podemos dejarlo fuera del componente
const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    gray: 'bg-gray-500'
};

export const useTrafficLight = () => {


    type TrafficLightColor = keyof typeof colors;

    const [light, setLight] = useState<TrafficLightColor>('red');

    const [countdown, setCountdown] = useState(5);

    const getLightColor = (color: TrafficLightColor) => {

        if (light === color) {
            return colors[light];
        }
        return colors.gray;
    };

    const setLightEvent = useEffectEvent(() => {
        if (countdown > 0) return;
        setCountdown(5);

        if (light === 'red') {
            setLight('green');
            return;
        }
        if (light === 'yellow') {
            setLight('red');
            return;
        }
        if (light === 'green') {
            setLight('yellow');
            return;
        }
    });

    useEffect(() => {
        if (countdown === 0) {
            return;
        }

        const intervalCoundown = setInterval(() => setCountdown((prev) => prev - 1), 1000);

        return () => clearInterval(intervalCoundown);
    }, [countdown]);

    useEffect(() => {
        if (countdown > 0) return;

        setLightEvent();
    }, [countdown]);


    return {
        //Values
        countdown,

        //Computed
        percentage: (countdown / 5) * 100,

        //Methods
        getLightColor

    };
};
import { useEffect, useEffectEvent, useState } from "react";

export const TrafficLightWithEffect = () => {

    const colors = {
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse',
        gray: 'bg-gray-500'
    };

    type TrafficLightColor = keyof typeof colors;

    const [light, setLight] = useState<TrafficLightColor>('red');

    const [countdown, setCountdown] = useState(5);

    //* Si no hay una accion desde el usuario, sino que es una accion que se triggerea
    //* desde un efecto, deberiamos usar useEffectEvent 
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
        //* Lo que hacemos aqui es comprobar si el countdown es 0,
        //* en ese caso hasta que no pase un segundo y el interval termine
        //* no lo vera para llamar a setLightEvent
        //* que a su vez cambia el countdown y llama de nuevo al efecto
        //* https://react.dev/blog/2025/10/01/react-19-2#use-effect-event

        //!ARREGLAR PORQUE CUANDO ESTA EN 0 SIGUE ESPERANDO UN SEGUNDO
        const countdownInterval = setInterval(() => {
            if (countdown === 0) {
                setLightEvent();
                return;
            }
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        }

    }, [countdown]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-white text-3xl font-thin">
                    Semáforo con useEffect
                </h1>
                <h2 className="text-white text-2xl ">
                    Countdown: {countdown}
                </h2>
                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${(countdown / 5) * 100}%` }}
                    >
                    </div>
                </div>
                <div className={`w-32 h-32 
                ${light === 'red' ? colors[light] : colors.gray} rounded-full`}></div>

                <div className={`w-32 h-32 
                ${light === 'yellow' ? colors[light] : colors.gray} rounded-full`}></div>

                <div className={`w-32 h-32 
                    ${light === 'green' ? colors[light] : colors.gray}
                    rounded-full`}></div>
            </div>
        </div >
    );
};

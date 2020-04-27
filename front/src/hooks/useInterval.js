// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

// PARA DETENER CALLBACK O DELAY DEBEN SER NULL

function useInterval(callback, delay) {

    const intervalRef = useRef();

    const clear = () => {
        clearInterval(intervalRef.current)
    }

    useEffect(() => {
        if (!delay || !callback) return clear
        intervalRef.current = setInterval(() => callback(), delay);
        return clear
    }, [delay]);

}

export default useInterval
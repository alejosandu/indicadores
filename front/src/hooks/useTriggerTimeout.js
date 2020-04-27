// https://stackoverflow.com/questions/56267322/react-hooks-settimeout-after-setstate
import { useEffect, useRef } from 'react';

// PARA DETENER TRIGGER, CALLBACK O DELAY DEBEN SER NULL

const useTriggerTimeout = (trigger = null,callback, delay) => {

    const timeoutRef = useRef(null)

    const clear = () => {
        clearTimeout(timeoutRef.current)
    }

    useEffect(() => {
        if(!delay || !callback || !trigger) return clear
            timeoutRef.current = setTimeout(() => callback(), delay);
        return clear
    }, [trigger])

}

export default useTriggerTimeout
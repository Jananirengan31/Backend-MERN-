
import { useState, useRef, useEffect } from "react";

const Timer = () => {

    const [count, setCount] = useState(0);

    const timerRef = useRef(null);

    const startTimer = () => {

        if (timerRef.current !== null) {
            return;
        }

        timerRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

    };

    const stopTimer = () => {

        clearInterval(timerRef.current);
        timerRef.current = null;

    };

    const resetTimer = () => {

        clearInterval(timerRef.current);
        timerRef.current = null;

        setCount(0);

    };

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return (
        <div>

            <h2>Timer</h2>

            <h1>{count}</h1>

            <button onClick={startTimer}>Start</button>

            <button onClick={stopTimer}>Stop</button>

            <button onClick={resetTimer}>Reset</button>

        </div>
    );
};

export default Timer;

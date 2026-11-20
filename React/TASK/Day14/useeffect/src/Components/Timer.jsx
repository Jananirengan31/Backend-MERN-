
import { useState, useEffect } from "react";

const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setSeconds((previous) => previous + 1);

        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <div className="p-5 text-center">

            <h1 className="text-2xl font-bold mb-4">
                Timer
            </h1>

            <h2 className="text-4xl font-bold text-blue-600">
                {seconds}
            </h2>

            <p className="mt-2">
                Seconds
            </p>

        </div>
    );
};

export default Timer;

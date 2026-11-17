import { useState } from "react";

const Task10 = () => {

    const [number, setNumber] = useState(10);

    const increment = () => {
        setNumber(number + 5);
    }

    const decrement = () => {
        setNumber(number - 2);
    }

    const multiply = () => {
        setNumber(number * 3);
    }

    const reset = () => {
        setNumber(10);
    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 10 - Number useState
            </h1>

            <h2 className="text-4xl font-bold text-center text-blue-600 my-6">
                {number}
            </h2>

            <div className="flex flex-wrap justify-center gap-3">

                <button
                    onClick={increment}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                    +5
                </button>

                <button
                    onClick={decrement}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    -2
                </button>

                <button
                    onClick={multiply}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                >
                    ×3
                </button>

                <button
                    onClick={reset}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg"
                >
                    Reset
                </button>

            </div>

            <h2 className="text-center text-xl font-semibold mt-6">
                Number is: {number % 2 === 0 ? "Even" : "Odd"}
            </h2>

        </div>
    )
}

export default Task10;
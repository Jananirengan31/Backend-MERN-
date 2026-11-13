import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center">

                <h1 className="text-3xl font-bold mb-6">
                    Counter App
                </h1>

                <h2 className="text-4xl font-bold mb-6">
                    {count}
                </h2>

                <div className="flex gap-4">

                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-green-600 text-white px-5 py-3 rounded-lg"
                    >
                        Increment
                    </button>

                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-red-500 text-white px-5 py-3 rounded-lg"
                    >
                        Decrement
                    </button>

                    <button
                        onClick={() => setCount(0)}
                        className="bg-gray-600 text-white px-5 py-3 rounded-lg"
                    >
                        Reset
                    </button>

                </div>

            </div>
        </>
    )
}

export default Counter;
import { useState } from "react";

const ChangeWord = () => {

    const [word, setWord] = useState("React");

    return (
        <>
            <div className="min-h-screen bg-yellow-50 flex flex-col justify-center items-center">

                <h1 className="text-4xl font-bold mb-6">
                    {word}
                </h1>

                <button
                    onClick={() => setWord("Node")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                    Change Word
                </button>

            </div>
        </>
    )
}

export default ChangeWord;
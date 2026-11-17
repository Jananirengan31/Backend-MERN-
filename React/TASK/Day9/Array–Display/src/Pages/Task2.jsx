import { useState } from "react";

const Task2 = () => {

    const [colors, setColors] = useState([
        "Red",
        "Blue",
        "Green"
    ]);

    const addColor = () => {
        setColors([...colors, "Yellow"]);
    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 2 - Array Add
            </h1>

            {colors.map((color, index) => (
                <p key={index} className="bg-blue-50 p-3 rounded mb-2">
                    {color}
                </p>
            ))}

            <button
                onClick={addColor}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-3"
            >
                Add Color
            </button>

        </div>
    )
}

export default Task2;
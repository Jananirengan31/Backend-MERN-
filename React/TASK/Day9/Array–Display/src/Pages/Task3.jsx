import { useState } from "react";

const Task3 = () => {

    const [fruits, setFruits] = useState([
        "Apple",
        "Banana",
        "Orange",
        "Grapes"
    ]);

    const updateFruit = () => {

        setFruits(
            fruits.map((fruit) =>
                fruit === "Apple" ? "Mango" : fruit
            )
        );

    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 3 - Array Update
            </h1>

            {fruits.map((fruit, index) => (
                <p key={index} className="bg-blue-50 p-3 rounded mb-2">
                    {fruit}
                </p>
            ))}

            <button
                onClick={updateFruit}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-3"
            >
                Update Apple to Mango
            </button>

        </div>
    )
}

export default Task3;
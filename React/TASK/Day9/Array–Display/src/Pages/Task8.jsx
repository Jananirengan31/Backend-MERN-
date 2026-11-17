import { useState } from "react";

const Task8 = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleStatus = () => {

        setIsActive(!isActive);

    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 8 - Boolean Toggle
            </h1>

            <h2 className={`text-xl font-bold mb-4 ${
                isActive ? "text-green-600" : "text-red-500"
            }`}>
                Status: {isActive ? "Active" : "Inactive"}
            </h2>

            <button
                onClick={toggleStatus}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
                Toggle Status
            </button>

        </div>
    )
}

export default Task8;
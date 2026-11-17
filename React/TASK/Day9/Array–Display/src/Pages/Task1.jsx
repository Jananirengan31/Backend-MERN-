import { useState } from "react";

const Task1 = () => {

    const [languages] = useState([
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "React"
    ]);

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 1 - Array Display
            </h1>

            {languages.map((language, index) => (
                <p key={index} className="bg-blue-50 p-3 rounded-lg mb-2">
                    {language}
                </p>
            ))}

        </div>
    )
}

export default Task1;
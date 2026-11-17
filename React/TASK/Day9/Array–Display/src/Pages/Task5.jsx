import { useState } from "react";

const Task5 = () => {

    const [student, setStudent] = useState({
        name: "Janani",
        age: 22,
        city: "Chennai"
    });

    const addCountry = () => {

        setStudent({
            ...student,
            country: "India"
        });

    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 5 - Object Add
            </h1>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Name: {student.name}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Age: {student.age}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                City: {student.city}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Country: {student.country}
            </p>

            <button
                onClick={addCountry}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-3"
            >
                Add Country
            </button>

        </div>
    )
}

export default Task5;
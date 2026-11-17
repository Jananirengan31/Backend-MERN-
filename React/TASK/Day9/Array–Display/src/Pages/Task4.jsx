import { useState } from "react";

const Task4 = () => {

    const [cities, setCities] = useState([
        "Chennai",
        "Bangalore",
        "Mumbai",
        "Delhi",
        "Hyderabad"
    ]);

    const deleteCity = () => {

        setCities(
            cities.filter((city) => city !== "Chennai")
        );

    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 4 - Array Delete
            </h1>

            {cities.map((city, index) => (
                <p key={index} className="bg-blue-50 p-3 rounded mb-2">
                    {city}
                </p>
            ))}

            <button
                onClick={deleteCity}
                className="bg-red-500 text-white px-5 py-2 rounded-lg mt-3"
            >
                Delete Chennai
            </button>

        </div>
    )
}

export default Task4;
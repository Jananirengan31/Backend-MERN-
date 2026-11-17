import { useState } from "react";

const Task9 = () => {

    const [person] = useState({
        name: "Janani",
        age: 0,
        city: null,
        phone: undefined
    });

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 9 - Nullish Operator
            </h1>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Name: {person.name ?? "Not Available"}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Age: {person.age ?? "Not Available"}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                City: {person.city ?? "Not Available"}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Phone: {person.phone ?? "Not Available"}
            </p>

        </div>
    )
}

export default Task9;
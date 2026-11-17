import { useState } from "react";

const Task7 = () => {

    const [mobiles, setMobiles] = useState([
        { id: 1, brand: "Samsung", price: 30000 },
        { id: 2, brand: "Apple", price: 80000 },
        { id: 3, brand: "OnePlus", price: 40000 }
    ]);

    const addMobile = () => {

        setMobiles([
            ...mobiles,
            { id: 4, brand: "Vivo", price: 25000 }
        ]);

    }

    const updateMobile = () => {

        setMobiles(
            mobiles.map((mobile) =>
                mobile.id === 2
                    ? { ...mobile, price: 90000 }
                    : mobile
            )
        );

    }

    const deleteMobile = () => {

        setMobiles(
            mobiles.filter((mobile) => mobile.id !== 3)
        );

    }

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 7 - Array of Objects CRUD
            </h1>

            {mobiles.map((mobile) => (

                <div
                    key={mobile.id}
                    className="bg-blue-50 p-4 rounded-lg mb-3"
                >

                    <p>ID: {mobile.id}</p>
                    <p>Brand: {mobile.brand}</p>
                    <p>Price: ₹{mobile.price}</p>

                </div>

            ))}

            <div className="flex flex-wrap gap-3 mt-4">

                <button
                    onClick={addMobile}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                    Add Mobile
                </button>

                <button
                    onClick={updateMobile}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Update Mobile 2
                </button>

                <button
                    onClick={deleteMobile}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    Delete Mobile 3
                </button>

            </div>

        </div>
    )
}

export default Task7;
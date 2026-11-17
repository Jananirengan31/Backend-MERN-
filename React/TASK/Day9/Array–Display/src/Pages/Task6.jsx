import { useState } from "react";

const Task6 = () => {

    const [product, setProduct] = useState({
        brand: "Samsung",
        model: "Galaxy S25",
        price: 50000,
        color: "Black"
    });

    const updatePrice = () => {

        setProduct({
            ...product,
            price: 60000
        });

    }

    const deleteColor = () => {

        const { color, ...remaining } = product;

        setProduct(remaining);

    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">

            <h1 className="text-2xl font-bold text-blue-600 mb-4">
                Task 6 - Object Update and Delete
            </h1>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Brand: {product.brand}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Model: {product.model}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Price: ₹{product.price}
            </p>

            <p className="bg-blue-50 p-3 rounded mb-2">
                Color: {product.color}
            </p>

            <button
                onClick={updatePrice}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 mr-2"
            >
                Update Price
            </button>

            <button
                onClick={deleteColor}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-3"
            >
                Delete Color
            </button>

        </div>
    )
}

export default Task6;
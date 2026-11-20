import { useState } from "react";

const ProductPrice = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mouse", price: 500 },
        { id: 3, name: "Keyboard", price: 1500 },
        { id: 4, name: "Monitor", price: 12000 },
        { id: 5, name: "Headphone", price: 2000 }
    ]);

    const totalPrice = products.reduce(
        (total, product) => total + product.price, 0
    );

    const expensiveProducts = products.filter(
        (product) => product.price > 2000
    );

    return (
        <div className="min-h-screen bg-green-50 p-8">

            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">

                <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
                    Product Price Calculator
                </h1>

                <div className="bg-green-100 p-4 rounded-lg mb-5">

                    <h2 className="font-bold text-lg text-gray-800 mb-3">
                        All Products
                    </h2>

                    {products.map((product) => (

                        <div key={product.id} className="flex justify-between border-b border-green-200 py-3">

                            <p className="font-medium">
                                {product.name}
                            </p>

                            <p className="font-bold text-green-700">
                                ₹{product.price}
                            </p>

                        </div>

                    ))}

                </div>

                <div className="bg-blue-100 p-4 rounded-lg mb-5">

                    <h2 className="text-lg font-bold text-blue-700">
                        Total Price: ₹{totalPrice.toLocaleString("en-IN")}
                    </h2>

                    <p className="text-gray-700 mt-2">
                        Number of Products: {products.length}
                    </p>

                </div>

                <div className="bg-yellow-100 p-4 rounded-lg">

                    <h2 className="font-bold text-lg text-yellow-800 mb-3">
                        Products Above ₹2,000
                    </h2>

                    {expensiveProducts.map((product) => (

                        <div key={product.id} className="flex justify-between py-2">

                            <p>{product.name}</p>

                            <p className="font-semibold">
                                ₹{product.price.toLocaleString("en-IN")}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default ProductPrice;
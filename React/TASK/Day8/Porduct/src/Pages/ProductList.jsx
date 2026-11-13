import { useNavigate } from "react-router-dom";

const ProductList = () => {

    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headphones", price: 2000 },
        { id: 4, name: "Keyboard", price: 1500 }
    ];

    return (
        <>
            <div className="min-h-screen bg-blue-50 p-10">

                <h1 className="text-3xl font-bold text-center mb-8">
                    Product List
                </h1>

                <div className="grid grid-cols-2 gap-6">

                    {products.map((product) => (

                        <div key={product.id} className="bg-white p-6 rounded-xl shadow-md">

                            <h2 className="text-xl font-bold">
                                {product.name}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Price: ₹{product.price}
                            </p>

                            <button
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="bg-blue-600 text-white px-5 py-2 mt-4 rounded-lg"
                            >
                                View Details
                            </button>

                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}

export default ProductList;
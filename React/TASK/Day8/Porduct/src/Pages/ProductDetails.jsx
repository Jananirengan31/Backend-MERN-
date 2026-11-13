import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams();

    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headphones", price: 2000 },
        { id: 4, name: "Keyboard", price: 1500 }
    ];

    const product = products.find((item) => item.id === Number(id));

    return (
        <>
            <div className="min-h-screen bg-purple-50 flex justify-center items-center">

                <div className="bg-white p-10 rounded-xl shadow-lg">

                    <h1 className="text-3xl font-bold mb-5">
                        Product Details
                    </h1>

                    {product ? (
                        <>
                            <h2 className="text-xl font-semibold">
                                {product.name}
                            </h2>

                            <p className="text-gray-600 mt-3">
                                Price: ₹{product.price}
                            </p>
                        </>
                    ) : (
                        <h2>Product Not Found</h2>
                    )}

                </div>

            </div>
        </>
    )
}

export default ProductDetails;
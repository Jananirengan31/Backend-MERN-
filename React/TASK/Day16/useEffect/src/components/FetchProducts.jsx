
import { useState, useEffect } from "react";

const FetchProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {

        try {
            const res = await fetch("https://dummyjson.com/products?limit=10");
            const data = await res.json();

            setProducts(data.products);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
        <div className="p-5">

            <h1 className="text-2xl font-bold text-center mb-5">
                Fetch Products
            </h1>

            {loading ? (

                <div className="grid grid-cols-3 gap-5">

                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="border p-4 rounded-lg animate-pulse">

                            <div className="bg-gray-200 h-40 mb-3 rounded"></div>

                            <div className="bg-gray-200 h-4 w-3/4 mb-3 rounded"></div>

                            <div className="bg-gray-200 h-4 w-1/2 rounded"></div>

                        </div>
                    ))}

                </div>

            ) : products.length === 0 ? (

                <h2 className="text-center text-red-500">
                    No Products Found
                </h2>

            ) : (

                <div className="grid grid-cols-3 gap-5">

                    {products.map((item) => (

                        <div key={item.id} className="border p-4 rounded-lg shadow">

                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-40 object-contain"
                            />

                            <h2 className="font-bold mt-2">
                                {item.title}
                            </h2>

                            <p className="text-green-600 font-bold">
                                ${item.price}
                            </p>

                        </div>

                    ))}

                </div>

            )}

        </div>
    </>);
};

export default FetchProducts;

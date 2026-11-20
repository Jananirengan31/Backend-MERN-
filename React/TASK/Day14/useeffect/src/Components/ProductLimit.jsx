
import { useState, useEffect } from "react";

const ProductLimit = () => {

    const [showDatas, setShowDatas] = useState([]);

    const fetchData = async () => {

        try {
            const res = await fetch("https://dummyjson.com/products?limit=3");
            const data = await res.json();

            setShowDatas(data.products);

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-5">

            <h1 className="text-2xl font-bold mb-5">
                Product List
            </h1>

            <div className="grid grid-cols-3 gap-5">

                {showDatas.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg">

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-40 object-cover"
                        />

                        <h2 className="font-bold mt-2">
                            {product.title}
                        </h2>

                        <p>Price: ${product.price}</p>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default ProductLimit;

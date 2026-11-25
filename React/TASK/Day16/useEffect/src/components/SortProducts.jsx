
import { useState, useEffect } from "react";

const SortProducts = () => {

    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    const fetchProducts = async () => {

        try {
            const res = await fetch("https://dummyjson.com/products?limit=20");
            const data = await res.json();

            setProducts(data.products);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const sortedProducts = [...products].sort((a, b) => {

        if (sortOrder === "low") {
            return a.price - b.price;
        }

        if (sortOrder === "high") {
            return b.price - a.price;
        }

        return 0;
    });


    return (
        <>
        <div className="p-5">

            <h1 className="text-2xl font-bold text-center mb-5">
                Sort Products
            </h1>

            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border p-2 rounded mb-5"
            >

                <option value="">Select Sorting</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>

            </select>

            <div className="grid grid-cols-3 gap-5">

                {sortedProducts.map((item) => (

                    <div key={item.id} className="border p-4 rounded-lg shadow">

                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-40 object-contain"
                        />

                        <h2 className="font-bold mt-2">
                            {item.title}
                        </h2>

                        <p className="text-green-600">
                            ${item.price}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    
    </>);
};

export default SortProducts;

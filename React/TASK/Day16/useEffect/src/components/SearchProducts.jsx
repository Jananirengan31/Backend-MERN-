
import { useState, useEffect } from "react";

const SearchProducts = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchProducts = async () => {

        try {
            const res = await fetch("https://dummyjson.com/products?limit=30");
            const data = await res.json();

            setProducts(data.products);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <div className="p-5">

            <h1 className="text-2xl font-bold text-center mb-5">
                Search Products
            </h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 w-full mb-5 rounded"
            />

            <div className="grid grid-cols-3 gap-5">

                {filteredProducts.length === 0 ? (

                    <h2>No Products Found</h2>

                ) : (

                    filteredProducts.map((item) => (

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

                    ))

                )}

            </div>

        </div>
    </>);
};

export default SearchProducts;

const Product =()=> {

    let product = {
        id: "P101",
        name: "Samsung Smartphone",
        price: 20000,
        brand: "Samsung",
        category: "Electronics"
    };

    return (
        <>
        <div>
            <h1>Product Details</h1>

            <h2>{product.name}</h2>

            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Product ID: {product.id}</p>

            <h2>{product.price * 0.9}</h2>

            <p>Original price: {product.price}</p>
        </div>
        </>
    );
}

export default Product;
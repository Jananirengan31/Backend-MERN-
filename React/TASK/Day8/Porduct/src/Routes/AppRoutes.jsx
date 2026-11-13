
import { Routes, Route } from "react-router-dom";

import ProductList from "../Pages/ProductList";
import ProductDetails from "../Pages/ProductDetails";
import Counter from "../Pages/Counter";
import ChangeWord from "../Pages/ChangeWord";

const AppRoutes = () => {

    return (
        <>
            <Routes>

                <Route path="/" element={<ProductList />} />

                <Route path="/product/:id" element={<ProductDetails />} />

                <Route path="/counter" element={<Counter />} />

                <Route path="/change" element={<ChangeWord />} />

            </Routes>
        </>
    )
}

export default AppRoutes;
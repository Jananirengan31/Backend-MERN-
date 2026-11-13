import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="bg-blue-600 p-5 flex justify-between items-center">

                <h1 className="text-white text-2xl font-bold">
                    My Store
                </h1>

                <div className="flex gap-6 text-white font-semibold">
                    <Link to="/">Products</Link>
                    <Link to="/counter">Counter</Link>
                    <Link to="/change">Change Word</Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar;
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="bg-blue-600 p-5">
            <h1 className="text-white text-2xl font-bold text-center mb-5">
                React JS – Array of Objects Tasks
            </h1>

            <div className="flex flex-wrap justify-center gap-4">

                <Link to="/" className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100">
                    Employee Salary
                </Link>

                <Link to="/product" className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100">
                    Product Price
                </Link>

                <Link to="/student" className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100">
                    Student Records
                </Link>

            </div>
        </nav>
    )
}

export default Navbar;
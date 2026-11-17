import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="bg-blue-600 p-4">

            <h1 className="text-white text-2xl font-bold text-center mb-4">
                React JS Practice Tasks
            </h1>

            <div className="flex flex-wrap justify-center gap-3">

                <Link to="/task1" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 1</Link>

                <Link to="/task2" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 2</Link>

                <Link to="/task3" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 3</Link>

                <Link to="/task4" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 4</Link>

                <Link to="/task5" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 5</Link>

                <Link to="/task6" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 6</Link>

                <Link to="/task7" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 7</Link>

                <Link to="/task8" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 8</Link>

                <Link to="/task9" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 9</Link>

                <Link to="/task10" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Task 10</Link>

            </div>

        </nav>
    )
}

export default Navbar;
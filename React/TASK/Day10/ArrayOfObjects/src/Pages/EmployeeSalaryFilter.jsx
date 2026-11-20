import { useState } from "react";

const EmployeeSalaryFilter = () => {

    const [employees, setEmployees] = useState([
        { id: 1, name: "Arun", salary: 25000 },
        { id: 2, name: "Bala", salary: 45000 },
        { id: 3, name: "Kumar", salary: 60000 },
        { id: 4, name: "Vijay", salary: 35000 },
        { id: 5, name: "Priya", salary: 55000 }
    ]);

    const [showFiltered, setShowFiltered] = useState(false);

    const filteredEmployees = employees.filter(
        (emp) => emp.salary > 40000
    );

    return (
        <div className="min-h-screen bg-blue-50 p-8">

            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">

                <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Employee Salary Filter
                </h1>

                <div className="grid gap-4">

                    {(showFiltered ? filteredEmployees : employees).map((emp) => (

                        <div key={emp.id} className="bg-blue-100 p-4 rounded-lg flex justify-between">

                            <h2 className="font-semibold text-gray-800">
                                {emp.name}
                            </h2>

                            <p className="font-bold text-blue-700">
                                ₹{emp.salary}
                            </p>

                        </div>

                    ))}

                </div>

                <button
                    onClick={() => setShowFiltered(!showFiltered)}
                    className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                >
                    {showFiltered ? "Show All Employees" : "Filter Salary Above ₹40,000"}
                </button>

            </div>

        </div>
    )
}

export default EmployeeSalaryFilter;
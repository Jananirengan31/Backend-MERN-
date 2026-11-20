import { Routes, Route } from "react-router-dom";

import EmployeeSalaryFilter from "../Pages/EmployeeSalaryFilter";
import ProductPrice from "../Pages/ProductPrice";
import StudentRecords from "../Pages/StudentRecords";

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<EmployeeSalaryFilter />} />

            <Route path="/product" element={<ProductPrice />} />

            <Route path="/student" element={<StudentRecords />} />

        </Routes>
    )
}

export default AppRoutes;
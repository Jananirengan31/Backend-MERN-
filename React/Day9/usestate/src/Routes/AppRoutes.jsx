
import { Routes,Route } from "react-router-dom";
import Array from "../Pages/Array";

const AppRoutes =()=>{

    return(
        <>
        <Routes>

            <Route path="/" element={<Array/>}/>
        </Routes>
        </>
    )
}

export default AppRoutes;
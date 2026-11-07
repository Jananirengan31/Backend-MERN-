import { Link } from "react-router-dom";

const Navbar=()=> {
    return (
       <>
       <div className=" gap-10 bg-blue-600 p-5 flex justify-between shadow-md">
       <div>
        LOGO
       </div>

       <div >
        
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Contact">Contact</Link>

       </div>
       </div>
       </>
    );
}

export default Navbar;
import Navbar from "./Component/Navbar";
import AppRoutes from "./Routes/AppRoutes";

const App=()=> {
    return (

      <>
        <div className="min-h-screen bg-slate-50">

            <Navbar />

            <AppRoutes />

        </div>
        </>
    );
}

export default App;
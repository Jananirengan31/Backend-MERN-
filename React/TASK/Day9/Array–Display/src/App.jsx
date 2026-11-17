
import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {

    return (
        <>
            <Navbar />

            <div className="p-6">
                <AppRoutes />
            </div>
        </>
    )
}

export default App;
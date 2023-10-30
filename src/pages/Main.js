import { NavBar, Footer } from "./PageComponents";
import "../css/main.css";

function Main() {
    return (
        <div class="Main">
            <NavBar />
            <div className="mainContainer">
                <div className="title">
                    <h1>Welcome!</h1>
                </div>
                <div className="flexContainer">
                    <div className="adminContainer">
                        <h1>Admin</h1>
                        {/* to complete */}
                        <a href="./"> </a>
                    </div>
                    <div className="studentContainer">
                        <h1>Student</h1>
                        {/* to complete */}
                        <a href="./"> </a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Main;
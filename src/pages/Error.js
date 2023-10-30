import {Footer, NavBar} from "./PageComponents";

function Error() {
    return (
        <div className="Error">
            <NavBar/>
                <div>
                    <h1>Error!</h1>
                    <p>Sorry, this page does not yet exist</p>
                </div>
            <Footer/>
        </div>
    )
}

export default Error;
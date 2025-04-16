import "../styles/NavBar.css";

function NavBar () {
   
    return (
        <>
            <div className="nav-container">
                <p className="nav-route">Home</p>
                <p className="nav-route">Photos</p>
                <p className="nav-route">Mechanical History</p>
                <p className="nav-route">Contact</p>
            </div>
        </>
    )
}

export default NavBar;
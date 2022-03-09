import { Link } from "react-router-dom";

const Navbar = () => {


    return (  
      <nav className="navbar">
        <h1>Recipe Share</h1>
        <div className="links">
            <Link to="/">Home</Link>  
            <Link to="/NewRecipe" style={{
              color: "white",
              backgroundColor: '#cd5c5c',
              borderRadius: '10px'
            }}>New Recipe</Link>  
        </div>
      </nav>
    );
}
 
export default Navbar;
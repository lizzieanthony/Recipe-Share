import { Link } from "react-router-dom";

const Navbar = () => {


    return (  
      <nav className="navbar">
       <h1><Link to="/">Recipe Share</Link></h1> 
        <div className="links">
            <Link to="/">Home</Link>  
            <Link className="new" to="/NewRecipe" >New Recipe</Link>  
        </div>
      </nav>
    );
}
 
export default Navbar;
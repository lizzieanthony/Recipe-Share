

const Navbar = () => {


    return (  
      <nav className="navbar">
        <h1>Recipe Share</h1>
        <div className="links">
            <a href="/">Home</a>  
            <a href="/create" style={{
              color: "white",
              backgroundColor: '#cd5c5c',
              borderRadius: '10px'
            }}>New Recipe</a>  
        </div>
      </nav>
    );
}
 
export default Navbar;
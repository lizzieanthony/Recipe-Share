const Home = () => {

let name = 'Lizzie'

const handleClick = () => {
    name = 'louie';
    console.log(name)
}
 
    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me!</button>
            
        </div>
      );
}
 
export default Home;
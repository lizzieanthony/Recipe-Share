import RecipeList from "./RecipeList";
import useFetch from "./useFetch";

const Home = () => {

    const { data:recipes, isLoading } = useFetch('http://localhost:3001/recipes')
    
    return (
        <div className="home">
            {isLoading && <div className="loading">Loading...</div>}
            {recipes && <RecipeList  recipes={recipes} name ="All Recipes"  />}
        </div>
      );
}
 
export default Home;



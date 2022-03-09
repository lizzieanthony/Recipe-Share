import RecipeList from "./RecipeList";
import useFetch from "./useFetch";

const Home = () => {

    const { data:recipes, isLoading, error} = useFetch('http://localhost:3001/recipes')
    return (
        <div className="home">
            { error && <div>{error}</div> }
            {isLoading && <div className="loading">Loading...</div>}
            {recipes && <RecipeList  recipes={recipes} name ="All Recipes"  />}
        </div>
      );
}
 
export default Home;

{/* <RecipeList  recipes={recipes.filter((recipe) => recipe.author === 'lizzie')} title ="Lizzies' Recipes"/> */}
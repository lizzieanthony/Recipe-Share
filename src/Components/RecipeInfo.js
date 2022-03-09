import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeInfo = () => {
   const { id } = useParams();
   const { data: recipe, isLoading, } = useFetch('http://localhost:3001/recipes/' + id);
   
    return ( 
        <div className="recipe-info" >
            { isLoading && <div>Loading...</div> }
            { recipe && (
                <article>
                    <h2>{ recipe.name }</h2>
                    <h4>Sourced from: {recipe.source }</h4>
                    <p>{ recipe.servings } servings</p>
                    <br></br>
                    <ul>{ recipe.ingredients.map((ingredient) => <li>{ingredient}</li> ) }</ul>
                    <div>{ recipe.instructions }</div>
                </article>
            )}
        </div>
     );
}
 
export default RecipeInfo;


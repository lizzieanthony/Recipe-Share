import { Link } from "react-router-dom";

const RecipeList = ({recipes, name, }) => {
    console.log(recipes)

    return ( 
      <div className="recipe-list"> 
      <h2>{name}</h2> 
        {recipes.map((recipe) => (
            <div className="recipe-preview" key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <h2>{recipe.name}</h2>
                <p>Recipe by: {recipe.source}</p>
              </Link>
            </div>
        ))}
      </div>
        
     );
}
 
export default RecipeList;
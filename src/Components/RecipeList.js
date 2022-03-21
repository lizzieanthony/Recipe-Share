import { Link } from "react-router-dom";

const RecipeList = ({recipes, name }) => {
    console.log(recipes)

    return ( 
      <div className="recipe-list"> 
      <h2>{name}</h2> 
        {recipes.map(({name, id, source}) => (
            <div className="recipe-preview" key={id}>
              <Link to={`/recipes/${id}`}>
                <h2>{name}</h2>
                <p>Recipe by: {source}</p>
              </Link>
            </div>
        ))}
      </div>
        
     );
}
 
export default RecipeList;
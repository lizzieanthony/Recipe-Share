import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeList = ({recipes, name }) => {
    // console.log(recipes)
    const [search, setSearch] = useState('')

    const recipeSearch = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(search.toLowerCase())
    })
  

    return ( 
      <div className="recipe-list"> 
      <h2>{name}</h2> 
      <input type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)} />
        {recipeSearch.map(({name, id, source}) => (
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
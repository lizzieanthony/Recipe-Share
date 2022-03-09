import { useState } from "react";

const RecipeList = ({recipes, name, }) => {
    console.log(recipes)

    return ( 
      <div className="recipe-list"> 
      <h2>{name}</h2> 
        {recipes.map((recipe) => (
            <div className="recipe-preview" key={recipe.id}>
                <h2>{recipe.name}</h2>
                <p>Recipe by: {recipe.source}</p>
        
            </div>
        ))}
      </div>
        
     );
}
 
export default RecipeList;
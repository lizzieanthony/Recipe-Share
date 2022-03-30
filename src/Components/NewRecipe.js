import { useState } from "react";
import { useHistory } from "react-router-dom";


const NewRecipe = () => {

    const [name, setName] = useState('')
    const [source, setSource] = useState('')
    const [servings, setServings] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState('')
    const [recipeAdded, setRecipeAdded] = useState(false)
    const history = useHistory();
    const numbersArray = [...Array(10).keys()]
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newRecipe = { name, source, servings, ingredients: ingredients.split(', '), instructions }

        setRecipeAdded(true);
        setTimeout(() => { 
            fetch('http://localhost:3001/recipes', {
                method: 'POST',
                headers: {'Content-Type': 'application/JSON'},
                body: JSON.stringify(newRecipe)
            }).then(() => {
                console.log('new blog added')
                setRecipeAdded('false')
                history.push('/')
            }) 
    }, 1000);
}

    return ( 
        <div className="NewRecipe" >
            <h2>Add your own Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Recipe Title:</label>
                <input type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <label> Author:</label>
                <input type="text" 
                required
                value={source}
                onChange={(e) => setSource(e.target.value)}
                />

                <select value={servings} onChange={(e) => setServings(e.target.value)}>
                    {<option value={servings}>servings</option>}
                    {numbersArray.map((num) => {
                        return <option key={num} value={num +1}>{num +1} Serving</option>
                    })}
                </select> 

                <label>Ingredients:</label>
                <p>separate using commas. ex: 1 tsp salt, 1 c flour</p>
                <input 
                required
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                />

                <label>Instructions:</label>
                <input  
                required
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                />
                
                { !recipeAdded && <button>Share Recipe</button>}    
                { recipeAdded && <button className="submitted" >Recipe Shared!</button>  }
            </form>
        </div>
    );
}
 
export default NewRecipe;


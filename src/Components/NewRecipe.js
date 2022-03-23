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
                    {<options value={servings}>servings</options>}
                    <option value="1">1 serving </option>
                    <option value="2">2 servings</option>
                    <option value="3">3 servings</option>
                    <option value="4">4 servings</option>
                    <option value="5">5 servings</option>
                    <option value="6">6 servings</option>
                    <option value="7">7 servings</option>
                    <option value="8">8 servings</option>
                    <option value="9">9 servings</option>
                    <option value="10">10 servings</option>   
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
                { recipeAdded && <button style={{
                    color: "white",
                    backgroundColor: '#bf6609',
                    borderRadius: '10px'}}
                >Recipe Shared!</button>  }
            </form>
        </div>
    );
}
 
export default NewRecipe;





// alternate option for servings 

{/* <label>Servings:</label>
<input type="text"
required
value={servings}
onChange={(e) => setServings(e.target.value)}
/> */}
{/* generate option iterate 10x and push let i=1 i++  */}
{/* <select multiple={true} value={['B', 'C']}></select> */}
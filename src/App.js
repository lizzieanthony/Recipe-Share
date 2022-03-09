import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewRecipe from './Components/NewRecipe';
import RecipeInfo from './Components/RecipeInfo';

function App() {
  const title = 'Welecome to Recipe Share';

  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/NewRecipe">
                <NewRecipe />
              </Route>
              <Route  path="/recipes/:id">
                <RecipeInfo />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
   
  );
}

export default App;

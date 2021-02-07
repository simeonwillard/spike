import axios from 'axios';
import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';


function App () {

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

    const getData = async() => {
        const result = await axios.get(url);
        setRecipes(result.data.hits);

        console.log(result)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        getData();
        setQuery('');
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <h2 onClick={getData}>Search Recipes</h2>
            <form onSubmit={onSubmit}>
                <input 
                type="text"
                placeholder="search"
                autoComplete="off"
                onChange={handleChange}
                value={query}
                />
                <input type="submit"
                value="search"
                />
            </form>
            <div>
                {recipes && recipes.map((recipe, i) => {
                    return (
                        <Recipe key={i} recipe={recipe}/>
                    )
                })}
            </div>
        </div>
    );
}

export default App;

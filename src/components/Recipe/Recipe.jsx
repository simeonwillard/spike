import React, { useState } from 'react';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

function Recipe({ recipe }) {
    const { label, image, url, ingredients } = recipe.recipe;
    const [show, setShow] = useState(false);

    

    return (

        <div className="card" style={{ width: 200, display: 'inline-block', margin: 20 }}>
            <img src={image} className="card-img-top" alt={label} />
            <div className="card-body">
                <h5 className="card-title">{label}</h5>
                <a href={url} className="btn btn-primary">Go to Recipe</a>
                <button className="btn-secondary" onClick={() => setShow(!show)}>Ingredients</button>
                {show && <RecipeDetails ingredients={ingredients} />}
            </div>
        </div>

    )
}

export default Recipe;


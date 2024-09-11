// HomePage.js

import React, { useState, useEffect } from 'react';
import recipesData from '../data.json';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Load recipe data from data.json into state
        setRecipes(recipesData);
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {recipes.map(recipe => (
                <div key={recipe.id} className="bg-white shadow-md p-4">
                    <img src={recipe.image} alt={recipe.title} />
                    <h2 className="text-lg font-bold">{recipe.title}</h2>
                    <p>{recipe.summary}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;
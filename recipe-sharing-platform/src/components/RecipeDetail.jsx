import React, { useState, useEffect } from 'react';

const RecipeDetail = ({ match }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`/data.json?id=${match.params.recipeId}`);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe data: ', error);
            }
        };

        fetchRecipe();
    }, [match.params.recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 md:p-8">
    <h2 className="text-2xl font-bold">{recipe.title}</h2>
    <img src={recipe.image} alt={recipe.title} className="w-full md:w-1/2 mx-auto my-4" />
    <div className="my-4">
        <h3 className="text-lg font-bold">Ingredients:</h3>
        <ul>
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ml-4">{ingredient}</li>
            ))}
        </ul>
    </div>
    <div className="my-4">
        <h3 className="text-lg font-bold">Instructions:</h3>
        <ol>
            {recipe.instructions.map((instruction, index) => (
                <li key={index} className="ml-4">{instruction}</li>
            ))}
        </ol>
    </div>
</div>
        
    );
};

export default RecipeDetail;
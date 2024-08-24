import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ id }) => {
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === id));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Prep Time: {recipe.prepTime}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
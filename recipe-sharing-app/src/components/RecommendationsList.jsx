import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const { recommendations } = useRecipeStore();

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
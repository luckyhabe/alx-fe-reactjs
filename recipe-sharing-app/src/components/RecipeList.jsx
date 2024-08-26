import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, filterRecipes, updateSearchTerm, searchTerm } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

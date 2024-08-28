import { create } from 'zustand';
import { useRecipeStore } from './recipeStore';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => setRecipes((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId) })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
  })),
}));

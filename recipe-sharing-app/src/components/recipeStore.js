import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
  deleteRecipe: (recipeId) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId) })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
  })),
  filteredRecipes: () => {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}));

export default useRecipeStore;

import create from 'zustand';

const useRecipeStore = setSearchTerm((set) => ({
  recipes: [], // Your existing recipes data
  searchTerm: '',
  filteredRecipes: [],
  updateSearchTerm: (term) => setSearchTerm({ searchTerm: term }),
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes });
  }
}));

export default useRecipeStore;

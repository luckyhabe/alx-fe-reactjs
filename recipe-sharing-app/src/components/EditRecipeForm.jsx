import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ id, onClose }) => {
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === id));
  const [title, setTitle] = useState(recipe.title);
  const [prepTime, setPrepTime] = useState(recipe.prepTime);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleUpdate = () => {
     form.event.preventDefault();
    useRecipeStore.updateRecipe({ id, title, prepTime, ingredients, instructions });
    onClose();
  };

  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" value={prepTime} onChange={e => setPrepTime(e.target.value)} />
      <input type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} />
      <input type="text" value={instructions} onChange={e => setInstructions(e.target.value)} />
      <button onClick={handleUpdate}>Update Recipe</button>
    </div>
  );
};

export default EditRecipeForm;

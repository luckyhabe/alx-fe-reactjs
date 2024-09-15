import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparationSteps, setPreparationSteps] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || ingredients.trim() === '' || preparationSteps.trim() === '') {
            setFormError('Please fill out all fields');
            return;
        }
        const ingredientsArray = ingredients.split('\n').map(item => item.trim());
        if (ingredientsArray.length < 2) {
            setFormError('Please include at least two ingredients');
            return;
        }
        if(!steps.trim()){
            newErrors.steps = 'Preparation steps are required'
        }

        return newErrors;
    }

        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors);
            return;
        }

        const newRecipe = {
            title, 
            ingredients: ingredients.split(',').map(item => item.trim()),
            steps
        };

        console.log('Submitted Recipe: ', newRecipe);

        setTitle('');
        setIngredients('');
        setSteps('');
        setErrors({});
    
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {formError && <p className="text-red-500">{formError}</p>}
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded" />
            <label>Ingredients</label>
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded"></textarea>
            <label>Preparation Steps</label>
            <textarea value={preparationSteps} onChange={(e) => setPreparationSteps(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-2 rounded">Submit</button>
        </form>
    );

export default AddRecipeForm;

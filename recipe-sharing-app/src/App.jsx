
import RecipeList from './componenents/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

function App() {
  
  return (
    <>
      <div>
      <h1>This my recipe store</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/recipe/1">Recipe 1</Link></li>
          <li><Link to="/recipe/2">Recipe 2</Link></li>
          <li><Link to="/recipe/3">Recipe 3</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
        <Route path="/recipe/:id/delete" element={<DeleteRecipeButton />} />
      </Routes>
    </BrowserRouter>
      </div>
    </>

    
  )
}

export default App

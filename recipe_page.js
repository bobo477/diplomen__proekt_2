document.addEventListener('DOMContentLoaded', () => {
    const recipeId = new URLSearchParams(window.location.search).get('id');
    if (recipeId) {
      fetchRecipeById(recipeId);
    }
  });
  
  async function fetchRecipeById(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/recipes/${id}`);
      if (!response.ok) {
        throw new Error('Recipe not found');
      }
      const recipe = await response.json();
      displayRecipe(recipe);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  }
  
  function displayRecipe(recipe) {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = `
      <div class="recipe">
        <h2>${recipe.name}</h2>
        <p>Time: ${recipe.time}</p>
        <h3>Ingredients:</h3>
        <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient.name} - ${ingredient.measurement}</li>`).join('')}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
      </div>
    `;
  }
  
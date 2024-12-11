document.addEventListener('DOMContentLoaded', () => {
    const recipeId = new URLSearchParams(window.location.search).get('id');
    if (recipeId) {
      fetchRecipeById(recipeId);
    }
  });
  
  async function fetchRecipeById(id) {
    try {
      const response = await fetch(`http://127.0.0.1:5500/recipe_page.html${id}`);
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
        <div class="recipe-image">
          <img src="${recipe.image}" alt="${recipe.name}">
          <p>Time to cook: ${recipe.timeToCook}</p>
          <p>Prep time: ${recipe.prepTime}</p>
          <p>Overall time: ${recipe.overallTime}</p>
        </div>
        <div class="recipe-details">
          <h2>${recipe.name}</h2>
          <h3>Ingredients:</h3>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient.name} - ${ingredient.measurement}</li>`).join('')}
          </ul>
          <h3>Instructions:</h3>
          <p>${recipe.instructions}</p>
        </div>
      </div>
    `;
  }
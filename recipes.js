// Function to filter recipes based on the search input
function searchRecipes() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe-box');
    
    recipes.forEach(function(recipe) {
        const recipeName = recipe.getAttribute('data-name').toLowerCase();
        
        if (recipeName.includes(input)) {
            recipe.style.display = ''; // Show the recipe if it matches
        } else {
            recipe.style.display = 'none'; // Hide the recipe if it doesn't match
        }
    });
}

// Function to toggle the search input visibility
function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none' || !searchInput.style.display) {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
}

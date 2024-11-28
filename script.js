// Toggle the visibility of the search bar and shift the nav links
function toggleSearch() {
  const navLinks = document.getElementById('navLinks');
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.querySelector('.search-icon');
  
  // Move the navigation links offscreen
  navLinks.classList.toggle('shift-left');
  
  // Show the search bar
  searchBar.classList.toggle('show-search');
  
  // Hide the search icon when the search bar appears
  searchIcon.classList.toggle('hidden');
}

// Handle the search functionality
function searchRecipes() {
  const searchTerm = document.getElementById('searchInput').value;
  console.log('Searching for:', searchTerm);
  // Add your search logic here
}

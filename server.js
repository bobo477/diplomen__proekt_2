const express = require('express');
const mysql = require('mysql2'); // Ensure you're using mysql2

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname)); // This line serves static files from the current directory

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Petra_239', // Update with your MySQL password
  database: 'recipe_db' // Update with your database name
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// API endpoint to get a recipe by ID
app.get('/api/recipes/:id', (req, res) => {
  const recipeId = req.params.id;
  const sql = `
    SELECT r.Name AS Recipe_Name, r.Time, r.Instructions, i.Name AS Ingredient_Name, i.Measurement
    FROM RECIPE r
    JOIN RECIPE_INGREDIENTS ri ON r.ID = ri.RecipeID
    JOIN Ingredients i ON ri.IngredientID = i.ID
    WHERE r.ID = ?`;

  db.query(sql, [recipeId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const recipe = {
      name: result[0].Recipe_Name,
      time: result[0].Time,
      instructions: result[0].Instructions,
      ingredients: result.map(row => ({
        name: row.Ingredient_Name,
        measurement: row.Measurement
      }))
    };

    res.json(recipe);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

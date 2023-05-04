const express = require("express");
const app = express();
const port = 5300;
const data = require("./data.json");

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef API server is running");
});

// All data
app.get("/all", (req, res) => {
  res.send(data);
});

// A signle chef data
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const singleChef = data?.thai_chefs?.find((c) => c.id === id);
  console.log(singleChef);
  res.send(singleChef);
});

// Any single recipe

app.get("/recipe/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let singleRecipe = null;

  // Loop through all the chefs and find the recipe with matching ID
  data.thai_chefs.forEach((chef) => {
    const recipe = chef.recipes.find((r) => r.id === id);
    if (recipe) {
      singleRecipe = recipe;
    }
  });

  if (singleRecipe) {
    res.send(singleRecipe);
  } else {
    res.status(404).send("Recipe not found");
  }
});

// All the recipes for a chef
app.get("/chefrecipe/:chefID", (req, res) => {
  const chefID = req.params.chefID;
  const chef = data?.thai_chefs?.find((c) => c.id === parseInt(chefID));
  const chefRecipes = chef?.recipes;
  res.send(chefRecipes);
});

app.listen(port, () => {
  console.log(`API Server is running on port ${port}`);
});

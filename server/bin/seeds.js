const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

const User = require("../models/user");
const Recipe = require("../models/recipe");

///////// DATABASE RECIPES ////////////
const userData = {
  name: "Ombline",
  role: "Admin"
};

const recipeData = [
  {
    name: "Lasagnes 🍅🥕",
    imgPath: "/static/images/lasagna.jpg",
    ingredients: [
      "1/2 paquet de pâte à lasagne",
      "250g de viande de boeuf hâchée",
      "150g de chair à saucisses",
      "1 boîte de tomates en dés",
      "1 bouteille de purée de tomates",
      "1 oignon",
      "2 carottes",
      "Sel au céleri",
      "Huile d'olive",
      "Poivre",
      "Basilic",
      "Mozzarella",
      "Pour la béchamel: beurre, farine et lait"
    ],
    instructions: [
      "Hâcher finement l'oignon et les carottes",
      "Dans une cocotte, verser un fond d'huile d'olive et y ajouter le mélange, puis y ajouter toute la tomate",
      "Préparer une béchamel saupoudrée de muscade et la réserver",
      "Ajouter dans la cocotte la chair à saucisse et le boeuf, saler avec le sel au céleri et poivrer",
      "Après 20minutes de cuisson à feu moyen, disposer une couche de pâtes, une couche du mélange, une couche de béchamel, avec quelques feuilles de basilic entre chaque couche.",
      "Laisser cuire environ 40 min et recouvrir de mozzarella coupée en petits morceaux quelques minutes avant de servir."
    ],
    duration: "1h",
    tags: ["Facile"]
    // user: "Ombline"
  },
  {
    name: "Ratatouille 🍅🍆",
    imgPath: "/static/images/ratatouille.jpg",
    ingredients: [
      "3 aubergines",
      "6 oignons",
      "6 tomates",
      "Huile d'olive",
      "Sel",
      "1 oignon",
      "Poivre"
    ],
    instructions: [
      "Éplucher et découpez grossièrement les tomates et les oignons",
      "Découper grossièrement les aubergines",
      "Verser le tout dans un wok/marmite chaude avec une bonne quantité d'huile d'olive, poivre et sel",
      "Laisser mijoter à feu doux le plus longtemps possible, au moins une heure (plus c'est long, plus c'est bon!)"
    ],
    duration: "1h ++",
    tags: ["Facile", "Végétarien"]
    // user: "Ombline"
  }
];

Recipe.create(recipeData, (err, recipes) => {
  if (err) {
    throw err;
  }
  console.log("MONGO: " + recipes.length + " recipes created");
  mongoose.connection.close();
});

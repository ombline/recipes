const mongoose = require("mongoose");
require("dotenv").config();

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
    image: "/static/images/lasagna.jpg",
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
    image: "/static/images/ratatouille.jpg",
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
    duration: "1h",
    tags: ["Facile", "Végétarien"]
    // user: "Ombline"
  },
  {
    name: "Oeuf cocotte 🐣",
    image: "/static/images/oeufs-cocotte.jpg",
    ingredients: [
      "1 oeuf",
      "Crème fraîche",
      "Ciboulette",
      "Beurre",
      "Tomates séchées",
      "Fromage rapé",
      "Sel",
      "Poivre"
    ],
    instructions: [
      "Préchauffer le four à 220°C",
      "Verser deux cuillères de crème fraîche dans un ramequin",
      "Casser l'oeuf et le recouvrir d'une cuillère de crème fraîche",
      "Rajouter les tomates séchées coupées en dés, le gruyère, poivre sel et ciboulette",
      "Mettre au four pour 15 minutes"
    ],
    duration: "20 min",
    tags: ["Facile", "Rapide"]
    // user: "Ombline"
  },
  {
    name: "Quiche lorraine 🍕🥓",
    image: "/static/images/quiche-lorraine.jpg",
    ingredients: [
      "Pâte brisée",
      "200g de lardons",
      "30g de beurre",
      "3 oeufs",
      "20 cl de crême fraîche",
      "20 cl de lait",
      "Sel",
      "Poivre",
      "Muscade"
    ],
    instructions: [
      "Préchauffer le four à 180°C",
      "Etaler la pâte dans un moule,la piquer à la fourchette et parsemer de copeaux de beurre",
      "Faire rissoler les lardons à la poêle",
      "Battre les oeufs, la crème fraîche et le lait",
      "Ajouter les lardons et assaisoner de sel, poivre et muscade",
      "Verser sur la pâte",
      "Cuire 45 à 50 min"
    ],
    duration: "1h",
    tags: ["Facile"]
    // user: "Ombline"
  },
  {
    name: "Galette de blé noir",
    image: "/static/images/galette.jpg",
    ingredients: [
      "Galette de blé noir",
      "Jambon cru",
      "Beurre",
      "Fromage rapé",
      "1 oeuf",
      "Sel",
      "Poivre"
    ],
    instructions: [
      "Faire fondre une noisette de beurre dans une grande poêle",
      "Faire cuire le côté intérieur de la galette",
      "Retourner la galette et faire un puit avec le fromage et le jambon, puis casser l'oeuf à l'intérieur",
      "Assaisonner puis refermer la crêpe",
      "Cuire 10 minutes"
    ],
    duration: "15 min",
    tags: ["Facile", "Rapide"]
    // user: "Ombline"
  }
];

mongoose
  .connect(process.env.MONGODB_URI, { useMongoClient: true })
  .then(() => Recipe.remove({}))
  .then(() => Recipe.create(recipeData))
  .then(recipes => console.log(`Created ${recipes.length} recipes.`))
  .then(() => mongoose.connection.close())
  .catch(err => console.error(err));

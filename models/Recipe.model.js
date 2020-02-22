const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: { type: String, required: true },
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef '] },
  ingredients: { type: Array },
  cuisune: { type: String, required: true },

});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

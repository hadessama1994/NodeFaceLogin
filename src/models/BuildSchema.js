const {Schema, model} = require('mongoose');

let BuildSchema = new Schema({
  title: {type: String, required: true},
  charName: {type: String, required: true},
  weaponName: {type: String, required: true},
  weaponName2: {type: String},
  weaponName3: {type: String},
  artefactName: {type: String, required: true},
  artefactNameSub: {type: String, required: true},
  artefactNameSub2: {type: String, required: true},
  artefactNameSub3: {type: String, required: true},
  setNumber: {type: Boolean},
  artefactName2: {type: String}, 
  artefactName2Sub: {type: String},
  artefactName2Sub2: {type: String},
  artefactName2Sub3: {type: String}, 
  setNumber2: {type: Boolean},
  
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  }
})

const subStatus = new Schema({
  name: String,
})

module.exports = model ('Build', BuildSchema);

const {Schema, model} = require('mongoose');

let UserSchema = new Schema ({
  name: String,
  faceid: String,
  updated_at: { type: Date, default: Date.now },
})


module.exports = model ('User', UserSchema);

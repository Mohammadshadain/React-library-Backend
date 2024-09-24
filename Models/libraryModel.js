const { Schema, model } = require('../connection');

const Myschema = new Schema({
    name: String,
    packageName: { type: String, unique: true },
    version: { type: String, required: true },
    tags: { type: String },
    description: { type: String },
    image: String,
    updated: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('library', Myschema);
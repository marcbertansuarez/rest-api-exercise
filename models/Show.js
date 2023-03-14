const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new Schema ({
    title: String,
    creator: String,
    launched: Number,
    genre: String,
    image: String,
    description: String
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
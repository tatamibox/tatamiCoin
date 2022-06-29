const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    funding: {
        type: Number,
        required: true,
        min: 0
    }
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


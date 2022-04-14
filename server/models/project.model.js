// title, price, description

const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required"]
    },
    price: {
        type: Number,
        required: [true, "A price is required"]
    },
    description: {
        type: String,
        required: [true, "A description is required"]
    }
},
{timestamps: true})

const Project = mongoose.model("Project", ProjectSchema)

module.exports = Project;
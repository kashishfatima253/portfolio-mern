const mongoose = require('mongoose')

const ExperienceSchema = new mongoose.Schema({

})

const experiences = mongoose.model('experiences', ExperienceSchema)

module.exports = experiences
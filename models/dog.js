const { Double } = require("mongodb")
const mongoose = require("mongoose")
const dogsSchema = mongoose.Schema({
breed: String,
color: String,
cost:Number,
})
module.exports = mongoose.model("dog",dogsSchema)
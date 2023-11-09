const { Double } = require("mongodb")
const mongoose = require("mongoose")
const dogsSchema = mongoose.Schema({
style: String,
color: String,
price:Number,
})
module.exports = mongoose.model("dog",dogsSchema)

const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({

breed: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    
    validate: {
        validator: function (v) {
            return /^[a-zA-Z0-9_]+$/.test(v); 
        },
        message: props => `${props.value} is not a valid breed! Use only letters, numbers, and underscores.`,
    },
},
color: {
    type: String,
    validate: {
        validator: function(v) {
            return /^[a-zA-Z0-9_]+$/.test(v); 
        },
        message: props => `${props.value} is not a valid color! Use only letters, numbers, and underscores.`,
    },
},
cost: {
    type: Number,
    validate: {
        validator: function(v) {
            return v >= 0; 
        },
        message: props => `${props.value} is not a valid cost! cost must be a non-negative number.`,
    },
},
})
module.exports = mongoose.model("dog",dogSchema)

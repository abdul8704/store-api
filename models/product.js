const mongoose = require('mongoose');

const prodsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price'],
        default: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    manufactureDate: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    },

});

module.exports = mongoose.model('Product', prodsSchema);


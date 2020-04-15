var mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({

    vendorId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    products: [{
        productName: {
            type: String,
            required: true
        },
        productId: {
            type: String, // autoGen by Us.
            required: true
        },
        productBrand:{
            type: String,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        stockCnt: {
            type: Number,
            required: true
        },
        MRP: {
            type: Number
        }
    }]

});

module.exports = mongoose.model('Inventory',inventorySchema);

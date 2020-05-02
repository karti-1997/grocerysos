var mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    customerId: {
        type: String,
        required: true
    },
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
        unit: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        MRP: {
            type: Number
        },
        cost: {
            type: Number
        }
    }],
    amount : {
        type: Number
    },
    orderStatus:{
            type: String,
            required: true
    }
});

module.exports = mongoose.model('Order',orderSchema);
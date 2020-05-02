var mongoose = require('mongoose');


const Franchise = mongoose.model('Franchise',{

    franchiseId: {
        type: String, // autoGen by Us.
        required:true
    },
    pinCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    franchiseName: {
        type: String,
        required: true
    },
    createdBy: {
        type: String, // SuperAdmin
        required: true
    },
    managedBy:{
        type: String, // Added by Super Admin once.
    },
    franchiseAdmins: [{
        type:  String //FranchiseAdmin
    }]

},'Franchise')




module.exports = { Franchise };
const express = require('express');

const Vendor = require('../model/vendor');

var router = express.Router();

 router.post("",(req, res, next) => {
     console.log("Iam at vendor");
     console.log(req.body.storeName);
  const vendor = new Vendor({
      vendorId: req.body.vendorId,
      storeName: req.body.storeName,
      fname: req.body.fname,
      lname: req.body.lname,
      address:[{careOf:req.body.address[0].careOf,
      doorNo:req.body.address[1].doorNo,
      addressLine1:req.body.address[2].addressLine1,
      city:req.body.address[3].city,
      district:req.body.address[4].district,
      pincode:req.body.address[5].pincode,
      country:req.body.address[6].country}],
      contact: [{whatsApp:req.body.contact[0].whatsApp,mobile:req.body.contact[1].mobile}],
      createdBy: 'franchiseid',
      deliveryWindow: req.body.deliveryWindow,
      pickupWindow:req.body.pickupWindow,
  });

  vendor.save().then(createdVendor =>{
    res.status(201).json({
      message: 'Vendor added Successfully',
      vendorId: createdVendor._id
    });
  });

});

module.exports = router;

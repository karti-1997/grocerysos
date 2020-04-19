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
      id: createdVendor._id
    });
  });

});

router.get('',(req,res,next)=>{
  Vendor.find().then(documents => {
    res.status(200).json({
      message: 'Vendors fetched successfully',
      vendors: documents
    });
  });
});
router.get("/:id", (req, res, next) => {
  Vendor.findById(req.params.id).then(vendor => {
    if (vendor) {
      res.status(200).json(vendor);
    } else {
      res.status(404).json({ message: "Vendor not found!" });
    }
  });
});

router.put("/:id",(req, res, next) => {
    
    const vendor = new Vendor({
      _id: req.params.id,
      vendorId: req.body.vendorId,
      storeName: req.body.storeName,
      fname: req.body.fname,
      lname: req.body.lname,
      address:[{careOf:req.body.address[1].careOf,
      doorNo:req.body.address[2].doorNo,
      addressLine1:req.body.address[3].addressLine1,
      city:req.body.address[4].city,
      district:req.body.address[5].district,
      pincode:req.body.address[6].pincode,
      country:req.body.address[7].country}],
      contact: [{whatsApp:req.body.contact[1].whatsApp,mobile:req.body.contact[2].mobile}],
      createdBy: 'franchiseid',
      deliveryWindow: req.body.deliveryWindow,
      pickupWindow:req.body.pickupWindow,
    });
    console.log(vendor);
    console.log(req.params.id);
    Vendor.updateOne({ _id: req.params.id }, vendor).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);
module.exports = router;

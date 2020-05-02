const express = require("express");
const Inventory = require("../model/inventory");
const Order = require("../model/order");
const router = express.Router();

router.get("/:productCategory", (req, res, next) => {
  console.log(req.params.productCategory+"from backend");
  Inventory.find({productCategory:req.params.productCategory}).then(documents => {
    res.status(200).json({
      message: "Inventory fetched successfully based on category!",
      inventories: documents
    });
  });
});

router.get("", (req, res, next) => {
    Inventory.distinct('productCategory').then(documents => {
      res.status(200).json({
        message: "Categories fetched successfully!",
        categories: documents
      });
    });
  });

  router.post("",(req, res, next) => {
    console.log("Iam at order");
    console.log(req.body);
    const order = new Order({
      customerId:req.body.customerId,
      vendorId: req.body.vendorId,
      products: req.body.products,
      amount : req.body.amount,
      orderStatus: req.body.orderStatus
 });
 order.save().then(createdorder =>{
   res.status(201).json({
     message: 'order submitted Successfully',
   });
 });
 
});

router.get("/fetch/:vid", (req, res, next) => {
  Order.find({vendorId:req.params.vid}).then(documents => {
    res.status(200).json({
      message: "orders fetched successfully based on vendorId!",
      orders: documents
    });
  });
});


router.put("/:id",(req, res, next) => {
  const order = new Order({
    _id:req.params.id,
    customerId:req.body.customerId,
    vendorId: req.body.vendorId,
    products: req.body.products,
    amount : req.body.amount,
    orderStatus: req.body.orderStatus
});
    console.log(order);
    Order.updateOne({ _id: req.params.id }, order).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);
module.exports = router;

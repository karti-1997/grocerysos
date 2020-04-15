const express = require('express');

const Vendor = require('../model/vendor');

var router = express.Router();
/*var ObjectId = require('mongoose').Types.ObjectId;
var { Question } = require('../models/question');

router.get('/',(req,res) => {
  Question.find((err, docs) => {
    if(!err){ res.send(docs); }
    else {
      console.log('Error in Retriving');
    }
  });
});
router.get('/:id',(req,res) => {
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No such id:', $[req.params.id]);
  Question.findById(req.params.id,(err,doc) => {
    if(!err) { res.send(doc);}
    else{ console.log('Error in retriving by Id');}
  });
});

router.post('/', (req,res)=>{
  var quest = new Question({
    title: req.body.title,
  question: req.body.question,
  option1: req.body.option1,
  option2: req.body.option2,
  option3: req.body.option3,
  option4: req.body.option4,
  correctanswer: req.body.correctanswer
  });
  quest.save((err,doc) => {
    if(!err){ res.send(doc); }
    else { console.log("Error in question save");}
  });
});

router.put('/:id',(req,res) => {
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record');

  var quest = {
  title: req.body.title,
  question: req.body.question,
  option1: req.body.option1,
  option2: req.body.option2,
  option3: req.body.option3,
  option4: req.body.option4,
  correctanswer: req.body.correctanswer
  };
  Employee .findByIdAndUpdate(req.params.id, {$set: quest}, {new: true}, (err,doc) =>{
    if(!err){ res.send(doc); }
    else {console.log('Error in update');}
  });
});

router.delete('/:id',(req,res) => {
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record with given id:');

  Question.findByIdAndRemove(req.params.id, (err,doc) => {
    if(!err) { res.send(doc); }
    else{ console.log('Error in Employee Delete');}
  });
 });*/

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

/*router.get('',(req,res,next)=>{
  Question.find().then(documents => {
    // console.log(documents);
    res.status(200).json({
      message: 'Questions fetched successfully',
      questions: documents
    });
  });
});

router.get('/:id',(req, res, next)=>{
  Question.findById(req.params.id).then(question => {
    if(question){
      res.status(200).json(post);
    }else{
      res.status(404).json({message: "NOT FOUND"});
    }
  });
});

router.delete("/:id",(req,res,next) =>{
 // console.log(req.params.id);
 Question.deleteOne({_id: req.params.id}).then(result => {
   console.log(result);
 });
 res.status(200).json({message: 'Question Deleted!'});
});*/
module.exports = router;

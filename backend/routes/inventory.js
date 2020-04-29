const express = require("express");
//const multer = require("multer");

const Inventory = require("../model/inventory");
const router = express.Router();

/*const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "application/pdf": "pdf"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});*/

/*router.post(
  "",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      imagePath: url + "/images/" + req.file.filename
    });
    post.save().then(createdPost => {
     // res.send(file);
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdPost,
          id: createdPost._id
        }
      });
    });
  }
);*/

router.post("",(req, res, next) => {
    console.log("Iam at add Inventory to DB");
      const inventory = new Inventory({
        vendorId: req.body.vendorId,
        productId: req.body.productId,
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productCategory: req.body.productCategory,
        unit: req.body.unit,
        Description: req.body.Description,
        stockCnt: req.body.stockCnt,
        MRP: req.body.MRP
      });
      inventory.save().then(createdInventory => {
       // res.send(file);
        res.status(201).json({
          message: "Post added successfully",
          inventory: {
            ...createdInventory,
            id: createdInventory._id
          }
        });
      });
    }
  );
  

router.put("/:id",(req, res, next) => {
  const inventory = new Inventory({
    _id: req.params.id,
    vendorId: req.body.vendorId,
    productId: req.body.productId,
    productName: req.body.productName,
    productBrand: req.body.productBrand,
    productCategory: req.body.productCategory,
    unit: req.body.unit,
    Description: req.body.Description,
    stockCnt: req.body.stockCnt,
    MRP: req.body.MRP
  });
    console.log(inventory);
    Inventory.updateOne({ _id: req.params.id }, inventory).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);

router.get("/:vendorID", (req, res, next) => {
  console.log(req.params.vendorID+"from backend");
  Inventory.find({vendorId:req.params.vendorID}).then(documents => {
    res.status(200).json({
      message: "Vendors fetched successfully!",
      inventories: documents
    });
  });
});

/*router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});*/

module.exports = router;

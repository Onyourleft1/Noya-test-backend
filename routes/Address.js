const express = require("express");
const router = express.Router();
const controller = require("../controllers/Address");

router.get("/get", controller.get);
router.post("/create", controller.create);
router.patch("/update", controller.update);
router.delete("/delete/:id", controller.delete);
router.get("/find", controller.find);
router.get("/find?address", controller.find);
module.exports = router;

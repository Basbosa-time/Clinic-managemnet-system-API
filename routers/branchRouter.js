const express = require("express");
const { body, param, query } = require("express-validator");
const controller = require("../controllers/branchController");

const router = express.Router();

router
  .get("", controller.getAllBranches)
  .post(
    "",
    [
      body("name")
        .isString()
        .notEmpty()
        .withMessage("name should be string and not empty"),
      body("location")
        .isString()
        .notEmpty()
        .withMessage("name should be string and not empty"),
    ],
    controller.createBranch
  );
router.get(
  "/:serviceId",
  [
    param("serviceId")
      .isAlphanumeric()
      .withMessage("serviceId should be alphanumeric"),
  ],
  controller.getServiceBranches
);
module.exports = router;

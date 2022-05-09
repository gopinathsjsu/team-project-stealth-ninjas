const express = require("express");
const router = express.Router();
const session = require("express-session");
var mysql = require("mysql");

var cors = require("cors");
const { check, validationResult } = require("express-validator");

router.use(cors());
const User = require("../../models/User");
const e = require("express");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

var connection = mysql.createConnection({
  host: "database-1.cerbnelrueyi.us-east-1.rds.amazonaws.com",
  database: "202_team_project",
  port: "3306",
  user: "admin",
  password: "password",
});


//admin adding a hotel
router.post("/addhotel", [], async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    //res.send(errors.code);
    return res.status(500).json({ errors: errors.array() });
  }
  const {
    hotel_name,
    hotel_addr,
    hotel_phone,
    city,
    summary,
    description,
    hotelbaseprice,
    image,
  } = req.body;
  try {
    connection.query(
      `INSERT INTO hotel(hotel_name, hotel_addr, hotel_phone,city,summary,description,hotelbaseprice,image) values(?,?,?,?,?,?,?,?)`,
      [
        hotel_name,
        hotel_addr,
        hotel_phone,
        city,
        summary,
        description,
        hotelbaseprice,
        image,
      ],
      function (error, results) {
        if (error) {
          //res.send(error.code);
          res.status(400).json("failure");
        } else {
          res.json({
            success: true,
          });
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    res.send("database error");
  }
});
module.exports = router;
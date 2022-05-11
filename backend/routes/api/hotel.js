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

// customer searching for available hotels in a city along with his dates of stay.
router.get("/gethotels", [], async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    //res.send(errors.code);
    return res.status(500).json({ errors: errors.array() });
  }
  const { city, start_date, end_date } = req.query;
  try {
    connection.query(
      `select * from  hotel where hotel.city=? and hotel.hotel_id in (select hotel_id from room  where room.room_id not in 
            (select room_id from reservation where start_date between ? and ? or end_date between ? and ?))`,
      [city, start_date, end_date, start_date, end_date],
      function (error, results) {
        if (results && results.length !== 0) {
          res.status(200).json({ success: true, data: results });
        } else {
          res.send("no hotels found");
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
});

module.exports = router;

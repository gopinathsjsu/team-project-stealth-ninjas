const express = require("express");
const router = express.Router();
const session = require("express-session");
let mysql = require("mysql");

let cors = require("cors");
const { check, validationResult } = require("express-validator");

router.use(cors());
const User = require("../../models/User");
const e = require("express");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const { checkAuth, auth } = require("../../utils/passport");

auth();

let connection = mysql.createConnection({
  host: "database-1.cerbnelrueyi.us-east-1.rds.amazonaws.com",
  database: "202_team_project",
  port: "3306",
  user: "admin",
  password: "password",
});

// insert the records into reservation table once user hits the book button
router.post("/bookrooms", checkAuth, (req, res) => {
  console.log(req.user);
  let cust_email = req.user[0].cust_email;
  console.log("email", cust_email);
  console.log(req.body);
  let {
    hotel_id,
    booking_date,
    start_date,
    end_date,
    amount,
    numberofguests,
    roomtypename,
  } = req.body;
  try {
    connection.query(
      `select room_id from room where room.hotel_id=? and room.room_id not in (select room_id from reservation where start_date between ? and ? or 
        end_date between ? and ?) and room.roomtypename=? LIMIT 1`,
      [hotel_id, start_date, end_date, start_date, end_date, roomtypename],
      function (error, results) {
        console.log(results);
        if (results.length !== 0) {
          let room_id = results[0].room_id;
          console.log(room_id, "room id");
          connection.query(
            `INSERT INTO reservation(hotel_id,cust_email,room_id,roomtypename,booking_date,start_date,end_date,amount,numberofguests) values(?,?,?,?,?,?,?,?,?)`,
            [
              hotel_id,
              cust_email,
              room_id,
              roomtypename,
              booking_date,
              start_date,
              end_date,
              amount,
              numberofguests,
            ],
            function (error1, results1) {
              if (error1) {
                console.log(error1);
                res.send("failure");
              } else {
                res.end("success");
              }
            }
          );
        } else {
          res.send("hw server error");
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    res.send("server error");
  }
});

module.exports = router;

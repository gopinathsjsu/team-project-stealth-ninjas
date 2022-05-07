import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
// import DatePicker from "react-datepicker";
import BookingCard from "./BookingCard";
import { getBookings } from "../utils";
import { useNavigate } from 'react-router-dom';
// import "react-datepicker/dist/react-datepicker.css";
//Define a Home Component
export function Bookings() {

    const dispatch = useDispatch();
    const bookingsData = useSelector((state) => state.bookings.data);
    const navigate = useNavigate();

    useEffect(() => {
        getBookings(dispatch)
    }, [])

    // const openHotel = (dispatch, {id}) => {
    //     navigate(`/hotel/${id}`);
    // }
    
    return (
        <div className="container" style={{marginTop: '10px'}}>
            <h4>Bookings</h4>
            {bookingsData &&
                <Row>
                {
                    bookingsData.map(booking => <BookingCard key={booking.id} {...booking} />)
                }
                </Row>
            }
        </div>
    )
}
export default Bookings;
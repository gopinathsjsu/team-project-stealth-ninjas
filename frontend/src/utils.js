import { handleLoginResponse, setToast, handleCountriesResponse } from './actions/app-actions';
import { handleHotelsResponse } from './actions/app-hotels';
import { handleBookingsResponse } from './actions/app-bookings';
import { handleHotelDetailsResponse } from './actions/app-hotel-details';

// import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export function register(dispatch, data, callback) {
    // const navigate = useNavigate();
    // dispatch(profileLoading());
    axios.post(`/signup`, data)
        .then(response => {
            const {data} = response;
            if (data.success) {
                console.log('Registration success');
                return callback(null, true);
                // navigate('login');
            } else {
                return callback(true);
                console.log('Registration failure');
            }
        });
}

export function checkSession(dispatch) {
    axios.get('/api/session')
        .then(response => {
            dispatch(handleLoginResponse(response));
        })
        .catch(err => {
            // console.log(err.message);
        });
}

export function getHotels(dispatch) {
    axios.get('/api/hotels')
        .then(response => {
            dispatch(handleHotelsResponse(response));
        })
        .catch(err => {
            // console.log(err.message);
        });
}

export function getBookings(dispatch) {
    axios.get('/api/bookings')
        .then(response => {
            dispatch(handleBookingsResponse(response));
        })
        .catch(err => {
            // console.log(err.message);
        });
}

export function getHotelDetails(dispatch, id) {
    axios.get(`/api/hotels/${id}`)
        .then(response => {
            dispatch(handleHotelDetailsResponse(response));
        })
        .catch(err => {
            // console.log(err.message);
        });
}
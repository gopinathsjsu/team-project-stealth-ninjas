import { combineReducers } from 'redux';

import appReducer from './appReducer';
import hotelReducer from './hotelReducer';
import hotelDetailsReducer from './hotelDetailsReducer';
import bookingsReducer from './bookingReducer';

const rootReducer = combineReducers({
  app: appReducer,
  hotels: hotelReducer,
  hoteldetails: hotelDetailsReducer,
  bookings: bookingsReducer
})

export default rootReducer
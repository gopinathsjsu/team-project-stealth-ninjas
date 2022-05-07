import React, { useEffect } from 'react';
import { Row, Col, Form, Button, Image, Table } from 'react-bootstrap';
import {getHotelDetails} from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//Define a HotelDetails Component
export function HotelDetails() {

    const dispatch = useDispatch();
    const urlParams = useParams();
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    const hotelDetails = useSelector((state) => state.hoteldetails.data);
    const { hotelID } = urlParams;

    useEffect(() => {
        getHotelDetails(dispatch, hotelID)
    }, [])

    return (
        <div className="container" style={{marginTop: '10px'}}>
            {hotelDetails ? 
                <Row>
                    <Row>
                        <Col xs={4}>
                            <Image src={hotelDetails.image_url} width="400" />
                        </Col>
                        <Col xs={8}>
                            <h5 className="property_title">{hotelDetails.name}</h5>
                            <p className="property_location">{hotelDetails.location}</p>
                            <p>{hotelDetails.description}</p>
                            <p>{hotelDetails.write_up}</p>
                            <p>Amenities along with their icons will come here</p>
                        </Col>
                    </Row>
                    <Row className="room_details">
                        <p>Room details will be displayed here</p>
                        <Table responsive>
                          <thead>
                            <tr>
                                <th>Room Type</th>
                                <th>Max Persons</th>
                                <th>Price</th>
                                <th>Select Rooms</th>
                                <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                hotelDetails.room_details && hotelDetails.room_details.map(rd => <tr>
                                    <td>
                                        <p style={{fontWeight: 'bold'}}>{rd.type}</p>
                                        <p className="room_desc">{rd.description}</p>
                                        <p className="room_text">Only {rd.availableNos} rooms available</p>
                                    </td>
                                    <td>
                                        {
                                            Array.from({ length: Number(rd.maxPersons) }).map(() => <FaUser />)
                                        }
                                    </td>
                                    <td>{rd.price}</td>
                                    <td>
                                        <Form.Select aria-label="Guest count">
                                          <option>Guest count</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                          <option value="4">Four</option>
                                          <option value="5">Five</option>
                                          <option value="6">Six</option>
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Button variant="primary" style={{float: 'right'}}>Book</Button>
                                    </td>
                                </tr>)
                            }
                          </tbody>
                        </Table>
                    </Row>
                </Row> : ''
            }
        </div>
    )
}
export default HotelDetails;
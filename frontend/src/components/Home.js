import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import PropertyCard from "./PropertyCard";
import { getHotels, getShortDate } from "../utils";
import { useNavigate } from 'react-router-dom';
import { Country, State, City }  from 'country-state-city';
import { Typeahead } from 'react-bootstrap-typeahead';
import "react-datepicker/dist/react-datepicker.css";
//Define a Home Component
export function Home() {

    const dispatch = useDispatch();
    const [searchForm, setSearchForm] = useState({
        place: '',
        startDate: new Date(),
        endDate: new Date()
    });
    const [state, setState] = useState([
        {
            "name": "California",
            "isoCode": "CA",
            "countryCode": "US",
            "latitude": "36.77826100",
            "longitude": "-119.41793240"
        }
    ]);
    const [value, setValue] = useState([
        {
            "name": "San Jose",
            "countryCode": "US",
            "stateCode": "CA",
            "latitude": "37.33939000",
            "longitude": "-121.89496000"
        }
    ]);
    const [cities, setCities] = useState([]);
    const hotelsData = useSelector((state) => state.hotels.data);
    const loading = useSelector((state) => state.hotels.loading);
    const navigate = useNavigate();

    useEffect(() => {
        submit();
        setCities(City.getCitiesOfState('US', 'CA'));
    }, [])

    const openHotel = (dispatch, {hotel_id}) => {
        const {startDate, endDate} = searchForm;
        navigate(`/hotel/${hotel_id}?startDate=${getShortDate(startDate)}&endDate=${getShortDate(endDate)}`);
    }

    const submit = () => {
        console.log(searchForm);
        const [lclcity] = value;
        const [stateValue] = state;
        const temp = {
            ...searchForm,
            place: lclcity.name
        };
        // place lowercase joining must be removed later
        getHotels(dispatch, temp);
    }

    const onFormChange = (e) => {
        const fieldName = e.target.getAttribute('id');
        const tempForm = {...searchForm};
        tempForm[fieldName] = e.target.value;
        setSearchForm(tempForm);
    }

    const onStateChange = (selected) => {
        setState(selected);
        console.log(selected);
        const [state] = selected;
        if (!state || !state.countryCode || !state.isoCode) {
            return;
        }
        setCities(City.getCitiesOfState(state.countryCode, state.isoCode));
    }
    // console.log(City.getAllCities())
    // console.log(State.getAllStates())

    return (
        <div className="home container">
            <Row className="top_filter">
                <Col xs={3}>
                    <Typeahead
                      id="city"
                      onChange={selected => {
                        setValue(selected)
                      }}
                      labelKey={option => `${option.name}`}
                      options={cities}
                      selected={value}
                    />
                </Col>
                <Col xs={3}>
                    <Typeahead xs={1}
                      id="state"
                      onChange={onStateChange}
                      labelKey={option => `${option.name} ${option.countryCode}`}
                      options={State.getAllStates()}
                      selected={state}
                    />
                </Col>
                <Col xs={2}>
                    <DatePicker className="form-control" selected={searchForm.startDate} onChange={(date:Date) => setSearchForm({...searchForm, startDate: date})} />
                </Col>
                <Col xs={2}>
                    <DatePicker className="form-control" selected={searchForm.endDate} onChange={(date:Date) => setSearchForm({...searchForm, endDate: date})} />
                </Col>
                <Col xs={2}>
                    <Button variant="outline-primary" style={{width: '100%'}} onClick={() => submit()}>Submit</Button>
                </Col>
            </Row>
            <Row>
                {/*
                    <Col xs={2}>
                        <p>other filters will come here</p>
                    </Col>
                */}
                {
                    loading ? <Spinner animation="border" size="lg" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner> : 
                        <>
                            <Row>
                                { hotelsData ? <p style={{marginBottom: '5px'}} >{hotelsData.length} properties found</p> : 
                                    <p style={{marginBottom: '5px'}} >No properties found</p>
                                }
                            </Row>
                            <Col>
                                {
                                    hotelsData && hotelsData.map(hotel => <PropertyCard key={hotel.hotel_id} {...hotel} fn={{openHotel}}/>)
                                }
                            </Col>
                        </>
                }
                
            </Row>
        </div>
    )
}
export default Home;
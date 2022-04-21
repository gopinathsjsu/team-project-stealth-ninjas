import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import PropertyCard from "./PropertyCard";
import "react-datepicker/dist/react-datepicker.css";
//Define a Home Component
export function Home() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="home container">
            <Row className="top_filter">
                <Col xs={4}>
                    <Form.Control placeholder="Select Place" />
                </Col>
                <Col xs={2}>
                    <DatePicker className="form-control" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </Col>
                <Col xs={2}>
                    <DatePicker className="form-control" selected={endDate} onChange={(date:Date) => setEndDate(date)} />
                </Col>
                <Col xs={2}>
                    <Form.Select aria-label="Default select example">
                      <option>Guest count</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                      <option value="6">Six</option>
                    </Form.Select>
                </Col>
                <Col xs={2} style={{textAlign: 'right'}}>
                    <Button variant="outline-primary">Submit</Button>
                    <Button variant="outline-secondary" style={{marginLeft: '10px'}}>Clear</Button>
                </Col>
            </Row>
            <Row>
                {/*
                    <Col xs={2}>
                        <p>other filters will come here</p>
                    </Col>
                */}
                <Row>
                    <p style={{marginBottom: '5px'}} >4 properties found</p>
                </Row>
                <Col>
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </Col>
            </Row>
        </div>
    )
}
export default Home;
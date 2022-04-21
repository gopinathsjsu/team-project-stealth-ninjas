import { Row, Col, Form, Button, Card, Image } from 'react-bootstrap';

export default function PropertyCard() {
	return (
		<Card className="property_card">
          <Card.Body>
            <Row>
            <Col xs={2}>
                <Image src="https://t-cf.bstatic.com/xdata/images/hotel/square600/130456384.webp?k=b8cf7d16bdf688ba5549c22ebe1a4b59484f2f9aa59fc88d1d42952c696133e2&o=&s=1" width="150" />
            </Col>
            <Col xs={10}>
                <Card.Title class="property_title">Ninja Red Grape Castle</Card.Title>
                <Card.Subtitle className="mb-2 text-muted property_location">North 2nd Street, San Jose</Card.Subtitle>
                <Card.Text>
                  Located at the prime location of San Jose, the property has brilliant amenities with Starbucks and Subway chains nearby.
                </Card.Text>
                <Row style={{textAlign: 'right'}}>
                    <Col>
                        <Button variant="primary">Reserve</Button>
                        {/*
                            <Button variant="danger" className="nav-buttons">Favourite</Button>
                        */}
                    </Col>
                </Row>
            </Col>
            </Row>
          </Card.Body>
        </Card>
	);
}
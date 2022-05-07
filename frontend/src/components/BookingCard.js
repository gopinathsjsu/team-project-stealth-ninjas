import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function BookingCard(property) {

	const dispatch = useDispatch();
	const processClicks = (e, dispatch, functionName, params) => {
        e.stopPropagation();
        const {fn} = property;
        if (fn && fn[functionName] && dispatch) {
            fn[functionName](dispatch, params.id, params.data);
        }
    };

	return (
		<Card className="property_card">
          <Card.Body>
            <Row>
            <Col xs={1}>
                <Image src={property.image_url} width="100" />
            </Col>
            <Col xs={11} style={{paddingLeft: '25px'}}>
                <Card.Title className="property_title" onClick={(e) => processClicks(e, dispatch, 'openHotel', { id: property })}>{property.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted property_location">{property.location}</Card.Subtitle>
                <Card.Text style={{fontSize: '12px', marginBottom: '0px'}}>
                  {property.startDate} - {property.endDate}
                </Card.Text>
                <Row style={{textAlign: 'right'}}>
                    <Col style={{margin: '0', padding: '0'}}>
                        <Button variant="warning" className="nav-buttons">Modify</Button>
                        <Button variant="danger" className="nav-buttons">Cancel</Button>
                    </Col>
                </Row>
            </Col>
            </Row>
          </Card.Body>
        </Card>
	);
}
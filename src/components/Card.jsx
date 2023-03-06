import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Card.css'

const Cards = (props) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
      {props.currentCards.map((item) => (
        <Col>
          <Link to={'/recipe/'+item.id}>
            <Card className="d-inline-block" style={{ width: "75%" }} key={item.id}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>

  );
};
export default Cards;

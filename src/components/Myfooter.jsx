import Row from "react-bootstrap/Row"; import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const Myfooter = () => {
  return (
    <Container fluid  className="fixed-bottom">
      <Row className="bg-dark text-white border-top border-1 border-white py-3">
     <Col xs={12} className="text-center" > &copy; 2023-Copyright {new Date().getFullYear()}</Col>
      <Col className="text-white-50 text-center" xs={12}>
         Adorni Riccardo 
      </Col>
      </Row>
    </Container>
  );
};
export default Myfooter;
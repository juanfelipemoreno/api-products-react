import {Spinner, Row,Col} from 'react-bootstrap';

function LoadComp() {
  return (
  <>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <Row>
      <Col>Cargando...</Col>
    </Row>
  </>
  );
}

export default LoadComp;
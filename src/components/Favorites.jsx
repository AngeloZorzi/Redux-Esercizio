import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFavourite } from "../redux/reducer/index";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.companies);
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Aziende Preferite</h1>
          {favourites.length === 0 ? (
            <p>Nessuna azienda nei preferiti.</p>
          ) : (
            favourites.map((company) => (
              <Row
                key={company}
                className="align-items-center my-2 p-2"
                style={{ border: "1px solid #ccc", borderRadius: 4 }}
              >
                <Col xs={8}>
                  <Link to={`/${company}`}>{company}</Link>
                </Col>
                <Col xs={4} className="text-end">
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFavourite(company))}
                  >
                    Rimuovi dai preferiti
                  </Button>
                </Col>
              </Row>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

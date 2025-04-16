import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.companies);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Aziende Preferite</h1>
          {favourites.length === 0 ? (
            <p>Nessuna azienda nei preferiti.</p>
          ) : (
            favourites.map((company) => (
              <div
                key={company}
                style={{ padding: "10px 0", borderBottom: "1px solid #ccc" }}
              >
                <Link to={`/${company}`}>{company}</Link>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/reducer/index";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.companies);

  const isFavourite = favourites.includes(data.company_name);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(data.company_name));
    } else {
      dispatch(addFavourite(data.company_name));
    }
  };

  return (
    <div className="job-card">
      <Row>
        <Col xs={8}>
          <Link className="job-company" to={`/${data.company_name}`}>
            {data.company_name}
          </Link>
          <br />
          <a
            className="job-title"
            href={data.url}
            target="_blank"
            rel="noreferrer"
          >
            {data.title}
          </a>
        </Col>
        <Col xs={4} className="job-actions">
          <Button
            variant={isFavourite ? "danger" : "primary"}
            onClick={toggleFavourite}
          >
            {isFavourite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Job;

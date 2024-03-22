import { useEffect, useState } from "react";
import { Container, Form, Row, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ApyKey = "d761f2472b0664049b1db91100065978";

const Home = () => {
  const [searchData, setWeatherData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    navigate(`/weatherDetails/${city.name}`, { state: { city } });
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (searchValue.trim() !== "") {
          let resp = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${ApyKey}`
          );
          if (resp.ok) {
            let data = await resp.json();
            console.log(data);
            setWeatherData(data);
          } else {
            console.log("error fetching search weather");
          }
        } else {
          setWeatherData([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
  }, [searchValue]);

  return (
    <Container className="d-flex flex-column flex-grow-1">
      <h3 className="mt-4">City Name:</h3>
      <Row className="justify-content-center">
        <Col xs={11} md={8} lg={6}>
          <Form.Group>
            <Form.Control
              className="p-1 fs-5 shadow-sm"
              type="search"
              placeholder="Search City..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={11} md={8} lg={6}>
          <ListGroup className="mt-3">
            {searchData.length > 0 &&
              searchData.map((city, index) => (
                <ListGroup.Item key={`city-${index}`} onClick={() => handleCityClick(city)}>
                  {city.name}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
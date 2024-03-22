import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link, useLocation } from "react-router-dom";


const ApiKey = "d761f2472b0664049b1db91100065978";

const Details = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const city = location.state ? location.state.city : null;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (city) {
          setLoading(true);
          let resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${ApiKey}&units=metric`
          );
          if (resp.ok) {
            let data = await resp.json();
            console.log(data);
            setWeatherData(data);
            setLoading(false);
          } else {
            console.log("error fetching weather");
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (city) {
      fetchWeather();
    }
  }, [city]);

  return (
    <Container  className="py-5">
      <Row>
        <Col>
          <Card className="border-0  rounded">
            {loading ? (
              <div className="text-center m-3 border-0 rounded-0 ">
                <Spinner animation="border" variant="danger" role="status" className="fs-4 text-center"></Spinner>
              </div>
            ) : weatherData ? (
              <div>
                <Card.Body className="text-start  shadow-lg p-3  border-0 ">
                  <Card.Title className="fs-2 ps-2 p-1">
                    {weatherData.name} , {weatherData.sys.country}
                  </Card.Title>
                  <div className="d-flex justify-content-center ms-md-4">
                    <img
                      className="border rounded-pill mb-2 mt-3 "
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                      alt="img"
                    ></img>
                  </div>
                  <Card.Text className="fs-3 text-center  my-1 fw-bold  ">
                    {weatherData.weather[0].main.toUpperCase()}
                  </Card.Text>
                  <Row className="flex-column-reverse ">
                    <Col>
                      <Card.Text className="fs-5 text-center my-5">
                        Temperatura {weatherData.main.temp}°C
                        <Card.Text className="fs-6  text-center text-secondary m-0">
                          Max Temp. {weatherData.main.temp_max} °C
                        </Card.Text>
                        <Card.Text className="fs-6 text-center text-secondary m-0">
                          Min Temp. {weatherData.main.temp_min} °C
                        </Card.Text>
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="fs-5 text-center">
                        {weatherData.weather[0].description}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <Col>
                     humidity: {weatherData.main.humidity} 
                     </Col>
                  </Row>
                </Card.Body>
              </div>
            ) : null}
          </Card>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-3">
        <Link to={"/"}>
          <Button  className="text-white btn btn-dark ">
            Return city search
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Details;
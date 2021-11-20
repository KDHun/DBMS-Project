import { Carousel } from "react-bootstrap";
function Image1(){
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/950x400/?education,science"
      alt="Education is Mother of Leadership"
    />
    <Carousel.Caption>
      <h3>Learn from the best</h3>
      <p>Education is Mother of Leadership</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/951x400/?education,science"
      alt="An Investment in Knowledge pays the best Intrest"
    />

    <Carousel.Caption>
      <h3>Make your Future here...!</h3>
      <p>An Investment in Knowledge pays the best Intrest</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/949x400/?education,science"
      alt="Learn Today  Lead Tomorrow"
    />

    <Carousel.Caption>
      <h3>Learning is Easy Now</h3>
      <p>Learn Today  Lead Tomorrow</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
}
export default Image1;

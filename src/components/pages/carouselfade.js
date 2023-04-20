import Carousel from 'react-bootstrap/Carousel';
import SlideOne from './media/april01a.jpg';
import SlideTwo from './media/april02a.jpg';
import SlideThree from './media/april03a.jpg';
function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Los Angeles City - Bureau of Engineering</h3>
          <p>The Bureau of Engineering currently has more than 400 active projects and delivers more than 100 projects each year!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {SlideTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>UCLA Samueli - Civil &amp; Environmental Engineering</h3>
          <p>Civil and Environmental Engineers are responsible for the infrastructure that provides clean water to drink, clean air to breathe, and safe buildings to live and work in.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>CSULA - COLLEGE OF ENGINEERING, COMPUTER SCIENCE & TECHNOLOGY</h3>
          <p>
          In the College of Engineering, Computer Science, and Technology, you will tackle the pressing problems of today and tomorrow in areas such as robotics, sustainability, energy, water, transportation, and emergency preparedness.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
import React, { Component, useState } from 'react';
import '../CSS/Home.css';
import Navigation from '../Navigation';
import Carousel from "react-bootstrap/Carousel";
import Image1 from '../Images/bannerImages/Banner6.jpg'
import Image2 from '../Images/bannerImages/Banner2.jpg'
import Image3 from '../Images/bannerImages/Banner3.jpg'
// import Card from '../File/Card';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
      <Carousel.Item>
        <img
          style={{ height: "auto", width: "100%" }}
          src={Image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "auto", width: "100%" }}
          src={Image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "auto", width: "100%" }}
          src={Image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default class Home extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     TypeState: ''
  //   }
  // }

  // componentDidMount = () => {
  //   const actTypes = localStorage.getItem('actType');
  //   if (actTypes === '1') {
  //     this.setState({
  //       TypeState: actTypes
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <Navigation />
        <ControlledCarousel />

        <section>
          {/* <div>
          <Card/>
            </div> */}
        </section>

      </div>
    );
  }
}




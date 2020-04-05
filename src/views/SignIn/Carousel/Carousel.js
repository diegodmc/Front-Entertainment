import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first from './images/first.png';
import second from './images/second.png';
import three from './images/three.png';
import four from './images/four.png';
class Slider extends Component {
    render() {
        return (
            <Carousel infiniteLoop ={true} autoPlay={true} showStatus ={false} showThumbs={false} dynamicHeight={true}>
                <div >
                    <img src={first} />
                </div>
                <div>
                    <img src={second} />
                </div>
                <div>
                    <img src={three} />
                </div>
                <div>
                    <img src={four} />
                </div>
            </Carousel>
        );
    }
};
export default withRouter(Slider);

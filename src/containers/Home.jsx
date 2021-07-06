import { Carousel } from "react-bootstrap";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>HOME EN CONSTRUCCION</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/business-hand-with-mobile-phone_1232-4881.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Nulla vitae elit libero, a pharetra augue mollis
              interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/look-this-cell-phone-pleased-happy-woman-blinks-eyes-points-with-index-finger-blank-screen-shows-modern-device_273609-24790.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/positive-emotions-close-up-young-good-looking-dark-skinned-male-with-afro-hairstyle-white-t-shirt-red-shirt-smiling-with-teeth-chatting-with-friend-smartphone_176420-13009.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

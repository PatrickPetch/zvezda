import React from "react";
import "./News.scss";
import { Carousel } from "react-bootstrap";

function News() {
  return (
    <div className="news-container">
      <div className="header-container">News</div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-item-img"
              src="https://gaminglyfe.com/wp-content/uploads/2020/07/Farmville-2-780x483.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-item-img"
              src="https://i.poweredtemplates.com/p/dg/07/690/ppt_slide_h_1.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-item-img"
              src="https://png.pngtree.com/thumb_back/fw800/background/20200809/pngtree-back-to-school-cartoon-background-space-theme-image_389854.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default News;

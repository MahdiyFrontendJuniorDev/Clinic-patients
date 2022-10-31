import React from "react";
import Carousel from "better-react-carousel";

const CarouselGallery = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="p-2">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/b3IpHwzfjf4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="font-serif">
            Health Transformer Spotlight:Reed Mollins
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="p-2">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube-nocookie.com/embed/QWhZEGH5VPw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="font-serif">Pivoting to Greater succes</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="p-2">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube-nocookie.com/embed/b3IpHwzfjf4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="font-serif">
            Health Transformer Spotlight 2019: Hesky Kutscher, CareDox
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item></Carousel.Item>
    </Carousel>
  );
};

export default CarouselGallery;

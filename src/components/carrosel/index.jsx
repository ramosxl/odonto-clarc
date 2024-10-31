import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './index.scss'; 

const cardsData = [
  { id: 1, text: "Canal" },
  { id: 2, text: "Extração" },
  { id: 3, text: "Ortodontia" },
  { id: 4, text: "Limpeza" },
  { id: 5, text: "Clareamento" },
  { id: 6, text: "Implante" },
  { id: 7, text: "Próteses" },
  { id: 8, text: "Restauração" },
  { id: 9, text: "Cirurgia" },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'slick-dots custom-dots',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardsData.map(card => (
          <div className="card" key={card.id}>
            <h3>{card.text}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

import CarrousselBanner from "./CarrousselBanner.jsx";
import React, { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5000); // Temps restant avant le changement de diapositive

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 20000); // Mettre à jour le temps restant toutes les secondes

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, timeRemaining);

    return () => clearTimeout(timer);
  }, [timeRemaining, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    setTimeRemaining(5000); // Réinitialiser le temps restant à 5 secondes pour chaque diapositive
  };

  const changeSlide = (index) => {
    setCurrentSlide(index);
    setTimeRemaining(5000); // Réinitialiser le temps restant à 5 secondes lorsque l'utilisateur clique sur un bouton
  };

  return (
    <div className="relative z-10 w-screen">
      <ul className="flex">
        {slides.map((slide, index) => (
          <li key={index} className={`${index === currentSlide ? "block" : "hidden"}`}>
            {slide}
          </li>
        ))}
      </ul>
      <div className="absolute w-full bottom-9 pr-10 flex justify-end gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className="h-1 w-10 bg-gray-300"
            style={{
              backgroundImage: index === currentSlide ? "linear-gradient(to right, #4299e1 0%, #4299e1 100%)" : "linear-gradient(to right, #cbd5e0 0%, #cbd5e0 100%)",
              backgroundColor: index === currentSlide ? "#4299e1" : "#cbd5e0",
              backgroundSize: `${(timeRemaining / 5000) * 100}% 100%`,
              transition: "background-size 1s linear",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default function App(data){
  const test = Object.values(data);
  console.log(test);
  const slides = [

  ];

    test.forEach((item, index) => {
      slides.push(<CarrousselBanner key={index} {...item} />);
    });
  return (
    <div className="overflow-x-hidden">
      <Carousel slides={slides} />
    </div>
  );
};

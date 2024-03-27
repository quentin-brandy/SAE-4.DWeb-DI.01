import React, { useState } from "react";
import CarrousselBanner from "./CarrousselBanner.jsx";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Changement automatique des diapositives toutes les 5 secondes
  const intervalId = setInterval(() => {
    nextSlide();
  }, 5000);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  // Fonction pour changer de diapositive lorsqu'un bouton est cliqué
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  // Nettoyer l'intervalle lorsqu'un composant est démonté
  return (
    <div className="relative z-10 w-screen">
      <ul className="flex">
        {slides.map((slide, index) => (
          <li key={index} className={`${index === currentSlide ? "block" : "hidden"}`}>
            {slide}
          </li>
        ))}
      </ul>
      <div className="absolute z-40  w-full bottom-9 pr-10 flex justify-end gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className="h-1 w-10 bg-gray-300"
            style={{
              backgroundImage: index === currentSlide ? "linear-gradient(to right, #4299e1 0%, #4299e1 100%)" : "linear-gradient(to right, #cbd5e0 0%, #cbd5e0 100%)",
              backgroundColor: index === currentSlide ? "#4299e1" : "#cbd5e0",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default function App(data){
  const test = Object.values(data);
  const slides = test.map((item, index) => <CarrousselBanner key={index} {...item} />);
  
  return (
    <div className="overflow-x-hidden">
      <Carousel slides={slides} />
    </div>
  );
};
import CardEp from "../Card/CardSerie copy";
import Slider from "react-slick";
import { useState } from "react";
import { useRef , useEffect} from 'react';


export default function Sliders(data) {
  const test = Object.values(data);
  const containerRef = useRef(null);

  const [hideLeftButton, setHideLeftButton] = useState(true);
  const [hideRightButton, setHideRightButton] = useState(false);

  const handleScrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft -= 400; // Changer la valeur pour ajuster la distance de défilement 
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    container.scrollLeft += 400; // Changer la valeur pour ajuster la distance de défilement
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    // Mettre à jour l'état pour masquer ou afficher les boutons de défilement en fonction de la position du défilement
    setHideLeftButton(scrollLeft === 0);
    setHideRightButton(scrollWidth <= clientWidth + scrollLeft);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-full pl-5 md:pl-10 xl:pl-24">
      <ul ref={containerRef} className="flex gap-4 snap-x overflow-x-hidden overflow-y-hidden h-full  bg-neutral rounded-box">
        <div onClick={handleScrollLeft} className={`absolute flex items-center h-full w-10 top-1/2 left-10 transform -translate-y-1/2 cursor-pointer z-50 bg-black opacity-40 ${hideLeftButton ? 'hidden' : ''}`}>
          <svg className="h-6 w-6 text-textwhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="15 18 9 12 15 6"></polyline></svg>
        </div>
        {test.map((item, index) => (
          <CardEp key={index} name={item.name} img={item.vertical_url}/>
        ))}  
        <div onClick={handleScrollRight} className={`flex items-center absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer h-full w-10 z-50 bg-black opacity-40 ${hideRightButton ? 'hidden' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-textwhite">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </ul>
    </div>
  );
}
{/* <div className="slider-container">
          <Slider {...settings}>
      
          {test.map((item, index) => (
              <CardEp key={index} name={item.name} img={item.vertical_url}/>
          ))}  
          </Slider>
      </div> */}
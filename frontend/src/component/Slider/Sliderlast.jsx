import CardTrailer from "../Card/CardTrailer";
import { useRef, useEffect, useState } from "react";

export default function Sliderslast(data) {
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
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative h-full pl-5 md:pl-10 xl:pl-24">
    <ul
      ref={containerRef}
      className="bg-neutral rounded-box flex h-full snap-x gap-10 overflow-x-hidden overflow-y-hidden"
    >
      <div
        onClick={handleScrollLeft}
        className={`absolute top-1/2 z-50 flex h-full w-10 -translate-y-1/2 transform cursor-pointer items-center bg-black opacity-40 ${hideLeftButton ? "hidden" : ""}`}
      >
        <svg
          className="h-6 w-6 text-textwhite"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
           {test.map((item, index) => (
            <div key={index}>
              <CardTrailer nom={item.name} trailer={item.trailer} date={item.release_date}/>
            </div>
          ))}  
          <div
          onClick={handleScrollRight}
          className={`absolute right-0 top-1/2 z-50 flex h-full w-10 -translate-y-1/2 transform cursor-pointer items-center bg-black opacity-60 ${hideRightButton ? "hidden" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-textwhite"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </ul>
    </div>
  );
}
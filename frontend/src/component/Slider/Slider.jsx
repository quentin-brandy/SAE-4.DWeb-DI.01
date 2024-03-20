import CardEp from "../Card/CardSerie copy";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, onClick } = props;
  const ClassName = `${className} before:content-['>']  flex items-center text-textwhite absolute h-screen`;
  return (
    <div
      className={ClassName}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  const ClassName = `${className} before:content-['<']  flex items-center text-textwhite absolute h-screen`;
  return (
    <div
      className={ClassName}
      onClick={onClick}
    />
  );
}

export default function Sliders() {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="px-5 md:px-10 xl:px-24 relative overflow-hidden">
      <div className=" slider-container">
          <Slider {...settings}>
      
          <div>
            <CardEp />
          </div>
          <div>
            <CardEp />
          </div>
          <div>
            <CardEp />
          </div>
          <div>
            <CardEp />
          </div>
          <div>
            <CardEp />
          </div>
          </Slider>
      </div>
    
    </div>
  );
}
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
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
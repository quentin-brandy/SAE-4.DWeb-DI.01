import CardEp from "../Card/CardSerie copy";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, onClick } = props;
  const ClassName = `${className} before:content-['>']  flex items-center text-textwhite absolute  h-screen`;
  return (
    <div
      className={ClassName}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  const ClassName = `${className} flex before:content-[''] items-center justify-center text-white bg-transparent  w-10  h-full absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-800`;
  return (
    
    
    <div onClick={onClick}  className={ClassName}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
  </div>
  
  );
}

export default function Sliders(data) {
  const test = Object.values(data);
  var settings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="px-5 md:px-10 xl:px-24  overflow-hidden">
      <div className="slider-container">
          <Slider {...settings}>
      
          {test.map((item, index) => (
            <div cursor-pointer hover:scale-110 mb-0 key={index}>
              <CardEp img={item.vertical_url}/>
            </div>
          ))}  
          </Slider>
      </div>
    
    </div>
  );
}
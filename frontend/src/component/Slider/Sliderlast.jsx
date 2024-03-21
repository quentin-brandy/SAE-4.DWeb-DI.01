import CardTrailer from "../Card/CardEp";
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

export default function Sliderlast(data) {
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
  const test = Object.values(data);
  return (
    <div className="px-5 md:px-10 xl:px-24 relative overflow-hidden">
      <div className=" slider-container">
          <Slider {...settings}>
      
           {test.map((item, index) => (
            <div key={index}>
              <CardTrailer nom={item.name} trailer={item.trailer} date={item.release_date} image={item.horizontal_url} />
            </div>
          ))}  
          </Slider>
      </div>
    
    </div>
  );
}
/* import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './cards';
//import list from "D:\BookStore\frontend\public\list.json"
function FreeBook() {
    const filterData = list.filter((data)=> data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
    <>
    <div className='max-w-2x1 container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptas. Et eveniet iste, cum dolores harum dolorem nam, quos distinctio hic autem recusandae id veritatis numquam cumque voluptatibus asperiores aliquid.</p>
        </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item) => (
            <Cards key={item.id} item={item} />
        ))}
      </Slider>
    </div>
        </div>
    </>
  )
}

export default FreeBook

 */
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards";

function FreeBook() {
  const [filterData, setFilterData] = useState([]);

  // Fetch data from public folder
  useEffect(() => {
    fetch("/list.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        return response.json();
      })
      .then((data) => {
        const freeCourses = data.filter((item) => item.category === "Free");
        setFilterData(freeCourses);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    
      
      
    <div className="  max-w-2x1 container mx-auto md:px-20 px-4">
      <div>
        <h1 className=" text-black font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          voluptas. Et eveniet iste, cum dolores harum dolorem nam, quos
          distinctio hic autem recusandae id veritatis numquam cumque
          voluptatibus asperiores aliquid.
        </p>
      </div>
      <div>
        {filterData.length > 0 ? (
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </Slider>
        ) : (
          <p>Loading free courses...</p>
        )}
      </div>
    </div>
    
    
  );
}

export default FreeBook;

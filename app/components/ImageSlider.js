import Slider from "react-slick"
import Image from "next/image"

import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward"

export default function ImageSlider({images}){
    const NextArrow = ({className, style, onClick}) => {
        return(
            <div className={`${className} -right-8`} style={{...style}}>
                <button className="border-blue-700 border-[1px] hover:bg-blue-700 hover:blue-700 group p-3 transition-colors duration-300 rounded-lg backdrop-blur" onClick={onClick}>
                    <IoIosArrowForward className="text-blue-700 group-hover:text-white text-lg md:text-xl transition-color duration-300"/>
                </button>
            </div>
        )
    }
    const PrevArrow = ({className, style, onClick}) => {
        return(
            <div className={`${className} -left-8`} style={{...style}}>
                <button className="border-blue-700 border-[1px] hover:bg-blue-700 hover:blue-700 group p-3 transition-colors duration-300 rounded-lg backdrop-blur" onClick={onClick}>
                    <IoIosArrowForward className="text-blue-700 group-hover:text-white rotate-180 text-lg md:text-xl transition-color duration-300"/>
                </button>
            </div>
        )
    }
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };
    return(
        <Slider {...settings}>
            {images.map((image, index) => (
                <div className="relative w-full aspect-video overflow-hidden rounded-md" key={index}>
                    <Image src={image} alt="" fill className="object-cover"/>
                </div>
            ))}
        </Slider>
    )
}
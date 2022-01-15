import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };
    return (
        <div className='wrap py-5'>
            <Slider {...settings}>
                <div>
                    <img src='../s1.jpg' />
                </div>
                <div>
                    <img src='../s2.jpg' />
                </div>
                <div>
                    <img src='../s3.jpg' />
                </div>
            </Slider>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "@/styles/designLanding.module.css";
import Image from 'next/image';

const SliderComponent = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth > 1024) {
                setSlidesToShow(3);
            } else if (window.innerWidth < 1024 && window.innerWidth > 770) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        draggable: true,
        button: false,
    };

    return (
        <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map(num => (
                <div key={num} className={styles.workCarouselImg}>
                    <Image
                        width={1000}
                        height={1000}
                        src={`/assets/landing-page/design/c-${num}.webp`} 
                        alt={`Image ${num}`} 
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SliderComponent;
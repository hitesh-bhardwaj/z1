import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "@/styles/designLanding.module.css"; // Ensure this path is correct

const SliderComponent = () => {

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        button: false,
    };

    // Only work above 991px 
    if (globalThis.innerWidth>1024) {
        settings = {
            ...settings,
            slidesToShow: 3,
        };
    }

    return (
        <Slider {...settings}>
            <div className={styles.workCarouselImg}><img src="/assets/landing-page/design/c-1.png" alt="Image 1" /></div>
            <div className={styles.workCarouselImg}><img src="/assets/landing-page/design/c-2.png" alt="Image 2" /></div>
            <div className={styles.workCarouselImg}><img src="/assets/landing-page/design/c-3.png" alt="Image 3" /></div>
            <div className={styles.workCarouselImg}><img src="/assets/landing-page/design/c-4.png" alt="Image 4" /></div>
            <div className={styles.workCarouselImg}><img src="/assets/landing-page/design/c-5.png" alt="Image 5" /></div>
            <div className={styles.workCarouselImg}><img src="/assets/landing-page/design/c-6.png" alt="Image 6" /></div>
        </Slider>
    );
};

export default SliderComponent;

import React, { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css'

const Card=(data)=>{

    return ((data.reviews || []).map((review, index) => {
        return (
            <div
                className={`${styles.testimonialBox}`}
                key={`${index}-slide`}
            >
                <div className={styles['title']}>{review.full_name}</div>
                <div className={styles['discription']}>{review.review}</div>
                <div
                    className={styles['inner-container']}
                >
                    <img
                        src={review.company_logo.data.attributes.url}
                        alt="Company Logo"
                        className={styles['img-container']}
                    />
                    <div >
                        <div>{review.full_name}</div>
                        <div>{review.position}</div>
                    </div>
                </div>
            </div>
        );

    }))
}

export default function Testimonial ({data}) {
    const sliderRef = useRef(null);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    function leftArrowClick() {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }

    function rightArrowClick() {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }
    
      return (
        <div className={styles['wrapper']}>
            <div className={styles['left-arrow-container']}>
                <span className={styles['left-arrow']} onClick={leftArrowClick}/>
            </div>
        <div className={styles['container']}>
            <Slider ref={sliderRef} {...settings}>
                {Card(data)}
            </Slider>
        </div>
            <div className={styles['right-arrow-container']}>
                <span className={styles['right-arrow']} onClick={rightArrowClick}/>
            </div>
      </div>   
      );
}


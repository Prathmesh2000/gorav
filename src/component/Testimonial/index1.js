// Testimonial.js

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";

export default function Testimonial({ data }) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [opac, setOpac] = useState(3);

  useEffect(() => {
    const updateResponsiveSettings = () => {
      if (typeof window !== "undefined") {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 550) {
          setSlidesToShow(1);
          setOpac(1);
        } else if (windowWidth <= 700) {
          setSlidesToShow(2);
          setOpac(2);
        } else if (windowWidth <= 900) {
          setSlidesToShow(3);
          setOpac(3);
        } else {
          setSlidesToShow(4);
          setOpac(4);
        }
      }
    };

    window.addEventListener("resize", updateResponsiveSettings);
    updateResponsiveSettings();

    return () => {
      window.removeEventListener("resize", updateResponsiveSettings);
    };
  }, []);

  const prevFunc = () => {
    setOpac((opac - 1 + data.reviews.length) % data.reviews.length + 1);
  };

  const nextFunc = () => {
    setOpac((opac % data.reviews.length) + 1);
  };

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    dotsClass: styles.button__bar,
    appendDots: dots => (
      <div className={styles.button__bar}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
        <div className={styles.actionButtonMobile}>
          <button className={styles.actionPrevIcons} onClick={prevFunc} />
          <button className={styles.actionNextIcons} onClick={nextFunc} />
        </div>
        <p className={styles.rewardingtext}>Rewarding</p>
      </div>
    )
  };

  return (
    <div id="id" className={styles.container}>
      <Slider {...settings}>
        {(data.reviews || []).map((review, index) => (
          <div key={index} className={styles.card}>
            {/* Your card content here */}
            <div className={styles.cardContent}>
              <div className={styles.avatar}>
                <img src={review.profile_pic.data.attributes.url} alt="Avatar" />
              </div>
              <div className={styles.titleBox}>
                <div className={styles.title}>{review.full_name}</div>
                <div className={styles.subtitle}>{review.position}</div>
              </div>
              <div className={styles.contentBox}>{review.review}</div>
              <div className={styles.companyLogo}>
                <img src={review.company_logo.data.attributes.url} alt="Company Logo" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

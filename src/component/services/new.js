import React from 'react';
import styles from './new.module.css';

const Circle = ({ text, imgSrc, angle }) => {
    const outerRadius = 150; // Adjust as needed
    const gap = 80; // Adjust as needed
  
    // Calculate the position of the outer circle
    const outerX = 200 + (outerRadius + gap) * Math.cos(angle);
    const outerY = 200 + (outerRadius + gap) * Math.sin(angle);
  
    return (
      <div className={styles["outer-circle"]} style={{ left: `${outerX}px`, top: `${outerY}px` }}>
        <img src={imgSrc} alt="Circle Image" className={styles["circle-image"]} />
        <p className={styles["circle-text"]}>{text}</p>
      </div>
    );
  };
  



const CenteredCircles = () => {
  // Sample data for outer circles
  const outerCirclesData = [
    { id: 1, text: "Circle 1", imgSrc: "image1.jpg" },
    { id: 2, text: "Circle 2", imgSrc: "image2.jpg" },
    { id: 3, text: "Circle 3", imgSrc: "image3.jpg" },
    { id: 4, text: "Circle 4", imgSrc: "image4.jpg" },
    { id: 5, text: "Circle 5", imgSrc: "image5.jpg" },
    { id: 6, text: "Circle 6", imgSrc: "image6.jpg" },
    { id: 7, text: "Circle 7", imgSrc: "image7.jpg" },
    { id: 8, text: "Circle 8", imgSrc: "image8.jpg" },
  ];

  return (
    <div className={styles['container']}>
    <div className={styles["center-circle"]}>
      {/* Inner Circle */}
      <div className={styles["center-circle-inner"]}>
        <p className={styles["inner-text"]}>Inner Circle</p>
      </div>

      {/* Outer Circles */}
      {outerCirclesData.map((circle, index) => (
        <Circle
          key={circle.id}
          text={circle.text}
          imgSrc={circle.imgSrc}
          angle={(index * 2 * Math.PI) / outerCirclesData.length}
        />
      ))}
    </div>
    </div>
  );
};

export default CenteredCircles;

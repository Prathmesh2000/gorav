import React, { Component, useState } from 'react';
// import Collaborative from "../assets/images/collaborative..svg";
// import Vector from "../assets/images/technologiesVector.svg";
import styles from "./styles.module.css";
import Image from "next/image";

// single card Component
const Card = ({ card }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className={styles.technologiessingleCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className={styles.techonlogiessingleCardframe}>
        <i className={styles.technologiescardicon}>
            <img 
                className={styles['aaa']}
                alt="title"
                style={{
                    width: '65px',
                    height: '65px',
                }}
                layout="responsive"
                src={!isHovering?'https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FDatabase_27c34b77cf.gif&w=1920&q=75'
                :
                'https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FDatabase_hover_7e637e63bb.gif&w=1920&q=75'}
            />
          {/* <Image
            src={!isHovering ? card.icon.data[0].attributes.url : card.icon_white.data.attributes.url}
            width={45}
            height={45}
          /> */}
        </i>
        <a href={card.slug} className={styles.technologiescardtext}>
          {card.name}
        </a>
      </div>
    </div>
  )
}

// technologies component with every cards
const Technologies = ({ data }) => {

  return (
    <div className={styles.technologies}>
      <div className={styles.technologiesWrapper}>
        <div>
          <div className={styles.technologiestextDiv}>
            <h3 className={styles.technologiesmainText}>{data.heading1}</h3>
            <h4 className={styles.technologiessubText}>{data.heading2}</h4>
          </div>
          <div className={styles.technologiesbottomDiv}>
            <div className={styles.technologiescards}>
              {(data.cards || []).map((card, index) => (
                <Card card={card} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.technologiessideDiv}>
          <div className={styles.technologiescollaborativ}>
            {/* <Image src={Collaborative} alt="title" /> */}
          </div>
          <div className={styles.personImage}>
            <img 
              alt="Mountains"
              src={'https://s3.ap-south-1.amazonaws.com/beta.geminisolutions.com/beta.geminisolutions.com/Home_technologies_2076a48a83.png'}
            />
          </div>
          <div className={styles.vector}>
            {/* <Image src={Vector} alt="title" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

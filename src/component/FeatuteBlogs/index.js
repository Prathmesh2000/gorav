// import Background from "../public/images/featured_background.svg";

import styles from "./styles.module.css";
import Image from "next/image";

const Featured = ({ data }) => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredcontainer}>
        <div className={styles.featuredtop}>
          <div className={styles.featuredtext}>
            <h3 className={styles.featuredheading}>{data.heading1}</h3>
            <h5 className={styles.featuredsubText}>{data.heading2}</h5>
          </div>
          {/* <div className={styles.backgroundImage}>
            <Image src={Background} alt="Background" />
          </div> */}
        </div>
        <div className={styles.featuredbottom}>
          <div className={styles.featuredcards}>
            {(data.Cards || []).map((card, index) => {
              return (
                <div className={`${styles.featuredcard} 
                ${(index == 1 || index == 4) && styles.featuredcardcenter}
                ${[3,4,5].includes(index) && styles['mr-t']}
                `
              }>
                <button className={styles.featuredbutton}>
                  <a
                    href={card.button_slug}
                    className={styles.featuredbuttontext}
                    >
                    {card.button_name}
                  </a>
                </button>
                <div className={styles.featuredmobilewrapper}>
                  <div className={styles.featuredCardImage}>
                    <img 
                      src={card.image.data.attributes.url}
                      alt="Featured Image"
                      layout="responsive"
                      // width={700}
                      // height={475}
                      objectFit="cover"
                      borderRadius="15"
                      className={styles.featuredCardImageTag}
                      style={{
                        width: '320px',
                        objectFit: "cover !important",
                        borderRadius: "15px",
                      }}
                    />
                    {/* <Image
                    /> */}
                  </div>
                  <div className={styles.featuredcardtext}>
                    <h4 className={styles.featuredcardheading}>
                      {card.heading}
                    </h4>
                    <h4 className={styles.featuredcardsubText}>
                      {card.description}
                    </h4>
                  </div>
                </div>
            </div>
    
          )
            })}
          </div>
        </div>
        </div>
    </div>
  );
};

export default Featured;

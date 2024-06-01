"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";


const Hero = () => {
  return (
    <section
      className={styles.container}
      style={{
     
      }}
    >
      <div className={styles.wrapper}>
      <div className={styles.heroImage}>
        <Image
          src={ './static'
 
          }
          alt="heroImage"
          fill
          sizes="100%"
          style={{objectFit:"cover"}}
          
          className={styles.desktopImage}
          // priority
        />

        <Image
          src={
        ""
          }
          alt="heroImage"
          fill
          sizes="100%"
          style={{objectFit:"cover"}}
          className={styles.mobileImage}
          // priority

        />
      </div>
      <div className={styles.textContainer}>
        <h2>{hero?.Header?.Title}</h2>
        <p>{hero?.Header?.Content}</p>
      </div>

      <div className={styles.heroBottom}>
        <div className={styles.imageSection}>
          <div className={styles.circleEmpty}>
            <div className={styles.circleContainer}>
              <Image

                src={
               ''
                }
                alt="Circle"
                fill
                sizes="100%"
                style={{objectFit:"cover"}}
                
              />
            </div>
            <div className={styles.textBox}>
              {hero?.Icons?.map((item, index) => (
                <div className={styles.iconContainer} key={index}>
                  <Image
                    src={
                   ''
                    }
                    alt="Icon"
                    fill
                    style={{objectFit:"contain"}}
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottonTextContainer}>
       
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
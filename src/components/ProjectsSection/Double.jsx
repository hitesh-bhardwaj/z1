'use client'

import styles from '@/styles/Double.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Index({projects, reversed}) {

  // useEffect(() => {
  //   const doubleContainer = document.querySelector("#doubleContainer");
  //   const doubleImage = document.querySelectorAll("#doubleContainer > #doubleImage");

  //   const tl1 = gsap.timeline({
  //           scrollTrigger: {
  //               trigger: doubleContainer.current,
  //               start: "top 80%",
  //               markers: false,
  //           }
  //       });

  //       tl1.fromTo( doubleImage, {
  //           y: 200,
  //           opacity: 0,
  //       },
  //       {   
  //           duration: 1,
  //           opacity: 1,
  //           y: 0,
  //           stagger: 0.5,
  //       });
  //       return () => tl1.kill();
  //   });


    const firstImage = useRef(null);
    const secondImage = useRef(null);
    let requestAnimationFrameId = null;
    let xPercent = reversed ? 100 : 0;
    let currentXPercent = reversed ? 100 : 0;
    const speed = 0.15;
    
    const manageMouseMove = (e) => {
        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;
        
        if(!requestAnimationFrameId){
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        //Add easing to the animation
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent = currentXPercent + (xPercentDelta * speed)
        
        //Change width of images between 33.33% and 66.66% based on cursor
        const firstImagePercent = 66.66 - (currentXPercent * 0.33);
        const secondImagePercent = 33.33 + (currentXPercent * 0.33);
        firstImage.current.style.width = `${firstImagePercent}%`
        secondImage.current.style.width = `${secondImagePercent}%`
        
        if(Math.round(xPercent) == Math.round(currentXPercent)){
            window.cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
        else{
            window.requestAnimationFrame(animate)
        }
    }

    return(

      <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.double} id='doubleContainer'>

        <div ref={firstImage} className={styles.imageContainer} id='doubleImage'>
          <Link href={`/${projects[0].link}`}>
            <div className={styles.stretchyWrapper}>
              <Image 
                data-cursor-size='100px'
                data-cursor-text='View Project' 
                data-cursor-color='#5d5ad6'     
                src={`/assets/homeProject/${projects[0].src}`}
                fill={true}
                sizes="(max-width: 1200px) 100vw, 50vw"
                priority={false} 
                alt="project image"
              />
            </div>
            <div className={styles.body}>
                <h3>{projects[0].name}</h3>
                <h5>{projects[0].description}</h5>
                <p>{projects[0].year}</p>
            </div>
            </Link>
        </div>
        
        <div ref={secondImage} className={styles.imageContainer} id='doubleImage'>
          <Link href={`/${projects[1].link}`}>        
            <div className={styles.stretchyWrapper}>
              <Image 
                data-cursor-size='100px'
                data-cursor-text='View Project' 
                data-cursor-color='#5d5ad6' 
                src={`/assets/homeProject/${projects[1].src}`}
                fill={true}
                sizes="(max-width: 1200px) 100vw, 50vw"
                priority={false} 
                alt="project image"
              />
            </div>
            <div className={styles.body}>
                <h3>{projects[1].name}</h3>
                <h5>{projects[1].description}</h5>
                <p>{projects[1].year}</p>
            </div>
          </Link>
        </div>

      </div>
    )
  }
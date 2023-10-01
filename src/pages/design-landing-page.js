import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Lenis from '@studio-freight/lenis';
import styles from "../styles/designLanding.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";

import Header from "../components/LandingPage/Design/Header";
import Hero from "../components/LandingPage/Design/Hero";
import Section2 from "../components/LandingPage/Design/Section2";
import Testimonial from "../components/LandingPage/Design/Testimonial";
import Membership from "../components/LandingPage/Design/Membership";
import RecentWork from "../components/LandingPage/Design/RecentWork";
import Pricing from "../components/LandingPage/Design/Pricing";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [dimension, setDimension] = useState({width:0, height:0});

//Lenis Smooth Scroll 
    useEffect( () => {
        const lenis = new Lenis()
    
        const raf = (time) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        const resize = () => {
          setDimension({width: window.innerWidth, height: window.innerHeight})
        }
    
        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();
    
        return () => {
          window.removeEventListener("resize", resize);
        }
      }, [])

    return (
        <>
        <Cursor isGelly={true} />
            <main className={styles.mainContainer}>
                <Header />
                <Hero />
                <Section2 />

                <div className={styles.testimonialContainer}>
                    <div className={styles.testimonial}>
                        <Testimonial />
                    </div>
                </div>

                <Membership />
                <RecentWork />
                <Pricing />
            </main>
        </>
    )
};
export default Home;
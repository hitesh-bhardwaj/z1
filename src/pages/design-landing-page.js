import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Lenis from '@studio-freight/lenis';
import styles from "../styles/designLanding.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";

import Header from "../components/LandingPage/Design/Header";
import Hero from "../components/LandingPage/Design/Hero";
import Section2 from "../components/LandingPage/Design/Section2";
import Testimonial from "../components/LandingPage/Design/Testimonial";
import Membership from "../components/LandingPage/Design/Membership";
import RecentWork from "../components/LandingPage/Design/RecentWork";
import Pricing from "../components/LandingPage/Design/Pricing";
import Faq from "../components/LandingPage/Design/Faq";
import Footer from "../components/LandingPage/Design/Footer";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
    const [dimension, setDimension] = useState({width:0, height:0});
    const lenisRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load dark mode status from localStorage on component mount
    useEffect(() => {
      const savedDarkMode = localStorage.getItem('isDarkMode') === 'true';
      setIsDarkMode(savedDarkMode);
  }, []);

   // Save dark mode status to localStorage whenever it changes
   useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
    document.body.classList.toggle(styles.dark, isDarkMode);
}, [isDarkMode]);

const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
};

useEffect(() => {
    lenisRef.current = new Lenis();
    
    const raf = (time) => {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
    };
    
        const resize = () => {
          setDimension({width: window.innerWidth, height: window.innerHeight})
        }
    
        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        requestAnimationFrame(raf);
    
        return () => {
          window.removeEventListener("resize", resize);
        }
      }, [])

      console.clear();

    return (
        <>
        <Head>
          <title>
            Design Services | Design Subscription
          </title>
          <meta
            name="description"
            content="Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0">          
          </meta>
          <link rel="icon" href="/fav-icon.png" />
        </Head>

        <Cursor isGelly={true} />
              <main id="design-landing" className={`${styles.mainContainer} ${isDarkMode ? styles.dark : "dark"}`}>
                
                <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

                <section id="home">
                  <Hero />
                </section>
                
                <Section2 />

                <div className={styles.testimonialContainer}>
                    <div className={styles.testimonial}>
                        <Testimonial />
                    </div>
                </div>

                <section id="benefit">
                  <Membership />
                </section>
                
                <section id="work">
                  <RecentWork />
                </section>
                
                <section id="pricing">
                  <Pricing />
                </section>
                
                <section id="faq">
                  <Faq />
                </section>
                
                <Footer />
            </main>
        </>
    )
};
export default Home;
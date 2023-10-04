'use client'

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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
    const [dimension, setDimension] = useState({width:0, height:0});
    const lenisRef = useRef(null);

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
        <Cursor isGelly={true} />
            <main className={styles.mainContainer}>
                <Header />

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
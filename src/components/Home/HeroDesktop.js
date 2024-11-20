import React, { useEffect } from 'react';
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import Image from 'next/image';

const HeroDesktop = () => {

    // Hero Section Animation
  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline();
      tl.fromTo(
        "#anim",
        {
          rotationX: -80,
          opacity: 0,
          translateY: 300,
          transformPerspective: "1000",
          transformOrigin: "top center",
        },
        {
          delay: 1,
          duration: 1.3,
          rotationX: 0,
          opacity: 1,
          translateY: 0,
          stagger: 0.2,
        }).fromTo(
          ".home-page-header",
          {
            y: -50,
            opacity: 0,
          },
          {
            delay: -1,
            duration: 1.3,
            opacity: 1,
            y: 0,
            stagger: 0.1
          });
          tl.to(".reel-anim", {
            scale: 1,
            opacity: 1,
            delay: -1.8,
            duration: 1.3,
          });

    })
    return () => ctx.revert();
  }, []);

  return (
    <>
        <div className="hero-main desktop">
              <div
                className="relative w-full h-[70vh] flex justify-center items-center mx-auto flex-col leading-[1.2]"
              >
                <div className="w-[85%] flex justify-end h-[8.5vw] items-center">
                  <div
                    className="digital text-[9vw] font-medium text-black2 capitalize"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/1.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    <span className="line hacker">digital</span>
                  </div>
                  <p className="w-[32vw] text-[1.2vw] font-normal para-hero text-center leading-[1.7] text-[#383838]" id="anim">
                    Harnessing the power of<span className="bold-600"> Emotion, Design, Technology & Neuromarketing, </span>we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.
                  </p>
                </div>

                <div className="w-[85%] flex justify-start items-center h-[9vw]">
                  <div
                    className="text-[10vw] text-primary font-medium capitalize"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/2.webp"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    experience
                  </div>

                  <div className="reel-hero">
                    <div className='reel-anim'>
                      <video
                        poster='/assets/reels/reel-poster.webp'
                        muted
                        autoPlay
                        loop
                        preload="auto"
                        className="w-[20vw] ml-[2.5vw] h-[8vw] object-cover rounded-[5vw]"
                      >
                        <source src='' type='video/webm'/>
                        <source src='/assets/reels/hero.mp4' type='video/mp4'/>
                      </video>
                    </div>
                  </div>
                </div>

                <div className="w-[78%] flex justify-end items-center">
                  <div
                    className="text-[9vw] text-black2 font-medium capitalize "
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/4.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    design
                  </div>

                  <div
                    className="ml-[2vw] font-medium capitalize text-[9vw] agency-text"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/3.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    agency
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-footer">
              <div className="scroll-img home-page-header">
                <Image
                  src="/assets/hero-footer/scroll.svg"
                  width={18}
                  height={234}
                  alt="Scroll Image"
                  title='Scroll Down Image'
                  className="svg-dark-mode"
                ></Image>
              </div>

              <div className="flex justify-between items-center home-page-header">
                <div className="flex items-center justify-between">
                  <div className="pl-[1.5vw]">
                    <p className="text-[0.9vw] text-gray">timezone</p>
                    <div className="text-[1vw] text-black1">+5:30 GMT</div>
                  </div>
                </div>
                <div className="">
                  <p className="text-gray">location</p>
                  <div className="">Noida - India</div>
                </div>
              </div>
            </div>
    </>
  )};

export default HeroDesktop;


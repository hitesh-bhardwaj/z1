import React, { useEffect } from "react";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";
import gsap from "gsap";

const ThankYou = () => {

  useEffect(() => {
    const tl = gsap.timeline();
    const anim = document.querySelectorAll("#anim");

    tl.fromTo("#h1",{
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        duration: 1,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }).fromTo(
        anim,
        {
          y: 100,
          opacity: 0,
        },
        {
          delay: -0.7,
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.2
        }
      );
    return () => tl.kill();
  }, []);

  return (
    <div>

    <NextSeo
        title="Thank You | Thanks for connecting with us."
        description="Thanks for connecting with us."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.weareenigma.com/",
          title: "Thank You | Thanks for connecting with us.",
          description:
            "Thanks for connecting with us.",
          images: [
            {
              url: "https://i.ibb.co/k0NMQw9/home.png",
              width: 400,
              height: 600,
              alt: "Enigma Image",
              type: "image/png",
            },
            { url: "https://i.ibb.co/k0NMQw9/home.png" },
          ],
          siteName: "weareenigma.com",
        }}
      />

      <Head>
        <title>Thank You | Thanks for connecting with us.</title>
        <meta
          name="description"
          content="Thanks for connecting with us."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <Cursor isGelly={true} />

      <main>
        <div className="message-sent-page">

        {/* <svg className="w-screen h-screen">
          <path d="M 0 0 L 656 -1 C 638 203 386 247 377 477 L 355 477 c -20 -221 -348 -345 -355 -477 Z"/>
        </svg> */}
        
            <h1 id="h1"
                data-cursor-magnetic
                data-cursor-size="300px"
                data-cursor-exclusion>
                Hoooray <span className="color-primary">!</span>
            </h1>
            <p id="anim">
              It is a pleasure to meet ya! Give us a day and we will schedule our first date.
            </p>
          
          <div className='mt-10' id="anim">
            <Link href="/">
              <button className='btn_CTA'>
                  <span className="btn_CTA-ripple">
                  <span></span>
                  </span>
                  <span className='btn_CTA-title'>
                  <span data-text='Go Home'>Go Home</span>
                  </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;

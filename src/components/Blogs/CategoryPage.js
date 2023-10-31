import React, {useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Cursor } from "../../../cursor";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import Image from "next/image";
import { NextSeo } from "next-seo";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Blogs from "@/components/Blogs/blogData";
import Modal from "@/components/PopupForm/formModal";

// Hover on the link
const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scale: 1.1,
      ease: "power1.inOut",
    });
  };
  
  // Hover off the link
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scale: 1,
      ease: "power1.inOut",
    });
  };
  
  const buttons = [
    { label: "All", path: "/blog" },
    { label: "Strategy", path: "/blog/strategy" },
    { label: "Design", path: "/blog/design" },
    { label: "Technology", path: "/blog/technology" },
    { label: "Marketing", path: "/blog/marketing" },
  ];

  const CategoryPage = ({ category }) => {
    const [activeIndex, setActiveIndex] = useState(0);

  // Filter blogs based on the category
  const filteredBlogs = Blogs.filter((blog) => blog.category === category);

  // Set the active index based on the category
  useEffect(() => {
    const index = buttons.findIndex(button => button.label.toLowerCase() === category.toLowerCase());
    setActiveIndex(index);
  }, [category]);


  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".blogs-heading #blog",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        opacity: 0,
        translateY: 60,
      },
      {
        delay: 0.4,
        duration: 1.3,
        opacity: 1,
        stagger: 0.05,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);

  return (
    <>
      
      <NextSeo
              title="Top Digital Marketing to Follow | Enigma"
              description="Generated by create next app"
              canonical="https://www.weareenigma.com/blogs"
              openGraph={{
                url: "https://www.weareenigma.com/blogs",
                title: "Top Digital Marketing to Follow | Enigma",
                description:
                  "Generated by create next app",
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
                siteName: "https://www.weareenigma.com/blogs",
              }}
            />

      <Head>
        <title>Top Digital Marketing to Follow | Enigma</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <SmoothScroll />

{/*========Loader========*/}
      <div className="invisible loader-wrap" id="loader">
      <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>

        <div className="loader-wrap-heading">
          <span>
            <h1>Our Thoughts & Resources</h1>
          </span>
        </div>
      </div>

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

{/* PopUp Modal Button */}
  <Modal />
{/* End */}

      <main>
      
      <div className="blogs-main-section">
          <div className="blogs-sub-section">
            <div
              className="blogs-heading"
              data-cursor-size="10px"
              data-cursor-text=""
            >
              <h1 id="blog">
                <span>All Articles</span>
              </h1>
            </div>

            <div className="blogs-section">
                {buttons.map((button, index) => (
                    <Link href={button.path} key={index}>
                        <button className={activeIndex === index ? "active" : "button--calypso"} id="anim">
                        <span>{button.label}</span>
                        </button>
                    </Link>
                ))}

          <div className="ul-items">
            {filteredBlogs.map((post, index) => (
                <div className="blog-page-grid">
                    <div key={post.id} className="ul-blog" id="img">
                        <Link href={`${post.Link}`}>
                        <div className="image-box-blog">
                            <Image
                                src={post.image}
                                className="img-blog"
                                onMouseEnter={(e) => handleHover(e)}
                                onMouseOut={(e) => handleHoverExit(e)}
                                data-cursor-text="Read Now"
                                data-cursor-size="120px"
                                data-cursor-color="#000"
                                alt="Blog-img"
                                width={800}
                                height={1160}
                                priority={false}
                            />
                            <h2 className="blog-list-tag">{post.name}</h2>
                        </div>
                        <h3 className="desc-tag">{post.description}</h3>
                    </Link>
                </div>
            </div>
            ))}
          </div>
        </div>
        </div>
        </div>
      </main>

      {/* ======================== Footer ====================== */}
      <div className="desktop-footer">
        <Footer />
      </div>

      <div className="mobile-footer">
        <FooterMobile />
      </div>
      {/* ======================== Footer END ====================== */}
    </>
  );
}

export default CategoryPage;
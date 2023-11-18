import React, {useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import Image from "next/image";
import { NextSeo } from "next-seo";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Blogs from "../components/Blogs/blogData";
import Modal from "../components/PopupForm/formModal";
import PageLoader from "../components/pageLoader";
import Head from "next/head";

gsap.config({
  nullTargetWarn: false,
});

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
  { label: 'Psychology', path: '/blog/consumer-psychology' },
];

const BlogPost = ({ post }) => {
  const postRef = useRef(null);

  useEffect(() => {
    // Animate the blog post
    gsap.fromTo(
      postRef.current,
      { autoAlpha: 0, y: 200 },
      { autoAlpha: 1, y: 0, duration: 1.5, delay: 3.8 }
    );
  }, []);

  return (
    <div ref={postRef} className="blog-page-grid">
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
            <h5  className="blog-list-tag">{post.name}</h5>
          </div>
          <h4 className="desc-tag">{post.description}</h4>
        </Link>
      </div>
    </div>
  );
};

export default function BlogsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

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
        delay: 3.5,
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
        delay: 4.2,
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
              title="The Enigma Blog | Discover, Learn & Be Future Ready"
              description="Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends."
              openGraph={{
                url: "https://weareenigma.com/blog",
                title: "The Enigma Blog | Discover, Learn & Be Future Ready",
                description:
                  "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/blog.png",
                    width: 1200,
                    height: 630,
                    alt: "Blogs Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
              }}

            additionalMetaTags={[
              {
                name: "twitter:title",
                content: "The Enigma Blog | Discover, Learn & Be Future Ready"
              },
              {
                name: "twitter:description",
                content: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends."
              },
              {
                name: "twitter:image",
                content: "https://weareenigma.com/assets/featured-images/blog.png"
              },
            ]}
          />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/blog" />
        <link rel="alternate" href="https://weareenigma.com/blog" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/blog"
                },
                "name": "Blog",
                "description": "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                "datePublished": "2023-01-01T12:00:00+05:30",
                "dateModified": "2023-11-17T12:00:00+05:30",
                "publisher": {
                  "@type": "Organization",
                  "name": "Enigma Digital",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
                  }
                }
              }
            ),
          }}
        />
      </Head>

      <SmoothScroll />

{/*========Loader========*/}
    <PageLoader text="Our Thoughts & Resources" />

    <Cursor isGelly={true} />

    <Header />

{/* PopUp Modal Button */}
  <Modal />
{/* End */}

      <main>
        <div className="blogs-main-section">
          <div className="blogs-sub-section">
            <div className="blogs-featured">
              
            </div>
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
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  {buttons.map((button, index) => (
                    <h2 style={{width: 'fit-content'}}>
                    <Link href={button.path} key={index}>
                      <button className={activeIndex === index ? "active" : "button--calypso"} id="anim">
                        <span>{button.label}</span>
                      </button>
                    </Link>
                    </h2>
                  ))}
                </div>

                  <div className="ul-items">
                    {Blogs.map((post, index) => (
                      <BlogPost key={index} post={post} />
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



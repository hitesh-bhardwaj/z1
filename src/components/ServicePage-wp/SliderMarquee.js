import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Swiper from "swiper";

gsap.registerPlugin(ScrollTrigger);

export default function SliderMarquee({ data }) {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let container = document.getElementById("container");
      let scrollContainer = document.getElementById("scroll-container");

      // 4900 is total width of all images
      const X = 2000 - container.offsetWidth;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scrub: true,
          start: "top bottom",
          end: "200% top",
          pin: false,
          // toggleActions: "restart pause reverse pause",
        },
      });

      gsap.utils.toArray(".module").forEach((el, i) => {
        tl.fromTo(
          el,
          { x: 0 },
          { x: `-=${X}`, autoAlpha: 1, duration: 0.1 },
          "-=0.1"
        );
      });

      gsap.utils.toArray(".module-2").forEach((el, i) => {
        tl.fromTo(
          el,
          { x: 0 },
          { x: `+=${X}`, autoAlpha: 1, duration: 0.1 },
          "-=0.1"
        );
      });
    });
    return () => ctx.revert();
  });

  // Parallax Image
  useEffect(() => {
    gsap.utils.toArray(".parallax-slider").forEach(function (container) {
      let image = container.querySelector("img");

      gsap.to(image, {
        x: () => image.offsetHeight - container.offsetHeight,
        ease: "none",
        startAt: { x: "-10%" },
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: '150% top',
          scrub: true,
          pin: false,
          markers: false,
          invalidateOnRefresh: true,
        },
        x: "10%",
      });
    });
  });

  return (
    <div>
      <div id="scroll-container">
        <div id="container" className="cf-10">
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img2?.mediaItemUrl}
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img3?.mediaItemUrl}
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img2?.mediaItemUrl}
              alt="image 3"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img3?.mediaItemUrl}
              alt="image 4"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img2?.mediaItemUrl}
              alt="image 5"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div id="container" className="cr-10">
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img4?.mediaItemUrl}
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img5?.mediaItemUrl}
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img6?.mediaItemUrl}
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div id="container" className="minus-10">
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img1?.mediaItemUrl}
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img7?.mediaItemUrl}
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img8?.mediaItemUrl}
              alt="image 3"
              width={800}
              height={550}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img9?.mediaItemUrl}
              alt="image 4"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img7?.mediaItemUrl}
              alt="image 5"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img8?.mediaItemUrl}
              alt="image 6"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img10?.mediaItemUrl}
              alt="image 6"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div id="container" className="cl-10">
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img11?.mediaItemUrl}
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img12?.mediaItemUrl}
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img13?.mediaItemUrl}
              alt="image 3"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img14?.mediaItemUrl}
              alt="image 4"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img12?.mediaItemUrl}
              alt="image 5"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2">
            <Image
              src={data?.posts?.nodes[0]?.serviceSlider?.img11?.mediaItemUrl}
              alt="image 6"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

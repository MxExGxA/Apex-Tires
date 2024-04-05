import { image1, image2, image3, image4 } from "../../assets/images/hero";

import Slide from "../slide/Slide";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { heroData } from "../../utils/db";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
  const images = useRef<HTMLDivElement>(null);
  const lenis = useLenis(() => {});

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: left.current,
        snap: {
          snapTo: 1 / 3,
          duration: 0.5,
          delay: 0.1,
          ease: "power1.inOut",
        },
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    tl.to(images.current, {
      y: () => window.innerHeight * 3,
      ease: "none",
    });
  });

  return (
    <div
      ref={container}
      className="hero-container flex bg-main-white"
      id="home"
    >
      <div
        ref={left}
        className="left relative flex justify-center items-center w-[600px] h-lvh overflow-hidden max-xl:w-[500px] max-[850px]:w-full"
      >
        <div
          ref={images}
          className="images-container absolute flex flex-col top-0 left-0 h-full w-full *:h-full *:w-full *:absolute *:left-0 "
        >
          <img src={image1} alt="bg-image" className="hero-image top-0" />
          <img
            src={image2}
            alt="bg-image"
            className="hero-image top-[-100vh]"
          />
          <img
            src={image3}
            alt="bg-image"
            className="hero-image top-[-200vh]"
          />
          <img
            src={image4}
            alt="bg-image"
            className="hero-image top-[-300vh]"
          />
        </div>
        <div className="wrapper relative z-50 flex flex-col p-4 items-left text-main-white">
          <h2 className="thin-text font-roboto font-thin w-[380px] max-sm:w-[320px] text-[95px] max-sm:text-[80px] leading-[120px]">
            WE SELL
          </h2>
          <h1 className="bold-text font-roboto font-black w-[380px] max-sm:w-[320px] text-[135px] max-sm:text-[115px] leading-[120px] text-justify">
            TIRES
          </h1>

          <p className="details-text font-roboto font-regular text-2xl max-sm:text-xl w-[380px] max-sm:w-[320px] text-justify my-5">
            Reach the peak of your driving experience. Engineered for superior
            control, confidence, and long lasting performance.
          </p>
          <button
            onClick={() => lenis?.scrollTo("#products")}
            className="btn-explore font-roboto font-bold text-main-white bg-main-red text-2xl w-full py-3 mt-3 hover:bg-main-white hover:text-main-red transition-colors duration-300"
          >
            Explore
          </button>
        </div>
      </div>
      <div className="right relative w-[calc(100%-600px)] max-[850px]:hidden">
        <div className="wrapper font-roboto font-bold text-[90px] ">
          {heroData?.map((data, index) => (
            <Slide key={index} text={data.text} spanText={data.span} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

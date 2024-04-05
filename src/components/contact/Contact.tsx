import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Maps from "../maps/Maps";

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  const info = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1280px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(info.current, {
        top: 0,
        ease: "sine.inOut",
      });
    });
  });

  return (
    <div
      ref={container}
      className="contact-container relative h-lvh max-xl:h-auto w-full flex flex-col items-center bg-main-white max-xl:overflow-visible"
      id="contact"
    >
      <div className="contact-title h-lvh max-xl:hidden w-full text-[120px] font-roboto font-bold text-main-dark flex justify-center items-center">
        <h1>Contact us</h1>
      </div>

      <div
        ref={info}
        className="contact-info pb-10 absolute w-full h-lvh flex max-xl:flex-col max-xl:h-auto bg-white z-40 max-xl:!top-0 max-xl:bg-main-white"
        style={{ top: "100vh" }}
      >
        <div className="contact-form w-1/2 max-xl:w-full flex flex-col justify-center items-center p-10 border-r-2 z-50 max-xl:border-none">
          <div className="form-title text-main-dark font-roboto font-black text-[80px] max-lg:text-6xl max-md:text-4xl w-3/4 max-sm:w-full leading-[80px] mb-5">
            <h1>
              We Wanna Hear <br className="max-md:hidden" />{" "}
              <span className="text-main-red">From You.</span>
            </h1>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="contact-form w-3/4 max-sm:w-full h-[510px] *:w-full *:text-2xl *:p-4 *:my-2 *:outline-none *:font-roboto *:border-2 text-main-red"
          >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea
              cols={10}
              placeholder="Your message"
              className="resize-none h-60"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="btn-submit border-none bg-main-red cursor-pointer text-main-white hover:text-main-red hover:bg-main-white transition-colors duration-300"
            />
          </form>
        </div>
        <div className="contact-map w-1/2 max-xl:w-full h-lvh max-xl:h-auto  flex flex-col justify-center items-center p-10">
          <div className="map-title text-main-dark font-roboto font-black text-[80px] max-md:text-4xl w-3/4 max-sm:w-full leading-[80px] mb-5">
            <h1>
              Come And Visit <br className="max-md:hidden" />
              <span className="text-main-red">Our Store.</span>
            </h1>
          </div>
          <Maps />
        </div>

        <h2 className="absolute max-xl:hidden top-[50%] left-[50%] -translate-x-1/2 font-roboto text-4xl font-bold text-main-red  bg-white border-2 rounded-full z-50 w-20 h-20 flex justify-center items-center ">
          OR
        </h2>

        <p className="copyright absolute bottom-0 left-1/2 -translate-x-1/2 z-50 text-md font-roboto text-main-dark p-5 bg-white max-xl:bg-transparent w-full text-center">
          Copyright © 2024 APEX | Crafted by Elsayed Elghazy
        </p>
      </div>
    </div>
  );
};

export default Contact;

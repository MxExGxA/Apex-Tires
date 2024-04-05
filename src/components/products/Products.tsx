import Product from "../product/Product";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { productsData } from "../../utils/db";
import bg from "../../assets/images/products/bg.png";

const Products = () => {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1280px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "center center",
          end: `+=4000`,
          pin: true,
          // snap: {
          //   snapTo: 1 / 3,
          //   duration: 0.5,
          //   delay: 0.5,
          //   ease: "power1.inOut",
          // },
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(slider.current, {
        x: () => -slider.current!.clientWidth * 3,
        ease: "sine.inOut",
      }).fromTo(
        background.current,
        {
          scaleX: "150%",
          x: 0,
        },
        {
          scaleX: "150%",
          x: -300,
        },
        "<"
      );
    });
  });

  return (
    <div
      ref={container}
      className="products-container relative h-lvh flex max-xl:h-auto items-center overflow-hidden bg-main-white  bg-cover bg-no-repeat bg-bottom"
      id="products"
    >
      <img
        ref={background}
        src={bg}
        alt="background image"
        className="products-background absolute bottom-0 left-0 !w-[200vw] h-full max-xl:hidden"
      />
      <div
        ref={slider}
        className="product-slider flex items-center min-w-full max-xl:flex-col"
      >
        <div className="products-title min-w-full h-full flex justify-center items-center text-[120px] max-xl:text-6xl max-sm:text-4xl max-xl:text-main-dark max-xl:mt-10 font-roboto font-bold text-main-white opacity-90 ">
          <h1 className="drop-shadow-md max-xl:drop-shadow-none">
            Our Products
          </h1>
        </div>
        {productsData?.map((data, index) => (
          <Product
            key={index}
            prodNumber={data.prodNumber}
            prodImage={data.prodImage}
            prodTitle={data.prodTitle}
            prodDesc={data.prodDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

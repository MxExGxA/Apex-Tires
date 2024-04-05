import { useLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const backGroundvars = {
    closed: {
      x: "-100%",
      transition: {
        ease: "circInOut",
        duration: 0.3,
        delay: 0.3,
      },
    },
    opened: {
      x: 0,
      transition: {
        ease: "circInOut",
        duration: 0.5,
      },
    },
  };

  const menuVars = {
    closed: {
      x: "-100%",
      transition: {
        ease: "circInOut",
        duration: 0.3,
      },
    },
    opened: {
      x: 0,
      transition: {
        ease: "circInOut",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const childVars = {
    hide: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hover: {
      scale: 1.1,
    },
  };

  const burgerShape = {
    top: {
      rotate: 45,
      y: 9,
      backgroundColor: "#a4161a",
    },
    middle: {
      x: "100%",
      opacity: 0,
    },
    bottom: {
      rotate: -45,
      y: -9,
      backgroundColor: "#a4161a",
    },
  };

  const menuButton = {
    open: {
      backgroundColor: "#f5f3f4",
      boxShadow: "0 0 2px gray",
      transtition: {
        duration: 0.3,
      },
    },
  };

  const lenis = useLenis(() => {});
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleScroll = (path: string) => {
    lenis?.scrollTo(path);
    setToggleMenu(false);
  };

  return (
    <div className="nav-container fixed z-50 top-0 left-0 w-full flex justify-center p-3">
      <div className="wrapper relative w-[90%] flex justify-between items-center">
        <div className="logo font-roboto font-black text-3xl text-main-red">
          APEX
        </div>
        <ul className="menu font-roboto font-bold flex items-center *:ml-10 *:cursor-pointer hover:*:text-main-red *:transition-colors *:duration-300 *:text-main-dark max-xl:hidden">
          <li onClick={() => lenis?.scrollTo("#home")}>Home</li>
          <li onClick={() => lenis?.scrollTo("#products")}>Products</li>
          <li onClick={() => lenis?.scrollTo("#contact")}>Contact us</li>
        </ul>
        <motion.div
          onClick={handleToggleMenu}
          variants={menuButton}
          animate={toggleMenu ? "open" : ""}
          className="small-menu-button absolute right-0 top-0 hidden max-xl:block w-12 h-12 z-50 rounded-full bg-main-red cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <div className="burger-shape h-12 *:w-8 *:h-1 *:bg-main-white flex flex-col justify-center items-center *:my-[2.5px] *:rounded-sm">
            <motion.div
              variants={burgerShape}
              animate={toggleMenu ? "top" : ""}
            ></motion.div>
            <motion.div
              variants={burgerShape}
              animate={toggleMenu ? "middle" : ""}
            ></motion.div>
            <motion.div
              variants={burgerShape}
              animate={toggleMenu ? "bottom" : ""}
            ></motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={backGroundvars}
        initial="closed"
        animate={toggleMenu ? "opened" : "closed"}
        className={`menu-bg absolute hidden max-xl:block top-0 left-0 w-[400px] max-sm:w-full  h-lvh bg-main-red shadow-lg`}
      ></motion.div>
      <motion.ul
        variants={menuVars}
        initial="closed"
        animate={toggleMenu ? "opened" : "closed"}
        className={`small-menu absolute hidden max-xl:flex top-0 left-0 w-[390px] -translate-x-96
         max-sm:w-full font-roboto font-bold  flex-col items-center justify-center *:cursor-pointer 
        *:my-5 h-lvh bg-main-white text-main-red text-3xl`}
      >
        <motion.li
          variants={childVars}
          initial="hide"
          animate={toggleMenu ? "show" : "hide"}
          whileHover="hover"
          onClick={() => handleScroll("#home")}
        >
          Home
        </motion.li>
        <motion.li
          variants={childVars}
          initial="hide"
          animate={toggleMenu ? "show" : "hide"}
          whileHover="hover"
          onClick={() => handleScroll("#products")}
        >
          Products
        </motion.li>
        <motion.li
          variants={childVars}
          initial="hide"
          animate={toggleMenu ? "show" : "hide"}
          whileHover="hover"
          onClick={() => handleScroll("#contact")}
        >
          Contact us
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;

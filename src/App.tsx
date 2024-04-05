import "./App.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Contact />
    </>
  );
}

export default App;

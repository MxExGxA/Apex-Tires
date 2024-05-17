const Product = ({
  prodNumber,
  prodImage,
  prodTitle,
  prodDesc,
}: {
  prodNumber: string;
  prodImage: string;
  prodTitle: string;
  prodDesc: string;
}) => {
  return (
    <div className="product-container min-w-full h-lvh max-xl:h-auto max-xl:mt-10 flex justify-center bg-cover bg-bottom items-center">
      <div className="wrapper w-[90%] flex justify-evenly items-center">
        <div className="product-number text-[250px] font-wallpoet font-black text-main-white self-end leading-[150px] opacity-70 max-2xl:text-[150px] max-xl:hidden">
          <h1>{prodNumber}</h1>
        </div>
        <div
          className="product-card relative w-[900px] max-lg:w-auto h-[450px] border-l-[15px] border-main-red bg-cover bg-bottom p-10 text-main-white font-roboto flex flex-col items-start justify-end"
          style={{ backgroundImage: `url(${prodImage})` }}
        >
          <div className="product-info drop-shadow-md">
            <div className="product-title font-bold text-6xl mb-5 max-sm:text-5xl">
              <h2>{prodTitle}</h2>
            </div>
            <div className="product-description w-4/5 text-xl max-md:line-clamp-3">
              <h3>{prodDesc}</h3>
            </div>
          </div>
          <button className="btn-order bg-main-white text-main-red hover:bg-main-red hover:text-main-white transition-colors duration-300 text-xl px-10 py-3 mt-5 font-bold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

const Slide = ({ text, spanText }: { text: string; spanText: string }) => {
  return (
    <div className="slide h-lvh flex justify-center items-center">
      <h2 className="slide-text text-main-dark leading-[120px] w-[80%] max-2xl:text-6xl">
        {text} <br />
        <span className="text-different text-main-red">{spanText}</span>
      </h2>
    </div>
  );
};

export default Slide;

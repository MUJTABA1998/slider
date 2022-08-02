import { useEffect, useState } from "react";
import "./App.css";
import people from "./data";
import Review from "./Review";

function App() {
  const [index, setIndex] = useState(2);

  const { name, type, url, comment } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(slider);
  });

  return (
    <div className="w-full h-screen">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center w-full gap-28">
          <h1 className="text-5xl tracking-widest text-secondary">
            <span className="text-[#ff7f50] mr-3">/</span>Reviews
          </h1>
          <Review
            name={name}
            type={type}
            url={url}
            comment={comment}
            next={handleNext}
            prev={handlePrev}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

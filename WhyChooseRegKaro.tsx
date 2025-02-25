import React from "react";
import { Sparkle, StarFour } from "phosphor-react";
import Marquee from "react-fast-marquee";
const WhyChooseRegKaro = () => {
  const reasonArray = [
    "Hassle Free Documentation",
    "Dedicated Support",
    "Quick Turnaround",
    "Expert Guidance",
  ];
  const bgImage = {
    backgroundImage: `url(https://img.freepik.com/free-vector/abstract-perspective-grid-line-pattern-white-background_1017-56022.jpg?t=st=1740125346~exp=1740128946~hmac=36a43e2975bc6d06aeaa4af0116839734e7ffe604e3d4b494669f2e32900455e&w=826)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "5500",
    width: "8000",
  };
  return (
    <section style={bgImage} className="whychoose-section">
      <div className="whychoose-main-container">
        <div className="whychoose-header-container">
          <span className="whychoose-sparkle-img">
            <Sparkle weight="fill" />
          </span>
          <div className="whychoose-header-title">
            <h4>Value Propostion</h4>
            <h1>
              <span>Why to Choose</span> RegisterKaro
            </h1>
          </div>
        </div>
      </div>
      <Marquee speed={50} gradient pauseOnHover>
        {reasonArray.map((reason, index) => (
          <div key={index} className="marque-card-container">
            <div className="icon-container">
              <StarFour weight="fill" />
            </div>
            <h2>{reason}</h2>
          </div>
        ))}
      </Marquee>
      <Marquee
        style={{ marginTop: "20px" }}
        speed={50}
        direction="right"
        gradient
        pauseOnHover
      >
        {reasonArray.map((reason, index) => (
          <div key={index} className="marque-card-container">
            <div className="icon-container">
              <StarFour weight="fill" />
            </div>
            <h2>{reason}</h2>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default WhyChooseRegKaro;

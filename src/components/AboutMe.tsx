import React from "react";
import SmallCard from "./SmallCard";

const AboutMe = () => {
  return (
    <div className="container_my">
      <div>
        <div>
          <p>About Me</p>
          <h1>Boost Business Strategic Solutions with Us</h1>
          <h3>
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </h3>
        </div>
        <div>
          <SmallCard />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

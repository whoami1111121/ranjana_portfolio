import React from "react";
import SmallCard from "./SmallCard";
import { Aave } from "iconsax-reactjs";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="container_my mainTopBottomPadding">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 ">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="topSubHeading">About Me</h1>
            <h1 className="heading">
              Boost Business Strategic Solutions with Us
            </h1>
            <h3 className="contextText">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </h3>
          </div>
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <SmallCard
              title="Business Consulting"
              content="Business consulting consultants provide expert advice."
              hoverBg={true}
              icon={<Aave size="32" />}
              icontype="icon"
            />
            <SmallCard
              title="Business Consulting"
              content="Business consulting consultants provide expert advice."
              hoverBg={true}
              icon={<Aave size="32" />}
              icontype="icon"
            />
            {/* <SmallCard /> */}
          </div>
        </div>
        <div className="flex-1">{/* <SmallCard /> */}</div>
      </div>
    </div>
  );
};

export default AboutMe;

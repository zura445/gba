import React from "react";
import { homePageSection } from "../homePagesection";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex flex-row flex-wrap md:h-800">
        <div className="w-full md:w-3/4 h-64 md:h-full relative">
          <img src="image/logo.png" alt="" className="absolute w-24 h-24 mt-20 ml-20"/>
          <a
            className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
            href="#"
            title="Link"
            style={{ backgroundImage: "url(image/home.jpg)" }}
          >
            <span className="text-white text-7xl absolute bottom-10 w-2/4 h-1/7 translate-x-1/4 translate-y-0">საქართველოს ბარმენთა ასოციაცია</span>
          </a>
        </div>
        <div className="w-full md:w-1/4">
          <div className="flex flex-col sm:flex-row md:flex-col">
            <div className="w-full sm:w-1/2 md:w-full h-400 sm:mb-0 relative">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{ backgroundImage: "url(image/ice-wite.jpg)" }}
              > 
                <span className="text-white text-2xl absolute bottom-5 w-2/4 h-1/7 translate-x-3/4 translate-y-0">
                  სწავლება
                </span>
              </a>
            </div>
            <div className="w-full sm:w-1/2 md:w-full h-400 sm:mb-0 relative">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{ backgroundImage: "url(image/ice.jpg)" }}
              >
                <span className="text-white text-2xl absolute bottom-5 w-2/4 h-1/7 translate-x-3/4 translate-y-0">
                  მომსახურება
                </span>
              </a>
            </div>
          </div>
        </div>

        {homePageSection.map((item: any) => (
          <div className="w-full sm:w-1/3 h-96 md:h-80 relative">
            <a
              className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
              href={item.Link}
              title="Link"
              style={{ backgroundImage: `url(${item.Image})` }}
            >
              <div className="text-white text-2xl absolute bottom-5 w-2/4 h-1/7 translate-x-3/4 translate-y-0">
                {item.text}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

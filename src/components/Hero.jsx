import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero">
      <div className="row ">
        <div
          className="col-6 mt-5 p-5
              "
        >
          <div className="row">
            <h1
              className=" p-3"
              style={{ fontSize: "3.5rem" }}
            >
              <b style={{display:'flex'}}>
                              <span style={{ color: "#8675E1" }}>Learn-{" "}</span> with-{" "} 
                 <span>  <Typewriter
                  options={{
                    strings: ["Love", "Babbar"],
                    autoStart: true,
                    loop: true,
                  }}
                /></span>
              </b>
            </h1>
          </div>
          <div className="row mt-3">
            <h3 style={{fontSize:'2rem'}}>
              The Ultimate Guide To Ace <br />
              SDE Interviews.
            </h3>
          </div>
          <div className="row mt-2">
            <div className="hero-button ">
              <button
                className="btn btn-primary p-3 ml-3 "
                style={{ backgroundColor: "#8675E1", width: "12rem" }}
              >
                View Courseaaaa
              </button>
              <button
                className="btn btn-light p-3 m-3"
                style={{ border: "1px solid #000", width: "12rem" }}
              >
                Watch video
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-6 mt-5"
          style={{ backgroundColor: "red", height: "90vh" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;

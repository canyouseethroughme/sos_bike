import React from "react";
import Navbar2 from "../components/sections/Navbar2";
import Footer from "../components/sections/Footer";

const ComingSoon = () => {
  return (
    <div>
      <Navbar2 />
      <div className="imgContainer">
        <img src="static/signnwhite.png" width={200} height={200} />
      </div>
      <Footer />
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #1c1713;
        }
      `}</style>
      <style jsx>{`
        .imgContainer {
          display: flex;
          justify-content: center;
          background-color: #1c1713;
        }
        .imgContainer > img {
          margin-top: 200px;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;

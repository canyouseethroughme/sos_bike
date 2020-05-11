import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HamburgerVortexReverse } from "react-animated-burgers";

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuPosition, setMenuPostition] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    const url = window.location.href.split("/")[3];
    console.log(window.location.href.split("/"));
    console.log("url here", url);
    setMenuPostition(url);
  }, []);
  const toggleButton = () => {
    setIsActive((prevIsActive) => {
      return !prevIsActive;
    });
  };
  return (
    <div>
      <div className="menuContainer">
        <div>
          <img src="static/logo.png" height={90} width={135} />
        </div>
        <HamburgerVortexReverse
          isActive={isActive}
          toggleButton={toggleButton}
          buttonColor="transparent"
          barColor="white"
          style={{ position: "absolute", right: 0 }}
        />
      </div>
      {isActive && (
        <div className="linksContainer">
          <div className="linkContainer">
            <div className="lineContainer">{menuPosition === ""}</div>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </div>
          <div className="linkContainer">
            <div className="lineContainer">
              {menuPosition === "news" && <div className="lineDiv"></div>}
            </div>
            <Link href="news">
              <a id="fifthChild">BLOG</a>
            </Link>
          </div>
          <div className="linkContainer">
            <div className="lineContainer">
              {menuPosition === "#shopPage" && <div className="lineDiv"></div>}
            </div>
            <Link href="/#shopPage">
              <a id="secondChild">
                SHOP <i className="downArrow"></i>
              </a>
            </Link>
          </div>
          <div className="linkContainer">
            <div className="lineContainer">
              {menuPosition === "#aboutPage" && <div className="lineDiv"></div>}
            </div>
            <Link href="/#aboutPage">
              <a id="fourthChild">ABOUT</a>
            </Link>
          </div>
          <div className="linkContainer">
            <div className="lineContainer">
              {menuPosition === "#whyusPage" && <div className="lineDiv"></div>}
            </div>
            <Link href="/#whyusPage">
              <a id="thirdChild">WHY US</a>
            </Link>
          </div>
          <div className="linkContainer">
            <div className="lineContainer">
              {menuPosition === "recommended" && (
                <div className="lineDiv"></div>
              )}
            </div>
            <Link href="recommended">
              <a id="sixthChild">RECOMMENDED</a>
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .menuContainer{
            display:none;
            position: absolute;
            z-Index: 3;

        }
        .menuContainer > button {
            border-color: none;
        }
        @media only screen and (max-width: 480px) {
            .menuContainer {
                top: 20px;
                width: 100%;
                display: flex;
                flex-direction: row; 
                justify-content: center;
                align-items: center;
            }
            .linksContainer {
                display: flex;

                
                flex-direction: column;
                background-color: #1C1713;
                position: absolute;
                top: 130px;
                z-Index: 10 !important;
                width: 100%;
                height: 100%;

            }
            .linksContainer > div >  a {
                text-decoration: none;
                align: center;
                width: 100px;
                margin-top: 20px;
                font-family: Ronnia, regular;
                font-size: 22px;
                font-weight: bold;
                text-transform: capitalize;
                color: #fafafabf;
            }

            .linkContainer {
              display: flex;
              flex-direction: row;
            }
            .lineContainer{
              width: 120px;
              height: 100%;
              display: flex;
              align-items: center;
            }
            .lineDiv{
              height: 3px;
              width: 30px;
              background-color: #997F67;
              margin-top: 20px;
              margin-left: 70px;
            }
        `}</style>
    </div>
  );
};

export default BurgerMenu;

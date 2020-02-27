import React, { useState } from "react";
import Link from "next/link";
import { HamburgerVortexReverse } from "react-animated-burgers";

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(prevIsActive => {
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
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="news">
            <a id="fifthChild">BLOG</a>
          </Link>
          <Link href="/#shopPage">
            <a id="secondChild">
              SHOP <i className="downArrow"></i>
            </a>
          </Link>
          <Link href="/#aboutPage">
            <a id="fourthChild">ABOUT</a>
          </Link>
          <Link href="/#whyusPage">
            <a id="thirdChild">WHY US</a>
          </Link>
          <Link href="recommended">
            <a id="sixthChild">RECOMMENDED</a>
          </Link>
        </div>
      )}

      <style jsx>{`
        .menuContainer{
            display:none;
            position: absolute;
            z-Index: 2;

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

                align-content: center;
                align-items: center;
                flex-direction: column;
                background-color: #1C1713;
                position: absolute;
                top: 130px;
                z-Index: 10;
                width: 100%;
                height: 100%;

            }
            .linksContainer > a {
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
        `}</style>
    </div>
  );
};

export default BurgerMenu;

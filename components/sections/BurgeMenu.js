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
    <div className="menuContainer">
      <div>
        <img src="static/logo.png" height={90} width={135} />
      </div>
      <div></div>
      <HamburgerVortexReverse
        isActive={isActive}
        toggleButton={toggleButton}
        buttonColor="transparent"
        barColor="white"
        style={{ position: "absolute", right: 0 }}
      />

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
        `}</style>
    </div>
  );
};

export default BurgerMenu;

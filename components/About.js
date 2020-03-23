import DynamicComponentWithNoSSR from "../components/sections/DynamicComponentNoSSR";
import Map from "./sections/Map";
import Link from "next/link";
import { useState, useEffect } from "react";
const About = () => {
  const [mapWidth, setMapWidth] = useState();
  const [mapHeight, setMapHeight] = useState();

  return (
    <div>
      <div id="aboutPage" className="parentContainer">
        <div className="childContainer">
          <h1>About us</h1>
          <div className="borderTop"></div>
          <p>
            SoS Bike is not only a place for everyday cyclers, but for bike
            lovers and zero waste enthusiasts too. Now situated in the center of
            Aarhus accompanying a vintage style barber shop, it is easy to stay
            longer talking about bikes and make new friends at the same time.
            SoS Bike welcomes new customers who are interested in new bikes or
            unique vintage creations; people who need a small fix or people who
            desire a bike from scratch. Our customer base varies as well, from
            students to businessmen who would like to get their bikes fixed or a
            new touch for their existing bikes. Our environmental approach is
            one of a kind: we not only save bikes and bike parts, but restore
            them in a functional and stylish way too. Since Aarhus is a very
            biker centered city with many cyclers, we would like to give our
            best knowledge and experience to all Aarhusians who need our help.
          </p>
          <div className="icons">
            <Link href="https://www.facebook.com/aarhussosbike/">
              <a target="_blank" className="fa">
                &#xf09a;
              </a>
            </Link>
            <Link href="https://www.instagram.com/s0sbike/">
              <a target="_blank" className="fa">
                &#xf16d;
              </a>
            </Link>
          </div>
          <a href="mailto:info@sosbike.dk">
            <button>Contact us</button>
          </a>
        </div>
        <div className="mapContainer" id="mapContainer">
          <Map width={mapWidth} height={mapHeight} />
        </div>
      </div>
      <style jsx>{`
        @import url("https://use.typekit.net/mmi3fys.css");
        .parentContainer {
          position: absolute;
          margin: auto;
          top: 2917px;
          width: 1200px;
          height: 677px;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .childContainer {
          width: 600px;
          position: relative;
        }
        .mapContainer {
          width: 980px;
          position: relative;
        }
        h1 {
          margin-top: 80px;
          font-size: 46px;
          font-family: Farnham Text;
          color: #fafafa;
          letter-spacing: 1px;
          font-weight: 400;
        }
        p {
          margin-right: 118px;
          position: relative;
          top: 115px;
          letter-spacing: 0;
          color: #fafafa;
          font-family: ronnia, regular;
          font-size: 16px;
          font-weight: 300;
          line-height: 20px;
        }
        .borderTop {
          margin-top: 30px;
          position: absolute;
          border-bottom: 5px solid #997f67;
          left: 0%;
          right: 90%;
        }
        .icons {
          position: relative;
          top: 135px;
        }
        .icons > a {
          font-size: 24px;
          color: #fafafa;
          text-decoration: none;
          margin-right: 30px;
        }
        .icons > a:hover {
          color: #997f67;
          transition: 0.3s;
        }
        button {
          position: relative;
          top: 130px;
          margin: 25px auto;
          width: 160px;
          height: 40px;
          background: #997f67 0% 0% no-repeat padding-box;
          border-radius: 29px;
          border: 0;
          outline: 0;
          font-family: ronnia, sans-serif;
          font-size: 14px;
          color: #fafafa;
        }

        button:hover {
          background-color: #fafafa;
          color: #997f67;
          transition: 0.3s;
        }
        @media screen and (max-width: 480px) {
          .parentContainer {
            margin-top: 900px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .childContainer {
            width: 96vw;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          p {
            margin-right: 0px;
            width: 100%;
            position: relative;
            top: 65px;
            letter-spacing: 0;
            color: #fafafa;
            font-family: ronnia, regular;
            font-size: 16px;
            font-weight: 300;
            line-height: 20px;
          }

          .mapContainer {
            width: 100vw;
            height: 400px;
          }
          .overlays {
            width: 100%;
          }
          .borderTop {
            margin-top: -170px;
            width: 70px;
            margin-left: 32px;
          }
          .childContainer > p {
            margin-left: 32px;
            width: 90%;
          }
          .childContainer > h1 {
            margin-left: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;

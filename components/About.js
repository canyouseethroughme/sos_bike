import DynamicComponentWithNoSSR from "../components/sections/DynamicComponentNoSSR";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <div id="aboutPage" className="parentContainer">
        <div className="childContainer">
          <h1>About</h1>
          <div className="borderTop"></div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
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
        <div className="mapContainer">
          <DynamicComponentWithNoSSR />
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
          top: 160px;
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
          top: 160px;
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
      `}</style>
    </div>
  );
};

export default About;

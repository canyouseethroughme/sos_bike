import Navbar2 from "../components/sections/Navbar2";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const Recommended = props => (
  <div>
    <div>
      <Header />
      <Navbar2
        home="/"
        shop="#shopPage"
        custom="custom-bikes"
        retro="retro-bikes"
        new="new-bikes"
        parts="bike-parts"
        whyus="#whyusPage"
        about="#aboutPage"
        recommended="recommended"
      />
    </div>
    <div className="fullTitleContainer">
      <div className="titleContainer">
        <h1>Legal notice</h1>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et
        </p>
      </div>
    </div>
    <div className="tofContainer">
      <div className="smallPageContainer">
        <div className="dateContainer">
          <p>
            14<sup>th</sup>
          </p>
          <p>September</p>
        </div>
        <div className="textContainer">
          <h1>Terms of service</h1>
          <h2>1. Lorem ipsum dolor sit amet</h2>

          <p className="subtitle">1.1 Dolor Sit amet</p>
          <p className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua
          </p>

          <p className="subtitle">1.2 Dolor Sit amet</p>
          <p className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam
          </p>

          <h2>2. Lorem ipsum dolor sit amet</h2>

          <p className="subtitle">2.1 Dolor Sit amet</p>
          <p className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua
          </p>

          <p className="subtitle">2.2 Dolor Sit amet</p>
          <p className="text">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          </p>
        </div>
      </div>
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
      .fullTitleContainer {
        position: relative;
        width: 100vw;
        height: 325px;
        top: 91px;
        display: flex;
        justify-content: center;
        background-image: linear-gradient(
            to bottom,
            rgba(28, 23, 19, 0) 0%,
            rgba(28, 23, 19, 0.8) 51%,
            rgba(28, 23, 19, 1) 75%
          ),
          url("../static/leagal-notice.png");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
      .titleContainer {
        color: red;
        width: 1200px;
      }
      .titleContainer > h1 {
        margin-top: 80px;
        font-family: farnham text;
        color: #fafafa;
        font-weight: bold;
        font-size: 46px;
      }
      .line {
        width: 80px;
        height: 5px;
        margin-top: 30px;
        border-top: 5px solid #997f67;
      }
      .titleContainer > p {
        font-family: Ronnia, sans-serif;
        font-size: 16px;
        color: #fafafa;
        margin-top: 30px;
        width: 895px;
      }
      .tofContainer {
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-top: 84px;
      }
      .smallPageContainer {
        width: 1200px;
        display: flex;
        flex-direction: row;
      }
      .dateContainer > p:first-of-type {
        font-family: ronnia, sans-serif;
        font-size: 36px;
        color: #fafafa;
        font-weight: bold;
      }
      .dateContainer > p {
        font-family: ronnia, sans-serif;
        color: #bcaa88;
        font-size: 14px;
        font-weight: bold;
      }
      .textContainer {
        margin-left: 74px;
      }
      .textContainer > h1 {
        font-family: ronnia, sans-serif;
        font-size: 36px;
        color: #fafafa;
        margin-bottom: 60px;
      }
      .textContainer > h2 {
        font-family: ronnia, sans-serif;
        font-size: 24px;
        color: #fafafa;
        margin-bottom: 40px;
        margin-top: 20px;
      }
      .textContainer > p {
        font-family: ronnia, sans-serif;
        color: #fafafa;
      }
      .subtitle {
        font-weight: bold;
        margin-bottom: 30px;
      }
      .text {
        font-size: 16px;
        font-weight: regular;
        margin-bottom: 40px;
      }
    `}</style>
  </div>
);

export default Recommended;

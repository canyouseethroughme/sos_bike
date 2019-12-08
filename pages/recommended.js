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
      <div className="fullTitleContainer">
        <div className="titleContainer">
          <h1>Recommended by Swapfiets</h1>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et
          </p>
        </div>
      </div>
      <div className="recommendedPageContainer">
        <div className="letterContainer">
          <div className="imageContainer">
            <div>
              <img
                src="../static/recommended/steven_uitentuis_circle.png"
                height={180}
                width={180}
              />
            </div>
            <label>Steven Uitentuis</label>
          </div>
          <div className="textContainer">
            <h1>A love letter</h1>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. 1.2. Dolor Sit amet Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At veres et ea rebum. Stet clita aliquyam erat, sed diam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetasd gubergren, no sea takimata siquyam erat, sed diam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed dt Lorem ipsum dolor sit amet. Lorem ipsum dolor sit am
            </p>
          </div>
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
        background-color: black;
        display: flex;
        justify-content: center;
        background-image: linear-gradient(
            to bottom,
            rgba(28, 23, 19, 0) 0%,
            rgba(28, 23, 19, 0.8) 51%,
            rgba(28, 23, 19, 1) 75%
          ),
          url("../static/recommended/recommended.png");
        background-size: cover;
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
      .recommendedPageContainer {
        width: 100vw;
        display: flex;
        justify-content: center;
      }
      .letterContainer {
        width: 1200px;
        display: flex;
        flex-direction: row;
        padding-top: 84px;
      }
      .imageContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 180px;
      }
      .imageContainer > label {
        margin-top: 30px;
        font-family: ronnia, sans-serif;
        font-weight: bold;
        color: #fafafa;
        font-size: 16px;
      }
      .textContainer {
        margin-left: 119px;
        color: #fafafa;
      }
      .textContainer > h1 {
        font-family: ronnia, sans-serif;
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 80px;
      }
      .textContainer > p {
        font-family: ronnia. sans-serif;
        font-size: 16px;
        margin-bottom: 40px;
      }
    `}</style>
  </div>
);

export default Recommended;

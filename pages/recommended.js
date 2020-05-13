import Navbar2 from "../components/sections/Navbar2";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import CategoryBikes from "../components/sections/CategoryBikes";
import BurgerMenu from "../components/sections/BurgeMenu";

const Recommended = (props) => (
  <div>
    <div>
      <Header />
      <Navbar2
        home="/"
        shop="/#shopPage"
        custom="custom-bikes"
        retro="new-and-retro"
        new="rentals"
        parts="bike-parts"
        whyus="/#whyusPage"
        about="/#aboutPage"
        recommended="recommended"
      />
      <BurgerMenu />
      <div className="fullTitleContainer">
        <div className="titleContainer">
          <CategoryBikes category="Recommended" />
        </div>
      </div>
      <div className="recommendedPageContainer">
        <div className="letterContainer">
          <div className="imageContainer">
            <div>
              <img
                src="../static/recommended/pic.jpg"
                height={180}
                width={180}
                style={{ borderRadius: "50% ", marginTop: "11px" }}
              />
            </div>
            <label>Patrick Maron Limmose</label>
          </div>
          <div className="textContainer">
            <h1>A love letter</h1>
            <p>
              Radu, the mechanic from SoSBike, is not just a bike mechanic! Radu
              is THE bike mechanic! He is super fast and doesn't compromise on
              the quality! You know it’s 100% okay, when he has repaired or made
              something for you! I will recommend Radu any day of the week!
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
        width: 1200px;
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
        width: 70%;
        margin-bottom: 40px;
      }

      @media only screen and (max-width: 480px) {
        .fullTitleContainer {
          top: 0;
        }
        .letterContainer {
          padding-top: 0px;
          flex-direction: column;
        }
        .imageContainer {
          justify-content: center;
          width: 100%;
        }
        .textContainer {
          margin-left: 20px;
        }
        .textContainer > h1 {
          margin-bottom: 20px;
          margin-top: 40px;
        }
        .textContainer > p {
          width: 90%;
          margin-bottom: 20px;
        }
      }
    `}</style>
  </div>
);

export default Recommended;

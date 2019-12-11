// import Link from "next/link";
import Link from "next/link";

const Footer = props => (
  <div>
    <div className="fullContainer">
      <div className="footerContainer">
        <div className="logoContainer">
          <img src="static/logo.png" height={100} width={150} />
          <p>© 2019 - Sosbike, ApS, Aarhus, Denmark. All rights reserved</p>
        </div>
        <div className="sectionsContainer">
          <div className="legalContainer">
            <label className="sectionLabel">Legal</label>
            <div className="sectionLinks">
              <a href="google.com">Cookies</a>
              <a href="terms-of-service">Terms of Service</a>
              <a href="google.com">Privacy policy</a>
            </div>
          </div>
          <div className="blogContainer">
            <label className="sectionLabel">Blog</label>
            <div className="sectionLinks">
              <a href="news">News</a>
            </div>
          </div>
          <div className="bikesContainer">
            <label className="sectionLabel">Bikes</label>
            <div className="sectionLinks">
              <a href="/retro-bike">Retro</a>
              <a href="google.com">Custom</a>
              <a href="google.com">New</a>
              <a href="google.com">Parts</a>
            </div>
          </div>
          <div className="aboutContainer">
            <label className="sectionLabel">About</label>
            <div className="sectionLinks">
              <a href="google.com">Story</a>
            </div>
          </div>
          <div className="socialContainer">
            <label className="sectionLabel">Social</label>
            <div className="iconsContainer">
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
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      @import url("https://use.typekit.net/mmi3fys.css");
      .fullContainer {
        margin-top: 164px;
        width: 100vw;
        height: 200px;
        border-top: 5px solid #bcaa88;
        background-color: #1c1713;
        display: flex;
        justify-content: center;
      }
      .footerContainer {
        width: 1200px;
        height: 100%;
        display: flex;
        flex-direction: row;
      }
      .logoContainer > img {
        margin-top: 30px;
      }
      .logoContainer > p {
        color: #fafafa;
        font-family: ronnia, sans-serif;
        font-size: 12px;
        font-weight: lighter;
        margin-top: 30px;
        width: 309px;
      }
      .sectionsContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 30px;
        justify-content: space-between;
        margin-left: 71px;
      }
      .sectionLabel {
        color: #bcaa88;
        font-family: ronnia, sans-serif;
        font-size: 14px;
        font-weight: bold;
      }
      .sectionLinks {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
      }
      .sectionLinks > a {
        text-decoration: none;
        color: #fafafa;
        margin-top: 10px;
        font-family: Ronnia, regular;
        font-size: 12px;
      }
      .iconsContainer {
        margin-top: 40px;
      }
      .fa {
        font-size: 24px;
        color: #fafafa;
        text-decoration: none;
        margin-right: 30px;
      }
    `}</style>
  </div>
);

export default Footer;

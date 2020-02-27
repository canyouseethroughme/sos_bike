import Link from "next/link";
import Head from "next/head";

const Navbar2 = props => (
  <div className="navbar">
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
    </Head>
    <nav>
      <ul>
        <Link href="/">
          <a>
            <img src="static/logo.png" />
          </a>
        </Link>
        <Link href={props.home}>
          <a id="firstChild">Home</a>
        </Link>

        <div className="dropdown">
          <Link href={props.shop}>
            <a id="secondChild">
              Shop <i className="downArrow"></i>
            </a>
          </Link>
          <div className="dropdownContent">
            <Link href={props.retro}>
              <a>New & Retro bikes</a>
            </Link>
            <Link href={props.new}>
              <a>Rentals</a>
            </Link>
            <Link href={props.parts}>
              <a>Bike parts</a>
            </Link>
          </div>
        </div>

        <Link href={props.whyus}>
          <a id="thirdChild">Why us</a>
        </Link>
        <Link href={props.about}>
          <a id="fourthChild">About</a>
        </Link>
        <Link href={"news"}>
          <a id="fifthChild">Blog</a>
        </Link>
        <Link href={"recommended"}>
          <a id="sixthChild">Recommended</a>
        </Link>
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
      </ul>
    </nav>

    <style jsx>{`
      nav {
        width: 100vw;
        background-color: #1c1713;
        border-bottom: 5px solid #997f67;
        position: fixed;
        z-index: 5;
      }
      nav > ul {
        width: 1200px;
        height: 90px;
        margin: auto;
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-items: left;
      }

      nav > ul > a,
      .dropdown > a {
        font-family: ronnia, sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        color: #fafafa;
        letter-spacing: 0;
      }

      i {
        border: solid #fafafa;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 2px;
        margin-bottom: 3px;
        margin-left: 3px;
        transform: rotate(45deg);
      }

      .dropdown {
        position: relative;
        display: grid;
        justify-self: start;
      }

      .dropdownContent {
        display: none;
        position: absolute;
        top: 17px;
        left: -30px;
        z-index: 10;
        width: 160px;
        height: 131px;
        border-radius: 6px;
        background: #1c1713 0% 0% no-repeat padding-box;
      }
      .dropdownContent > a {
        font-family: Ronnia, regular;
        font-size: 14px;
        font-weight: 300;
        text-transform: capitalize;
        color: #fafafabf;
        padding-left: 30px;
      }

      .dropdownContent > a:hover {
        border-left: 10px solid #bcaa88;
      }

      .dropdown:hover .dropdownContent {
        display: grid;
        align-items: center;
      }
      a {
        color: #fafafa;
        text-decoration: none;
      }
      nav > ul > a:hover,
      .dropdown > a:hover,
      a:hover {
        color: #997f67;
        transition: 0.3s;
      }
      ul > a > img {
        width: 90px;
        height: 60px;
      }
      .icons {
        border-left: 1px solid #997f67;
        padding-left: 30px;
      }
      .icons > a:last-child {
        padding-left: 10px;
      }
      #sixthChild {
        margin-right: 30px;
      }

      @media only screen and (max-width: 480px) {
        .navbar {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Navbar2;

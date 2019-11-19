import Link from "next/link";

const Navbar = props => (
  <div>
    <nav>
      <ul>
        <Link href={props.home}>
          <a id="firstChild">Home</a>
        </Link>
        <Link href={props.blog}>
          <a id="secondChild">Blog</a>
        </Link>

        <div className="dropdown">
          <Link href={props.shop}>
            <a id="thirdChild">
              Shop <i className="downArrow"></i>
            </a>
          </Link>
          <div className="dropdownContent">
            <Link href={props.custom}>
              <a>Custom bikes</a>
            </Link>
            <Link href={props.retro}>
              <a>Retro bikes</a>
            </Link>
            <Link href={props.new}>
              <a>New bikes</a>
            </Link>
            <Link href={props.parts}>
              <a>Bike parts</a>
            </Link>
          </div>
        </div>

        <Link href="/">
          <a>
            <img src="static/logo.png" />
          </a>
        </Link>
        <Link href={props.whyus}>
          <a id="fourthChild">Why us</a>
        </Link>
        <Link href={props.about}>
          <a id="fifthChild">About</a>
        </Link>
        <Link href={props.recommended}>
          <a id="sixthChild">Recommended</a>
        </Link>
      </ul>
    </nav>
    <style jsx>{`
      @import url("https://use.typekit.net/mmi3fys.css");
      nav {
        width: 855px;
        height: 140px;
        padding-top: 50px;
        margin: auto;
      }
      nav > ul {
        height: 90px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        align-items: center;
        justify-items: center;
      }

      a {
        font-family: ronnia, sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        color: #fafafa;
        letter-spacing: 0;
      }

      a:hover {
        color: #997f67;
        transition: 0.3s;
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
        justify-self: center;
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

      .dropdown:hover .dropdownContent {
        display: grid;
        align-items: center;
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

      img {
        height: 90px;
      }
    `}</style>
  </div>
);

export default Navbar;

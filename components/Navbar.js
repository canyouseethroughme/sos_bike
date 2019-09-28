import Link from "next/link";

const Navbar = () => (
  <div>
    <nav>
      <ul>
        <Link href="">
          <a id="firstChild">Home</a>
        </Link>

        <div className="dropdown">
          <Link href="">
            <a id="secondChild">
              Shop <i className="downArrow"></i>
            </a>
          </Link>
          <div className="dropdownContent">
            <Link href="#">
              <a>Vintage</a>
            </Link>
            <Link href="#">
              <a>Retro</a>
            </Link>
            <Link href="#">
              <a>Refurbished</a>
            </Link>
          </div>
        </div>

        <Link href="#">
          <a>
            <img src="static/logo.png" />
          </a>
        </Link>
        <Link href="">
          <a id="thirdChild">Why us</a>
        </Link>
        <Link href="">
          <a id="fourthChild">About</a>
        </Link>
      </ul>
    </nav>
    <style jsx>{`
      @import url("https://use.typekit.net/mmi3fys.css");
      nav {
        width: 640px;
        height: 140px;
        padding-top: 50px;
        margin: auto;
      }
      nav > ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
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
      #firstChild {
        justify-self: start;
      }
      #thirdChild,
      #fourthChild {
        justify-self: end;
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
        justify-self: start;
      }

      .dropdownContent {
        display: none;
        position: absolute;
        top: 18px;
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

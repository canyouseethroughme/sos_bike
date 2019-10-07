import Link from "next/link";

const Bikes = () => {
  return (
    <div>
      <div id="shopPage" className="parentContainer">
        <div className="h1Container">
          <div className="borderCenter">
            <span></span>
          </div>
          <h1>Find something that fits you</h1>
          <div className="borderCenter">
            <span></span>
          </div>
        </div>
        <div className="h4Container">
          <div className="borderTop"></div>
          <h4>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </h4>
        </div>
        <div className="containerBikes">
          <div className="bike">
            <img src="static/bikes_assets/new.png" />
            <Link href="#">
              <span>
                <a>
                  View more <span>&#43;</span>
                </a>
              </span>
            </Link>
            <p>New bikes</p>
          </div>
          <div className="bike">
            <img src="static/bikes_assets/custom.png" />
            <Link href="#">
              <span>
                <a>
                  View more <span>&#43;</span>
                </a>
              </span>
            </Link>
            <p>Custom bikes</p>
          </div>
          <div className="bike">
            <img src="static/bikes_assets/retro.png" />
            <Link href="#">
              <span>
                <a>
                  View more <span>&#43;</span>
                </a>
              </span>
            </Link>
            <p>Retro bikes</p>
          </div>
          <div className="bike">
            <img src="static/bikes_assets/parts.png" />
            <Link href="#">
              <span>
                <a>
                  View more <span>&#43;</span>
                </a>
              </span>
            </Link>
            <p>Bike parts</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @import url("https://use.typekit.net/mmi3fys.css");
        .parentContainer {
          height: 1242px;
          margin: auto;
          padding-top: 140px;
        }

         {
          /* ---------------------- */
        }
         {
          /* ---------------------- */
        }
        .containerBikes {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          width: 100%;
          grid-gap: 20px;
        }
        .bike {
          width: 590px;
          height: 274px;
          margin-bottom: 60px;
          border-top: 5px solid #997f67;
          position: relative;
        }
        .bike > img {
          width: 590px;
        }

        .bike > span {
          position: absolute;
          left: 0px;
          top: 205px;
          width: 140px;
          height: 40px;
          background: #1c1713 0% 0% no-repeat padding-box;
          opacity: 0.8;
          display: grid;
          align-items: center;
        }
        .bike > span:hover {
          opacity: 1;
          transition: 0.3s;
        }

        .bike > span > a {
          text-decoration: none;
          font-family: ronnia, regular;
          letter-spacing: 0.24px;
          color: #fafafa;
          font-weight: 300;
          font-size: 12px;
          padding-left: 10px;
        }
        .bike > span > a > span {
          padding-left: 35px;
          font-size: 25px;
        }

        .bike > p {
          margin-top: 20px;
          padding-left: 10px;
          font-family: ronnia, regular;
          font-size: 14px;
          font-weight: 300;
          color: #fafafa;
        }

         {
          /* --------------------- */
        }
         {
          /* --------------------- */
        }

        .h1Container {
          height: 90px;
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          grid-gap: 20px;
          margin: auto;
        }
        .borderCenter {
          border-bottom: 1px solid #fafafa;
          margin-bottom: 65px;
        }

        h1 {
          width: 100%;
          text-align: center;
          line-height: 0.1em;
          margin: 20px 0 10px;
          font-size: 46px;
          font-family: Farnham Text;
          color: #fafafa;
          letter-spacing: 3px;
          font-weight: 400;
        }

        .h4Container {
          position: relative;
        }
        .borderTop {
          position: absolute;
          left: 43%;
          right: 43%;
          border-bottom: 5px solid #997f67;
        }
        h4 {
          width: 920px;
          margin: auto;
          padding: 60px 0 100px;
          text-align: center;
          letter-spacing: 0.32px;
          line-height: 26px;
          font-family: ronnia, regular;
          font-size: 16px;
          font-weight: 300;
          color: #fafafa;
        }
      `}</style>
    </div>
  );
};

export default Bikes;

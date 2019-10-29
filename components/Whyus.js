const Whyus = () => {
  return (
    <div>
      <div id="whyusPage" className="parentContainer">
        <div className="childContainer">
          <div className="h1Container">
            <h1>Why you should choose us</h1>
            <div className="borderCenter">
              <span></span>
            </div>
          </div>
          <div className="borderTop"></div>
          <div className="cardContainer">
            <div>
              <h2>01</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
              </p>
              <img src="static/bikes_assets/1-edited@2x.png" alt="" />
            </div>
            <div style={{ margin: "0 120px" }}>
              <h2>02</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
              </p>
              <img src="static/bikes_assets/2-edited@2x.png" alt="" />
            </div>
            <div>
              <h2>03</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
              </p>
              <img src="static/bikes_assets/3-edited@2x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @import url("https://use.typekit.net/mmi3fys.css");
        .parentContainer {
          position: absolute;
          left: 0;
          background: linear-gradient(
              rgb(28, 23, 19, 0.93),
              rgb(28, 23, 19, 0.93)
            ),
            url("static/bikes_assets/background.png") no-repeat;
          background-size: cover;
          width: 100vw;
          height: 720px;
        }
        .childContainer {
          width: 1200px;
          margin: auto;
          padding-top: 80px;
          position: relative;
        }
        .h1Container {
          height: 55px;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
        }
        .borderCenter {
          border-bottom: 1px solid #fafafa;
          margin-bottom: 25px;
        }
        h1 {
          font-size: 46px;
          font-family: Farnham Text;
          color: #fafafa;
          letter-spacing: 1px;
          font-weight: 400;
        }
        .borderTop {
          margin-top: 30px;
          position: absolute;
          border-bottom: 5px solid #997f67;
          left: 0%;
          right: 90%;
        }
        .cardContainer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          height: 336px;
          width: 280px;
          padding: 120px 46px;
        }
        .cardContainer > div > h2 {
          color: #997f67;
          font-family: ronnia, sans-serif;
          letter-spacing: 0.76px;
          font-size: 38px;
          margin-bottom: 20px;
        }
        .cardContainer > div > p {
          font-family: ronnia, sans-serif;
          font-size: 16px;
          font-weight: 300;
          color: #fafafa;
          margin-bottom: 20px;
        }
        .cardContainer > div > img {
          width: 280px;
        }
      `}</style>
    </div>
  );
};

export default Whyus;

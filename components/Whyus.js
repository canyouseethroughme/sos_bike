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

              <p className="paragraph">
                For us, professional craftsmanship combined with exclusive
                customer care is number one priority – we provide our best
                knowledge so everyone who comes to us can feel welcomed and
                cared for.
              </p>
              <img src="static/bikes_assets/1-edited@2x.png" alt="" />
            </div>
            <div className="secondParagraphContainer">
              <h2>02</h2>
              <p className="paragraph">
                Most of our vintage bikes are made up of 100% upcycled materials
                and restored in a very eccentric way; environmental care and
                sustainability plays a huge role in our business too.
              </p>
              <img src="static/bikes_assets/2-edited@2x.png" alt="" />
            </div>
            <div>
              <h2>03</h2>
              <p className="paragraph">
                We work closely with local bike shops and suppliers. We always
                select the best quality bike frames and parts for our vintage
                and new bikes as well; environmental care and sustainability
                plays a huge role in our business too.
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
        .paragraph {
          height: 115;
        }
        .childContainer {
          width: 1200px;
          margin: auto;
          padding-top: 80px;
          position: relative;
        }
        .secondParagraphContainer {
          margin: 0 120px;
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
        @media screen and (max-width: 480px) {
          .parentContainer {
            height: 1600px;
          }
          .childContainer {
            width: 96vw;
          }
          .cardContainer {
            display: flex;
            flex-direction: column;
          }
          .secondParagraphContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
            margin-top: 30px;
          }
          .h1Container {
            height: 55px;
            width: 100%;
            display: grid;
            grid-template-columns: 1.3fr 1fr;
          }
          h1 {
            font-size: 32px;
            width: 70%;
          }
          .borderCenter {
            margin-top: -30px;
          }
          .borderTop {
            margin-top: 120px;
          }
          .paragraph {
            width: 70vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Whyus;

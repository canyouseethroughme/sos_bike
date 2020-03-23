import Header from "../components/sections/Header";
import Navbar from "../components/sections/Navbar";
import Navbar2 from "../components/sections/Navbar2";
import Slider from "../components/Slider";
import Bikes from "../components/Bikes";
import Whyus from "../components/Whyus";
import About from "../components/About";
import Footer from "../components/sections/Footer";
import NewsLink from "../components/sections/NewsLink";
import BurgetMenu from "../components/sections/BurgeMenu";

import Link from "next/link";

class Index extends React.Component {
  state = {
    hasAnimation: false,
    active: 0,
    news: []
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    fetch(
      "https://sosbike.dk/wordpress/wp-json/wp/v2/news_and_stuff?per_page=100"
    )
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({ news: jsonRes });
      });

    let direction = window.location.href.split("#");
    if (
      direction.length > 1 &&
      (direction[1] === "aboutPage" || direction[1] === "whyusPage")
    ) {
      setTimeout(() => {
        document.getElementById("#" + direction[1]).scrollIntoView({
          behavior: "smooth"
        });
      }, 300);
    }
  }

  handleScroll = () => {
    const { pageYOffset } = window;
    const { active } = this.state;

    if (pageYOffset >= 950 && active === 0) {
      this.setState({ active: 1 }), this.setState({ hasAnimation: true });
    } else if (pageYOffset < 950 && active === 1) {
      this.setState({ active: 0 }), this.setState({ hasAnimation: false });
    }
  };
  render() {
    const { active } = this.state;
    const { hasAnimation } = this.state;
    const newsImgs = this.state.news.map((item, index) => {
      return (
        <div key={index}>
          <NewsLink
            kye={item.id}
            url={`/news-description?type=&id=${item.id}`}
            imgSrc={item.acf.news_image.url}
            title={item.title.rendered}
          />
        </div>
      );
    });

    return (
      <div>
        <Header />
        <div className="content">
          <div className="bigNavbar">
            <Navbar
              home="/"
              shop="#shopPage"
              custom="custom-bikes"
              retro="new-and-retro"
              new="rentals"
              parts="bike-parts"
              whyus="#whyusPage"
              about="#aboutPage"
              recommended="recommended"
            />
          </div>
          <BurgetMenu />
          <div id={active && "scrolled"} className="navbarSecond">
            <Navbar2
              home="/"
              shop="#shopPage"
              custom="custom-bikes"
              retro="new-and-retro"
              new="rentals"
              parts="bike-parts"
              whyus="#whyusPage"
              about="#aboutPage"
              recommended="recommended"
            />
          </div>
          <div>
            <div className="sliderContainer">
              <Slider />
            </div>
            <Bikes />
            <div className="whyUsContainer">
              <Whyus />
            </div>
            <div className="aboutContainer">
              <About id="aboutPage" />
            </div>
          </div>
        </div>

        <div className="mainContainer">
          <div className="swapfiets">
            <div className="brownShadow">
              <div className="imgDiv">
                <Link href={"https://www.facebook.com/tinyhousetransylvania/"}>
                  <img
                    className="imgClass"
                    src={"../static/partners/ecotiny.png"}
                    width={174}
                    height={"auto"}
                  />
                </Link>
              </div>
              <div className="imgDiv">
                <Link href={"http://greenon.dk/"}>
                  <img
                    className="imgClass"
                    src={"../static/partners/greenon.png"}
                    width={174}
                    height={"auto"}
                  />
                </Link>
              </div>
              <div className="imgDiv">
                <Link href={"https://swapfiets.dk/"}>
                  <img
                    className="imgClass"
                    src={"../static/partners/swapfiets@2x.png"}
                    width={174}
                    height={"auto"}
                  />
                </Link>
              </div>
              <div className="imgDiv">
                <Link href={"https://www.facebook.com/vaerdicentralen"}>
                  <img
                    className="imgClass"
                    src={"../static/partners/vaerdicentralen@2x.png"}
                    width={174}
                    height={"auto"}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="newsTitleContainer">
            <h1 className="newsTitle">News</h1>
            <div className="line"></div>
          </div>
          <div className="newsSlider">{newsImgs}</div>
          <div className="footerContainer">
            <Footer />
          </div>
        </div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          html {
            scroll-behavior: smooth;
            overflow-x: hidden;
          }

          body {
            background-color: #1c1713;
            border-top: 5px solid #997f67;
          }
        `}</style>

        <style jsx>{`
          .mainContainer {
            position: absolute;
            top: 3594px;
          }
          .swapfiets {
            background-image: url("../static/recommended/recommended.png");
            background-size: cover;
            background-repeat: no-repeat;
            width: 100vw;
            height: 364px;
          }
          .brownShadow {
            width: 100vw;
            height: 364px;
            background-color: #1c1713f2;
            opacity: 95%;
            display: flex;
            flex-direction: row;
          }
          .newsSlider {
            margin-top: 100px;
            display: flex;
            flex-direction: row;
            overflow-x: scroll;
            width: 100vw;
          }
          .line {
            width: 60px;
            height: 5px;
            background-color: #997f67;
            margin-top: 30px;
          }
          .newsTitle {
            margin-top: 80px;
            font-family: "Farnham Text";
            font-weight: bold;
            font-size: 46px;
            color: #fafafa;
          }
          .newsTitleContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .imgDiv {
            display: flex;
            width: 25%;
            height: 100%;
            justify-content: center;
            align-items: center;
          }
          .imgClass {
            object-fit: cover;
          }
          .content {
            margin: auto;
            width: 1200px;
            min-height: 100vh;
          }
          .newsSlider::-webkit-scrollbar {
            display: none;
          }

          .navbarSecond {
            position: absolute;
            top: -90px;
            left: 0;
          }
          .footerContainer {
            margin-top: -168px;
          }

          #scrolled {
            position: absolute;
            animation: navOn 0.3s linear forwards;
          }

          @media screen and (max-width: 480px) {
            .content {
              max-width: 100vw;
            }
            .mainContainer {
              margin-top: 500px;
            }
            .bigNavbar {
              display: none;
            }
            .sliderContainer {
              margin-top: 30px;
            }
            .whyUsContainer {
              margin-top: 150px;
            }
            .swapfiets {
              margin-top: 585px;
              height: 692px;
              background-position: center;
            }

            .brownShadow {
              height: 692px;
              flex-direction: column;
              align-items: center;
            }

            .newsTitleContainer {
              display: none;
            }
            .newsSlider {
              display: none;
            }
          }

          @keyframes navOn {
            13% {
              top: -86px;
            }
            33% {
              top: -66px;
            }
            49% {
              top: -46px;
            }
            66% {
              top: -33px;
            }
            86% {
              top: -13px;
            }
            100% {
              top: 0;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Index;

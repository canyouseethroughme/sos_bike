import Header from "../components/sections/Header";
import Navbar from "../components/sections/Navbar";
import Navbar2 from "../components/sections/Navbar2";
import Slider from "../components/Slider";
import Bikes from "../components/Bikes";
import Whyus from "../components/Whyus";
import About from "../components/About";
import Footer from "../components/sections/Footer";

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
        console.log(jsonRes);
        this.setState({ news: jsonRes }, () => {
          console.log(this.state.news);
        });
      });
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
    const newsImgs = this.state.news.map(item => {
      return (
        <div>
          <Link href={`/news-description?type=&id=${item.id}`}>
            <img src={item.acf.news_image.url} height={206} width={206} />
          </Link>
        </div>
      );
    });

    return (
      <div>
        <Header />
        <div className="content">
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
            <Slider />
            <Bikes />
            <Whyus />
            <About />
          </div>
        </div>

        <div style={{ position: "absolute", top: "3594px" }}>
          <div
            className="swapfiets"
            style={{ width: "100vw", height: "364px" }}
          >
            <div
              className="brownShadow"
              style={{
                width: "100vw",
                height: "364px",
                backgroundColor: "#1C1713F2",
                opacity: "95%",
                display: "flex",
                flexDirection: "row"
              }}
            >
              <div className="imgDiv">
                <Link href={"https://www.facebook.com/tinyhousetransylvania/"}>
                  <img
                    src={"../static/partners/ecotiny.png"}
                    width={174}
                    height={"auto"}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="imgDiv">
                <Link href={"http://greenon.dk/"}>
                  <img
                    src={"../static/partners/greenon.png"}
                    width={174}
                    height={"auto"}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="imgDiv">
                <Link href={"https://swapfiets.dk/"}>
                  <img
                    src={"../static/partners/swapfiets@2x.png"}
                    width={174}
                    height={"auto"}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="imgDiv">
                <Link href={"https://www.facebook.com/vaerdicentralen"}>
                  <img
                    src={"../static/partners/vaerdicentralen@2x.png"}
                    width={174}
                    height={"auto"}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h1
              style={{
                marginTop: "80px",
                fontFamily: "Farnham Text",
                fontWeight: "semi-bold",
                fontSize: "46px",
                color: "#FAFAFA"
              }}
            >
              News
            </h1>
            <div
              style={{
                width: "60px",
                height: "5px",
                backgroundColor: "#997F67",
                marginTop: "30px"
              }}
            ></div>
          </div>
          <div
            className="newsSlider"
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
              width: "100vw"
            }}
          >
            {newsImgs}
          </div>
          <div style={{ marginTop: "-168px" }}>
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
          .swapfiets {
            background-image: url("../static/recommended/recommended.png");
            background-size: cover;
            background-repeat: no-repeat;
          }
          .imgDiv {
            display: flex;
            width: 25%;
            height: 100%;
            justify-content: center;
            align-items: center;
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

          #scrolled {
            position: absolute;
            animation: navOn 0.3s linear forwards;
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

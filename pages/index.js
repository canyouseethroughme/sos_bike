import Header from "../components/sections/Header";
import Navbar from "../components/sections/Navbar";
import Navbar2 from "../components/sections/Navbar2";
import Slider from "../components/Slider";
import Bikes from "../components/Bikes";
import Whyus from "../components/Whyus";
import About from "../components/About";

class Index extends React.Component {
  state = {
    hasAnimation: false,
    active: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
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

    return (
      <div>
        <Header />

        <div className="content">
          <Navbar
            home="/"
            shop="#shopPage"
            custom="custom-bikes"
            retro="retro-bikes"
            new="new-bikes"
            parts="bike-parts"
            whyus="#whyusPage"
            about="#aboutPage"
          />
          <div id={active && "scrolled"} className="navbarSecond">
            <Navbar2
              home="/"
              shop="#shopPage"
              custom="custom-bikes"
              retro="retro-bikes"
              new="new-bikes"
              parts="bike-parts"
              whyus="#whyusPage"
              about="#aboutPage"
            />
          </div>
          <Slider />
          <Bikes />
          <Whyus />
          <About />
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
          .content {
            margin: auto;
            width: 1200px;
            min-height: 100vh;
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

import Bike from "../components/sections/Bike";
import Navbar2 from "../components/sections/Navbar2";
import CategoryBikes from "../components/sections/CategoryBikes";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import BurgeMenu from "../components/sections/BurgeMenu";

import fetch from "isomorphic-unfetch";

class retroBikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [],
      showAll: false,
    };
  }

  componentDidMount() {
    fetch("https://sosbike.dk/wordpress/wp-json/wp/v2/retro?per_page=100")
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          bikes: result,
        });
      });
  }
  render() {
    let bikes = this.state.bikes
      .slice(0, this.state.showAll ? undefined : 12)
      .map((bike, index) => {
        return (
          <Bike
            key={index}
            bikeName={bike.title.rendered}
            id={bike.id}
            picture={bike.acf.main_image.url}
            type="new and retro"
            pageRequested="/bike"
          />
        );
      });
    return (
      <div className="mainContianer">
        <div style={{ width: "100%" }}>
          <Header />
          <Navbar2
            home="/"
            shop="/#shopPage"
            custom="custom-bikes"
            retro="new-and-retro"
            new="rentals"
            parts="bike-parts"
            whyus="/#whyusPage"
            about="/#aboutPage"
            recommended="recommended"
            className="navbar"
          />
          <BurgeMenu />
          <div id="retroBikes">
            <div className="backgroundImg"></div>
            <div className="backgroundSvg"></div>

            <CategoryBikes
              category="New and Retro Bikes"
              description="Here is the selection of our new and retro bikes ! Remember, our selection changes on the basis of our supply, so if you like something very much, contact us immediately!"
            />
            <div className="container">{bikes}</div>
            {!!this.state.bikes &&
              this.state.bikes.length > 12 &&
              !this.state.showAll && (
                <div className="buttonContainer">
                  <button onClick={() => this.setState({ showAll: true })}>
                    Show more
                  </button>
                </div>
              )}
          </div>
        </div>
        <Footer />
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background-color: #1c1713;
          }
        `}</style>
        <style jsx>{`
          #retroBikes {
            width: 1200px;
            margin: auto;
            padding-top: 90px;
          }
          .container {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-items: center;
          }

          .backgroundImg {
            position: absolute;
            top: 90px;
            left: 0px;
            width: 100vw;
            height: 320px;
            background-image: url("static/bikes_assets/bike-category.png");
            object-fit: cover;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            z-index: -5;
          }
          .backgroundSvg {
            position: absolute;
            top: 90px;
            left: 0px;
            width: 100vw;
            height: 320px;
            background-image: url("static/bikes_assets/background-svg.svg");
            background: linear-gradient(
              to bottom,
              rgba(28, 23, 19, 0) 0%,
              rgba(28, 23, 19, 0.8) 51%,
              rgba(28, 23, 19, 1) 75%
            );
            object-fit: cover;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            z-index: -3;
          }

          .buttonContainer {
            width: 100%;
            text-align: center;
          }
          button {
            margin: 25px auto;
            width: 160px;
            height: 40px;
            background: #997f67 0% 0% no-repeat padding-box;
            border-radius: 29px;
            border: 0;
            outline: 0;
            font-family: ronnia, sans-serif;
            font-size: 14px;
            color: #fafafa;
          }

          button:hover {
            background-color: #fafafa;
            color: #997f67;
            transition: 0.3s;
          }

          @media only screen and (max-width: 480px) {
            #retroBikes {
              width: 100vw;
              margin: 0;
            }
            .backgroundImg {
              width: 100vw;
              top: 0px;
            }

            .container {
              width: 100vw;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              margin-top: 60px;
            }
            .bike {
              height: 200px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default retroBikes;

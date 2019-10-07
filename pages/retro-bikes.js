import Bike from "../components/sections/Bike";
import Navbar2 from "../components/sections/Navbar2";

class retroBikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [],
      showAll: false
    };
  }

  componentDidMount() {
    fetch("http://sosbike.dk/wordpress/wp-json/wp/v2/retro?per_page=100")
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          bikes: result
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
            picture={bike.acf.retro_bike_main_image.url}
            bikeName={bike.title.rendered}
            bikePage=""
          />
        );
      });
    return (
      <div>
        <div>
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
          <div id="retroBikes">
            <div className="description">
              <div className="backgroundImg"></div>
              <div className="backgroundSvg"></div>
              <h1>Retro Bikes</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et
              </p>
            </div>
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
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .description {
            height: 320px;
            width: 100%;
            margin: auto;
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
            object-fit: cover;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            z-index: -3;
          }
          h1 {
            font-size: 46px;
            font-family: Farnham Text;
            color: #fafafa;
            letter-spacing: 1px;
            font-weight: 400;
          }
        `}</style>
      </div>
    );
  }
}

export default retroBikes;

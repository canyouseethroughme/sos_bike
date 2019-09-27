import Navbar from "../components/Navbar";
import Head from "next/head";
import data from "../data/data";
import Card from "../components/Card";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycles: data.bicycles,
      bicycle: data.bicycles[3]
    };
  }

  nextBike = () => {
    const newIndex = this.state.bicycle.index + 1;
    this.setState({
      bicycle: data.bicycles[newIndex]
    });
  };

  prevBike = () => {
    const newIndex = this.state.bicycle.index - 1;
    this.setState({
      bicycle: data.bicycles[newIndex]
    });
  };

  render() {
    const { bicycles, bicycle } = this.state;

    return (
      <div>
        <Head>
          <link rel="icon" href="static/logo.png" type="png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <title>S0SBike</title>
        </Head>

        <div className="content">
          <Navbar />

          <div>
            <button
              id="firstButton"
              onClick={() => this.prevBike()}
              disabled={bicycle.index === 0}
            >
              &larr;
            </button>

            <div className="col">
              <div className={`cards-slider active-slide-${bicycle.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateX(-${bicycle.index *
                      (100 / bicycles.length)}%)`
                  }}
                >
                  {bicycles.map(bicycle => (
                    <Card key={bicycle._id} bicycle={bicycle} />
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => this.nextBike()}
              disabled={bicycle.index === data.bicycles.length - 1}
            >
              &rarr;
            </button>
          </div>
        </div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: black;
            border-top: 5px solid #997f67;
            overflow-x: hidden;
          }

          .cards-slider.active-slide-0 #card-0 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-1 #card-1 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-2 #card-2 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-3 #card-3 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-4 #card-4 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-5 #card-5 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-6 #card-6 {
            opacity: 1;
            transform: scale(1);
          }
        `}</style>

        <style jsx>{`
          .content {
            margin: auto;
            width: 1200px;
            min-height: 100vh;
          }
           {
            /* CARDS SLIDER */
          }

          button {
            width: 80px;
            height: 30px;
            z-index: 10;
            position: absolute;
            font-size: 25px;
            background-color: #1c1713;
            color: #fafafa;
            border: 0;
            outline: none;
          }

          button:hover {
            background-color: #997f67;
            transition: 0.3s;
          }

          #firstButton {
            top: 435px;
            left: 130px;
          }
          button:last-child {
            top: 435px;
            right: 130px;
          }

          .col {
            height: 320px;
            position: relative;
          }

          .col:before,
          .col:after{
            content: '';
            display: block;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, black 95%, rgba(0, 0, 0, 0) 100%);
            position: absolute;
            top: 200px;
            left: -500px;
            z-index: 2;
          }
          .col:after{
            left: auto;
            right: -500px;
            background: linear-gradient(to left, black 95%, rgba(0, 0, 0, 0) 100%); }
          }

          .cards-slider {
            top: 130px;
            position: relative;
            margin: 0 auto;
            max-width: 280px;
            height: 320px;
            border-radius: 10px;
            opacity: 1;
            backdrop-filter: blur(20px);
          }

         

          .cards-slider-wrapper {
            display: flex;
            position: absolute;
            top: 60px;
            transition: transform .3s ease-out;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;

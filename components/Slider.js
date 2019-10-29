import data from "../data/data";
import Card from "../components/sections/Card";
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycles: data.bicycles,
      bicycle: data.bicycles[5]
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

    const translateIndex = bicycles.findIndex(v => v.index === bicycle.index);

    return (
      <div>
        <div id="homePage" className="sliderHomePage">
          <div className="backgroundImg"></div>
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
                  transform: `translateX(-${translateIndex *
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
            id="secondButton"
            onClick={() => this.nextBike()}
            disabled={bicycle.index === data.bicycles.length - 1}
          >
            &rarr;
          </button>

          <div className="iframeContainer">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7GmHVV0qWII?rel=1&modestbranding=0&autohide=1&version=3&autoplay=1&loop=1&showinfo=0&controls=0&mute=1&playlist=7GmHVV0qWII"
              frameBorder="0"
              allow="accelerometer; autoplay; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <style jsx global>{`
          .cards-slider.active-slide-0 #card-0 {
            opacity: 0.9;
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
          .cards-slider.active-slide-6 #card-6 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-7 #card-7 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-8 #card-8 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-9 #card-9 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-10 #card-10 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-11 #card-11 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-12 #card-12 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-13 #card-13 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-14 #card-14 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-15 #card-15 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-16 #card-16 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-17 #card-17 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-18 #card-18 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-19 #card-19 {
            opacity: 1;
            transform: scale(1);
          }
          .cards-slider.active-slide-20 #card-20 {
            opacity: 1;
            transform: scale(1);
          }
        `}</style>
        <style jsx>{`
          .sliderHomePage {
            width: 100%;
            height: 810px;
            
          }
          .backgroundImg{
            background: url('static/bikes_home/halftone-overlay.png') no-repeat ;
            background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
            height: 950px;
            width: 100vw;
            min-width: 1800px;
            z-index: -1;
          }

          .iframeContainer{
            position: absolute;
            top: 0;
            left: 0;
            height: 950px;
            width: 100vw;
            min-width: 1800px;
            overflow: hidden;
            z-index: -5;
          }
          iframe{
            position: absolute;
            top: 58%;
            left: 58%;
            min-width: 116%; 
            min-height: 116%;
            transform: translate(-58%, -58%);
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
          #secondButton {
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
            background: linear-gradient(to right, transparent 95%, rgba(0, 0, 0, 0) 100%);
            position: absolute;
            top: 200px;
            left: -500px;
            z-index: 2;
          
          }
          .col:after{
            left: auto;
            right: -500px;
            background: linear-gradient(to left, transparent 95%, rgba(0, 0, 0, 0) 100%); }
          }

          .cards-slider {
            top: 130px;
            position: relative;
            margin: 0 auto;
            max-width: 280px;
            height: 320px;
            border-radius: 10px;
            opacity: 1;
         
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

export default Slider;

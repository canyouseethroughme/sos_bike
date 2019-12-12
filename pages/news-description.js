import fetch from "isomorphic-unfetch";
import Navbar2 from "../components/sections/Navbar2";
import Header from "../components/sections/Header";
import ReactModal from "react-modal";
import SingleProductSlideshow from "../components/sections/SingleProductSlideshow";
import Footer from "../components/sections/Footer";

class NewsDescription extends React.Component {
  constructor() {
    super();
    this.state = {
      bikeType: null,
      newsId: null,
      newsInfo: null,
      modalOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div>
        <div>
          <Header />
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
          {this.state.newsInfo && (
            <div className="newsDescriptionContainer">
              <div className="newsDescriptionInformation">
                <img
                  src={this.state.newsInfo.acf.news_image.url}
                  height={496}
                  width={580}
                />
                <div className="newsTexDescription">
                  <h1>{this.state.newsInfo.title.rendered}</h1>
                  <p>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
        <style jsx>{`
          .newsDescriptionContainer {
            position: relative;
            top: 91px;
            width: 100vw;
            display: flex;
            justify-content: center;
          }
          .newsDescriptionInformation {
            width: 1200px;
            margin-top: 90px;
            margin-bottom: 90px;
            display: flex;
            flex-direction: row;
          }
          .newsTexDescription {
            margin-left: 120px;
          }
          .newsTexDescription > h1 {
            color: white;
            font-family: Ronnia;
            font-weight: bold;
            font-size: 24px;
          }
          .newsTexDescription > p {
            font-family: ronnia, sans-serif;
            font-size: 16px;
            color: #fafafa;
            margin-top: 40px;
          }
        `}</style>
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
        <style jsx>{``}</style>
      </div>
    );
  }

  componentDidMount() {
    const url = window.location;
    const urlObject = new URL(url);
    const bikeType = urlObject.searchParams.get("type");
    const newsId = urlObject.searchParams.get("id");
    this.setState({ bikeType, newsId }, () => {
      fetch(
        `https://sosbike.dk/wordpress/wp-json/wp/v2/news_and_stuff/${this.state.newsId}`
      )
        .then(res => res.json())
        .then(jsonRes => {
          this.setState({ newsInfo: jsonRes }, () => {
            console.log(this.state.newsInfo);
          });
        });
    });
  }
}

export default NewsDescription;

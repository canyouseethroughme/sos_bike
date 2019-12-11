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
            new="new-bikes"
            parts="bike-parts"
            whyus="#whyusPage"
            about="#aboutPage"
            recommended="recommended"
          />
          {this.state.newsInfo && (
            <div className="newsDescriptionContainer">
              <div className="newsDescriptionInformation">
                <img
                  src={this.state.newsInfo.acf.news_image.link}
                  height={700}
                  width={700}
                />
              </div>
            </div>
          )}
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

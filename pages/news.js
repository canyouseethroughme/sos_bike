import fetch from "isomorphic-unfetch";
import Navbar2 from "../components/sections/Navbar2";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Bike from "../components/sections/Bike";
import CategoryBikes from "../components/sections/CategoryBikes";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch(
      "https://sosbike.dk/wordpress/wp-json/wp/v2/news_and_stuff?per_page=100"
    )
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({ news: jsonRes }, () => {
          console.log(this.state.news);
        });
      });
  }
  render() {
    let newsComponents = this.state.news.map((news, index) => {
      return (
        <Bike
          key={index}
          bikeName={news.acf.news_title}
          id={news.id}
          pageRequested="/news-description"
          picture={news.acf.news_image.url}
        ></Bike>
      );
    });
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
        </div>
        <div className="fullTitleContainer">
          <div className="titleContainer">
            <CategoryBikes
              category="News"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et"
            />
          </div>
        </div>
        <div className="newsBigContainer">
          <div className="newsContainer">{newsComponents}</div>
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
          .fullTitleContainer {
            width: 100vw;
            height: 325px;
            position: relative;
            top: 91px;
            background-image: linear-gradient(
                to bottom,
                rgba(28, 23, 19, 0) 0%,
                rgba(28, 23, 19, 0.8) 51%,
                rgba(28, 23, 19, 1) 75%
              ),
              url("../static/news_header_image.png");
            background-size: cover;
            display: flex;
            justify-content: center;
          }
          .titleContainer {
            width: 1200px;
          }

          .newsBigContainer {
            width: 100vw;
            display: flex;
            justify-content: center;
            margin-top: 90px;
          }
          .newsContainer {
            max-width: 1200px;

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 100%;
            justify-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default News;

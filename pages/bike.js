import fetch from "isomorphic-unfetch";
import Navbar2 from "../components/sections/Navbar2";
import Header from "../components/sections/Header";
import ReactModal from "react-modal";
import SingleProductSlideshow from "../components/sections/SingleProductSlideshow";
import Footer from "../components/sections/Footer";

class Bike extends React.Component {
  constructor() {
    super();
    this.state = {
      bikeType: null,
      bikeId: null,
      bikeInfo: null,
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
            retro="retro-bikes"
            new="new-bikes"
            parts="bike-parts"
            whyus="#whyusPage"
            about="#aboutPage"
            recommended="recommended"
          />
          {this.state.bikeInfo && (
            <div className="productContainer">
              <ReactModal
                className="modal"
                isOpen={this.state.modalOpen}
                onRequestClose={this.closeModal}
                ariaHideApp={false}
                shouldFocusAfterRender={false}
              >
                <div className="modalContainer">
                  <div className="modalInformation">
                    <img
                      src={this.state.bikeInfo.acf.main_image.url}
                      height={496}
                      width={580}
                    />
                    <div className="modalContactInformation">
                      {this.state.bikeType === "retro" && <p>Retro bikes</p>}
                      {this.state.bikeType === "new" && <p>New bikes</p>}
                      <h1>{this.state.bikeInfo.title.rendered}</h1>
                      <p>{this.state.bikeInfo.acf.description}</p>
                      <div className="modalContact">
                        <div className="modalContactLabels">
                          <p>Contact: </p>
                          <p>Phone: </p>
                          <p className="availability">Availability:</p>
                        </div>
                        <div className="modalContactInfo">
                          <p>Petre Inspirescu</p>
                          <p>+45 00 00 00 00 </p>
                          <p className="availability">
                            9:00 - 17:00 / MON til FRI
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ReactModal>
              <div className="product">
                <SingleProductSlideshow bikeInfo={this.state.bikeInfo} />
                <div className="productInfo">
                  {this.state.bikeType === "retro" && <p>Retro bikes</p>}
                  {this.state.bikeType === "new" && <p>New bikes</p>}
                  <h1>
                    <b>{this.state.bikeInfo.title.rendered}</b>
                  </h1>
                  <p>{this.state.bikeInfo.acf.description}</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Gears</th>
                        <th>Breaks</th>
                        <th>Frame</th>
                        <th>Wheels</th>
                        <th>Tires</th>
                        <th>Other</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.bikeInfo.acf.brand}</td>
                        <td>{this.state.bikeInfo.acf.model}</td>
                        <td>{this.state.bikeInfo.acf.year}</td>
                        <td>{this.state.bikeInfo.acf.gears}</td>
                        <td>{this.state.bikeInfo.acf.breaks}</td>
                        <td>{this.state.bikeInfo.acf.frame}</td>
                        <td>{this.state.bikeInfo.acf.wheels}</td>
                        <td>{this.state.bikeInfo.acf.tires}</td>
                        <td>{this.state.bikeInfo.acf.other_things}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="getOfferButton" onClick={this.openModal}>
                    Get offer
                  </button>
                  <p className="warrantyP">
                    *Warranty - {this.state.bikeInfo.acf.warranty} years
                  </p>
                </div>
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
        <style jsx>{`
          .modalContainer {
            margin-top: 140px;
            align-items: center;
            text-decoration: none;
            outline: none;
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100vw;
          }
          .modalInformation {
            background-color: #1c1713;
            border-bottom: 5px solid #997f67;
            width: 1200px;
            height: 586px;
            -webkit-box-shadow: 0px 0px 30px -25px rgba(255, 255, 255, 1);
            -moz-box-shadow: 0px 0px 30px -25px rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 30px -25px rgba(255, 255, 255, 1);
            display: flex;
            flex-direction: row;
          }
          .modalInformation > img {
            margin-left: 40px;
            margin-top: 40px;
            margin-bottom: 45px;
          }
          .modalContactInformation {
            width: 470px;
            margin-left: 50px;
          }
          .modalContactInformation > p:first-of-type {
            color: #fafafa;
            font-family: ronnia, sans-serif;
            font-size: 16px;
            font-weight: lighter;
            margin-top: 40px;
          }
          .modalContactInformation > h1 {
            font-family: ronnia, sans-serif;
            color: #fafafa;
            font-size: 36px;
            font-weight: bold;
            margin-top: 20px;
          }
          .modalContactInformation > p {
            font-familt: ronnia, sans-serif;
            font-size: 16px;
            color: #fafafa;
            margin-top: 40px;
          }
          .modalContact {
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            align-items: center;
          }
          .availability {
            margin-top: 60px;
          }
          .modalContactLabels > p {
            font-family: ronnia, sans-serif;
            color: #fafafa;
          }
          .modalContactInfo {
            margin-left: 40px;
          }
          .modalContactInfo > p {
            font-family: ronnia, sans-serif;
            color: #fafafa;
            font-weight: lighter;
          }
          .productContainer {
            width: 100vw;
            padding-top: 190px;
            display: flex;
            justify-content: center;
          }
          .product {
            width: 1200px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .productInfo {
            color: white;
            width: 408px;
          }
          .productInfo > p:first-of-type {
            font-family: ronnia, sans-serif;
            font-size: 16px;
            color: #fafafa;
            margin-top: 0px;
            font-weight: lighter;
          }
          .productInfo > h1 {
            font-family: ronnia, sans-serif;
            font-size: 24px;
            margin-top: 20px;
          }
          .productInfo > p {
            font-family: ronnia, sans-serif;
            font-size: 12px;
            margin-top: 80px;
          }
          .productInfo > table {
            width: 100%;
            margin-top: 33px;
            border-top: solid 5px;
            border-color: #997f67;
          }
          .productInfo > table > thead > tr > th,
          .productInfo > table > tbody > tr > td {
            font-family: ronnia, sans-serif;
            font-size: 8px;
            color: #fafafa;
            text-align: center;
            height: 30px;
          }
          .productInfo > table > thead > tr > th {
            background-color: #272727;
          }
          .productInfo > table > tbody > tr > td {
            background-color: #1f1f1f;
          }
          .getOfferButton {
            outline: none;
            width: 160px;
            height: 40px;
            border-radius: 29px;
            background-color: #997f67;
            margin-top: 60px;
            border: none;
            text-decoration: none;
            font-size: 14px;
            font-family: ronnia, sans-serif;
            font-weight: bold;
            color: #fafafa;
          }
          .getOfferButton:hover {
            background-color: #fafafa;
            color: #997f67;
            transition: 0.3s;
          }
          .warrantyP {
            margin-top: 60px;
            font-weight: lighter;
          }
        `}</style>
      </div>
    );
  }

  componentDidMount() {
    const url = window.location;
    const urlObject = new URL(url);
    const bikeType = urlObject.searchParams.get("type");
    const bikeId = urlObject.searchParams.get("id");
    this.setState({ bikeType, bikeId }, () => {
      fetch(
        `https://sosbike.dk/wordpress/wp-json/wp/v2/${this.state.bikeType}/${this.state.bikeId}`
      )
        .then(res => res.json())
        .then(jsonRes => {
          this.setState({ bikeInfo: jsonRes }, () => {
            console.log(this.state.bikeInfo);
          });
        });
    });
  }
}

export default Bike;

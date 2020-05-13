import fetch from "isomorphic-unfetch";
import Navbar2 from "../components/sections/Navbar2";
import Header from "../components/sections/Header";
import ReactModal from "react-modal";
import SingleProductSlideshow from "../components/sections/SingleProductSlideshow";
import Footer from "../components/sections/Footer";
import BurgeMenu from "../components/sections/BurgeMenu";

class Bike extends React.Component {
  constructor() {
    super();
    this.state = {
      bikeType: null,
      bikeId: null,
      bikeInfo: null,
      modalOpen: false,
    };
  }

  componentDidMount() {
    const url = window.location;
    const urlObject = new URL(url);
    const bikeType = urlObject.searchParams.get("type");
    const bikeId = urlObject.searchParams.get("id");
    this.setState({ bikeType, bikeId }, () => {
      let urlValue = "";
      if (this.state.bikeType === "new and retro") {
        urlValue = "retro";
      }
      if (this.state.bikeType === "rentals") {
        urlValue = "rentals";
      }
      if (this.state.bikeType === "bike-parts") {
        urlValue = "bike_parts";
      }
      fetch(
        `https://sosbike.dk/wordpress/wp-json/wp/v2/${urlValue}/${this.state.bikeId}`
      )
        .then((res) => res.json())
        .then((jsonRes) => {
          this.setState({ bikeInfo: jsonRes }, () => {});
        });
    });
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
            shop="/#shopPage"
            custom="custom-bikes"
            retro="new-and-retro"
            new="rentals"
            parts="bike-parts"
            whyus="/#whyusPage"
            about="/#aboutPage"
            recommended="recommended"
          />
          <BurgeMenu />
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
                    <div className="closeIcon">
                      <p className="fa" onClick={this.closeModal}>
                        &#xf00d;
                      </p>
                    </div>
                    <img
                      src={this.state.bikeInfo.acf.main_image.url}
                      height={400}
                      width={400}
                    />
                    <div className="modalContactInformation">
                      {this.state.bikeType === "new and retro" && (
                        <p>New {"&"} Retro bikes</p>
                      )}
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
                  {this.state.bikeType === "new and retro" && (
                    <p>New and Retro bikes</p>
                  )}
                  {this.state.bikeType === "rentals" && <p>Rentals</p>}
                  {this.state.bikeType === "bike-parts" && <p>Bike parts</p>}
                  <h1>
                    <b>{this.state.bikeInfo.title.rendered}</b>
                  </h1>
                  <p>{this.state.bikeInfo.acf.description}</p>
                  <table className="table">
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
                  {this.state.bikeType === "new nad retro" ||
                    (this.state.bikeType === "bike-parts" && (
                      <p className="warrantyP">
                        *Warranty - {this.state.bikeInfo.acf.warranty} years
                      </p>
                    ))}
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
          .closeIcon{
            display: none;
          }
          .modalContainer {
            position: absolute;
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
            object-fit: contain;
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
            font-family: ronnia, sans-serif;
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
            width: 480px;
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
            font-size: 12px;
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

          @media screen and (max-width: 480px) {
            .productContainer {
              flex-direction: column;
              padding-top: 100px;
            }
            .product {
              flex-direction: column;
            }
            .productInfo {
              position: absolute;
              padding-top: 150px;
              z-index: 4;
              margin-top: 30px;
            }
            .table {
              display: none;
            }
            .productInfo > h1 {
              margin-left: 20px;
              margin-top: 5px;

            }
            .productInfo > p:first-of-type {
              margin-left: 20px;
            }
            .productInfo > p {
              margin-left: 20px;
              margin-top: 90px;
              width: 355px;
            }
            .getOfferButton{
              width: 315px;
              margin-left: 30px;
              margin-top: 40px;
              margin-bottom: 80px;
            }
            .modalContactInformation
            {
              position: absolute;
              width: 300px;
              z-index: 20;
            }
            .modalInformation > img {
              display: none;
            }
           
            .modalContainer{
              position: absolute;
              z-index: 20;
              height: 570px;
              top: 0
            }
            .closeIcon{
              width: 95%;
              display: flex;
              justify-content: flex-end;
              margin-top: 15px;
              flex-direction: row;
            }
            .closeIcon > p {
              color: white;
              font-size: 20px;
              z-index: 20;
            }
        `}</style>
      </div>
    );
  }
}

export default Bike;

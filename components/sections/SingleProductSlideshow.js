import ReactModal from "react-modal";
class SingleProductSlideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      modalImage: 0,
      selectedImage: "main_image"
    };
  }

  setSelectedImage = selectedImage => {
    this.setState({ selectedImage: selectedImage });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  nextImage = () => {
    if (this.state.selectedImage === "main_image") {
      this.setState({ selectedImage: "image2" });
    } else if (this.state.selectedImage === "image2") {
      this.setState({ selectedImage: "image3" });
    } else if (this.state.selectedImage === "image3") {
      this.setState({ selectedImage: "image4" });
    } else if (this.state.selectedImage === "image4") {
      this.setState({ selectedImage: "image5" });
    } else if (this.state.selectedImage === "image5") {
      this.setState({ selectedImage: "image6" });
    } else if (this.state.selectedImage === "image6") {
      this.setState({ selectedImage: "main_image" });
    }
  };

  previousImage = () => {
    if (this.state.selectedImage === "main_image") {
      this.setState({ selectedImage: "image6" });
    } else if (this.state.selectedImage === "image6") {
      this.setState({ selectedImage: "image5" });
    } else if (this.state.selectedImage === "image5") {
      this.setState({ selectedImage: "image4" });
    } else if (this.state.selectedImage === "image4") {
      this.setState({ selectedImage: "image3" });
    } else if (this.state.selectedImage === "image3") {
      this.setState({ selectedImage: "image2" });
    } else if (this.state.selectedImage === "image2") {
      this.setState({ selectedImage: "main_image" });
    }
  };

  render() {
    return (
      <div>
        <ReactModal
          className="modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          disableEnforceFocus={true}
          style={{ outline: "none" }}
          shouldFocusAfterRender={false}
        >
          <div className="modalContainer">
            <div>
              <div className="arrows">
                <p onClick={this.previousImage}>&larr;</p>
              </div>
            </div>
            <img
              src={this.props.bikeInfo.acf[this.state.selectedImage].url}
              style={{ objectFit: "contain", height: 700 }}
            />
            <div>
              <div className="arrows">
                <p onClick={this.nextImage}>&rarr;</p>
              </div>
            </div>
          </div>
        </ReactModal>
        <div className="bigImgContainer">
          <img
            src={this.props.bikeInfo.acf[this.state.selectedImage].url}
            height={496}
            width={580}
          />
          <span className="enlargeSpan" onClick={this.openModal}>
            <a>
              Enlarge <span>&#43;</span>
            </a>
          </span>
        </div>
        <div className="smallImagesContainer">
          <img
            style={{
              borderTopWidth:
                this.state.selectedImage === "main_image" ? "5px" : "0px"
            }}
            src={this.props.bikeInfo.acf.main_image.url}
            onClick={() => {
              this.setState({ selectedImage: "main_image" });
            }}
            height={70}
            width={80}
          />
          <img
            style={{
              borderTopWidth:
                this.state.selectedImage === "image2" ? "5px" : "0px"
            }}
            src={this.props.bikeInfo.acf.image2.url}
            onClick={() => {
              this.setState({ selectedImage: "image2" });
            }}
            height={70}
            width={80}
          />
          <img
            style={{
              borderTopWidth:
                this.state.selectedImage === "image3" ? "5px" : "0px"
            }}
            src={this.props.bikeInfo.acf.image3.url}
            onClick={() => {
              this.setState({ selectedImage: "image3" });
            }}
            height={70}
            width={80}
          />
          <img
            style={{
              borderTopWidth:
                this.state.selectedImage === "image4" ? "5px" : "0px"
            }}
            src={this.props.bikeInfo.acf.image4.url}
            onClick={() => {
              this.setState({ selectedImage: "image4" });
            }}
            height={70}
            width={80}
          />
          <img
            style={{
              borderTopWidth:
                this.state.selectedImage === "image5" ? "5px" : "0px"
            }}
            src={this.props.bikeInfo.acf.image5.url}
            onClick={() => {
              this.setState({ selectedImage: "image5" });
            }}
            height={70}
            width={80}
          />
          <img
            style={{
              borderTopWidth:
                this.state.selectedImage === "image6" ? "5px" : "0px"
            }}
            src={this.props.bikeInfo.acf.image6.url}
            onClick={() => {
              this.setState({ selectedImage: "image6" });
            }}
            height={70}
            width={80}
          />
        </div>
        <style jsx>{`
          img {
            border: solid;
            border-color: #997f67;
            border-top-width: 0;
            border-bottom: 0;
            border-left: 0;
            border-right: 0;
          }
          .smallImagesContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 40px;
          }
          .modalContainer {
            margin-top: 140px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            text-decoration: none;
            outline: 0;
          }
          .modalContaine:focus {
            outline: 0;
          }
          .modal {
            border: 0;
            outline: 0;
          }
          .modal:focus {
            outline: 0;
          }
          .arrows {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 50px;
            outline: none;
            cursor: pointer;
          }
          .bigImgContainer {
            position: relative;
          }
          .bigImgContainer > img {
            object-fit: cover;
          }
          .bigImgContainer > span {
            position: absolute;
            left: 0px;
            top: 446px;
            width: 149px;
            height: 50px;
            background: #1c1713 0% 0% no-repeat padding-box;
            opacity: 0.8;
            display: grid;
            align-items: center;
          }
          .bigImgContainer > span > a {
            text-decoration: none;
            font-family: ronnia, sans-serif;
            letter-spacing: 0.24px;
            color: #fafafa;
            font-weight: 300;
            font-size: 12px;
            padding-left: 30px;
          }
          .bigImgContainer > span > a > span {
            padding-left: 35px;
            font-size: 25px;
          }
        `}</style>
      </div>
    );
  }
}

export default SingleProductSlideshow;

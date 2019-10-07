import Link from "next/link";

const Bike = props => (
  <div>
    <div className="containerBikes">
      <div className="bike">
        <img src={props.picture} />
        <Link href={props.bikePage}>
          <span>
            <a>
              View more <span>&#43;</span>
            </a>
          </span>
        </Link>
        <p>{props.bikeName}</p>
      </div>
    </div>
    <style jsx>{`
      @import url("https://use.typekit.net/mmi3fys.css");
      .containerBikes {
        width: 100%;
        margin-bottom: 90px;
      }

      .bike {
        width: 280px;
        height: 274px;
        margin-bottom: 60px;
        border-top: 5px solid #997f67;
        position: relative;
      }
      .bike > img {
        width: 280px;
        height: 210px;
        object-fit: cover;
      }
      .bike > span {
        position: absolute;
        left: 0px;
        top: 170px;
        width: 140px;
        height: 40px;
        background: #1c1713 0% 0% no-repeat padding-box;
        opacity: 0.8;
        display: grid;
        align-items: center;
      }
      .bike > span:hover {
        opacity: 1;
        transition: 0.3s;
      }
      .bike > span > a {
        text-decoration: none;
        font-family: ronnia, regular;
        letter-spacing: 0.24px;
        color: #fafafa;
        font-weight: 300;
        font-size: 12px;
        padding-left: 10px;
      }
      .bike > span > a > span {
        padding-left: 35px;
        font-size: 25px;
      }
      .bike > p {
        margin-top: 20px;
        padding-left: 10px;
        font-family: ronnia, regular;
        font-size: 14px;
        font-weight: 300;
        color: #fafafa;
      }
    `}</style>
  </div>
);
export default Bike;

import Link from "next/link";

const Bike = props => (
  <div>
    <div className="containerBikes">
      <div className="bike">
        <img src={props.picture} />
        <Link
          href={{
            pathname: props.pageRequested,
            query: { type: props.type, id: props.id }
          }}
        >
          <span>
            <a>
              {props.id} {console.log(props)}View more<span>&#43;</span>
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
        margin-bottom: 60px;
      }

      .bike {
        width: 280px;
        height: 274px;
        margin-bottom: 30px;
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
        font-family: ronnia, sans-serif;
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
        font-family: ronnia, sans-serif;
        font-size: 14px;
        font-weight: 300;
        color: #fafafa;
      }

      @media screen and (max-width: 480px) {
        .containerBikes {
          width: 170px;
        }
        .bike {
          width: 170px;
          height: 170px;
        }

        .bike > img {
          width: 170px;
          height: 150px;
          object-fit: cover;
        }
        .bike > span {
          top: 120px;
          width: 100px;
          height: 30px;
        }
        .bike > span > a {
          letter-spacing: 0.1px;
          padding-left: 5px;
        }
        .bike > span > a > span {
          padding-left: 5px;
          font-size: 20px;
        }
        .bike > p {
          margin-top: 10px;
        }
      }
    `}</style>
  </div>
);
export default Bike;

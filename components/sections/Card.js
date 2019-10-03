import PropTypes from "prop-types";

const Card = ({ bicycle }) => {
  const { index, type, picture, description } = bicycle;
  return (
    <div>
      <div id={`card-${index}`} className="card">
        <img src={picture} alt="bike" />
        <div className="details">
          <p className="type">{type}</p>
          <p className="description">{description}</p>
          <a href="www.google.com">
            <button>View</button>
          </a>
        </div>
      </div>
      <style jsx>{`
        @import url("https://use.typekit.net/mmi3fys.css");
        .card {
          flex: 1;
          width: 280;
          height: 415;
          transition: opacity 300ms linear,
            transform 300ms cubic-bezier(0.4, 0.03, 0.5, 0.9);
          transform: scale(0.6);
          background: #1c1713 0% 0% no-repeat padding-box;
          border-radius: 10px;
          opacity: 0.6;
        }
        img {
          width: 280px;
          height: auto;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          margin-top: 15px;
        }
        .details {
          text-align: center;
        }

        .type {
          margin-top: 10px;
          font-family: ronnia, sans-serif;
          font-size: 14px;
          letter-spacing: 0;
          color: #fafafa;
          text-transform: uppercase;
        }

        .description {
          margin: 15px 15px 0;
          font-family: ronnia, sans-serif;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 0;
          color: #fafafa;
        }
        button {
          margin: 25px auto;
          width: 120px;
          height: 30px;
          background: #997f67 0% 0% no-repeat padding-box;
          border-radius: 29px;
          border: 0;
          outline: 0;
          font-family: ronnia, sans-serif;
          font-size: 14px;
          color: #fafafa;
        }

        button:hover {
          background-color: #fafafa;
          color: #997f67;
          transition: 0.3s;
        }
      `}</style>
    </div>
  );
};

Card.propTypes = {
  bicycle: PropTypes.object.isRequired
};

export default Card;

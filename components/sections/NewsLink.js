import React from "react";
import Link from "next/link";

const NewsLink = props => {
  return (
    <div className="container">
      <img src={props.imgSrc} height={180} width={180} />
      <Link href={props.url}>
        <p>View more</p>
      </Link>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          margin: 30px;
          flex-direction: column;
          align-items: center;
        }
        p {
          margin-top: 25px;
          color: #997f67;
          text-decoration: underline;
          font-family: "Farnham Text";
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default NewsLink;

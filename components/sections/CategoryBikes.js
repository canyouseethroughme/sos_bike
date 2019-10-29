const CategoryBikes = props => (
  <div>
    <div className="description">
      <h1>{props.category}</h1>
      <div className="borderTop"></div>
      <p>{props.description}</p>
    </div>
    <style jsx>{`
      .description {
        position: relative;
        height: 320px;
        width: 100%;
        margin: auto;
      }

      h1 {
        padding-top: 81px;
        font-size: 46px;
        font-family: Farnham Text;
        color: #fafafa;
        letter-spacing: 1px;
        font-weight: 400;
      }
      .borderTop {
        margin-top: 30px;
        position: absolute;
        border-bottom: 5px solid #997f67;
        left: 0;
        right: 90%;
      }
      p {
        width: 895px;
        padding-top: 60px;
        font-family: ronnia, sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: #fafafa;
      }
    `}</style>
  </div>
);

export default CategoryBikes;

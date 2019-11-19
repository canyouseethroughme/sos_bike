const SingleProductSlideshow = props => {
  console.log("====================================");
  console.log(props);
  console.log("====================================");
  return (
    <div>
      <p>{props.id}</p>
      <style jsx>{`
        p {
          color: white;
          position: absolute;
          top: 200px;
        }
      `}</style>
    </div>
  );
};

export default SingleProductSlideshow;

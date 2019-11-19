import fetch from "isomorphic-unfetch";
import Navbar2 from "../../components/sections/Navbar2";
import Header from "../../components/sections/Header";
import SingleProductSlideshow from "../../components/sections/SingleProductSlideshow";

const Post = props => {
  console.log("====================================");
  console.log(props);
  console.log("====================================");

  return (
    <div>
      <div>
        <Header />
        <Navbar2 />
        <SingleProductSlideshow id={props.bike.id} />
      </div>
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
        h1 {
          position: absolute;
          top: 300px;
          color: white;
        }
      `}</style>
    </div>
  );
};

Post.getInitialProps = async function(context) {
  const queryArray = context.asPath.split("/");
  const id = queryArray[queryArray.length - 1];
  console.log(id);
  const res = await fetch(
    `https://sosbike.dk/wordpress/wp-json/wp/v2/retro/${id}`
  );
  const bike = await res.json();

  return { bike };
};

export default Post;

import Head from "next/head";
import Navbar from "../components/sections/Navbar";
import Slider from "../components/Slider";
import Bikes from "../components/Bikes";
import Whyus from "../components/Whyus";
import About from "../components/About";

const Index = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="static/logo.png" type="png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <title>S0SBike</title>
      </Head>

      <div className="content">
        <Navbar />
        <Slider />
        <Bikes />
        <Whyus />
        <About />
      </div>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #1c1713;
          border-top: 5px solid #997f67;
          overflow-x: hidden;
        }
      `}</style>

      <style jsx>{`
        .content {
          margin: auto;
          width: 1200px;
          min-height: 100vh;
        }
         {
          /* CARDS SLIDER */
        }
      `}</style>
    </div>
  );
};

export default Index;

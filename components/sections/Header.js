import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <link rel="icon" href="static/favicon.png" type="png" sizes="32x32" />
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
  );
};

export default Header;

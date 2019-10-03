import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("../sections/Map"), {
  ssr: false
});

export default () => <DynamicComponentWithNoSSR />;

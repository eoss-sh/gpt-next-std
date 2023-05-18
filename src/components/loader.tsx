import Lottie from "lottie-react";
import loadingAnimation from "../../public/loading.json";

const style = {
  height: 300,
};

const Loader = () => {
  return <Lottie animationData={loadingAnimation} loop={true} style={style}/>;
};

export default Loader;
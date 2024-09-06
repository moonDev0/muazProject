import { BeatLoader } from "react-spinners";

function Spinner({ colour }) {
  return <BeatLoader color={colour ? colour : "white"} size={10} />;
}

export default Spinner;
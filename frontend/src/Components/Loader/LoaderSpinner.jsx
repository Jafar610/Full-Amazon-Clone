import {FadeLoader} from "react-spinners/FadeLoader";

function LoaderSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FadeLoader />
    </div>
  )
}

export default LoaderSpinner;
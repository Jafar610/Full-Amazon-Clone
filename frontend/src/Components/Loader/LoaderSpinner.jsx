import {FadeLoader} from "react-spinners";

function LoaderSpinner() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <FadeLoader color="#dabe1c" />
    </div>
  )
}

export default LoaderSpinner;
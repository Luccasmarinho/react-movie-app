import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastAlert = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{ zIndex: "9999999999999999999999999999999999" }}
      //   transition={Bounce}
    />
  );
};

export default ToastAlert;

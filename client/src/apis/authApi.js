import { REACT_URL } from ".";
import { AuthAction } from "../redux/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";

export const RegisterApi = (data) => {
  return (dispatch) => {
    REACT_URL.post("/register", data)
      .then((res) => {
        console.log(res.data);
        dispatch(AuthAction(res.data));
        toast.success("Register Successfully");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message);
      });
  };
};

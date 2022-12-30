import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouteFC from "./routes/RouteFC";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <RouteFC />
      </Provider>
    </>
  );
}

export default App;

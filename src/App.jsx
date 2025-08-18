import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

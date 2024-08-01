import { Route, Routes } from "react-router-dom";
import Home from "./Commponent/Home";
import Login from "./Commponent/Login";
import Menu from "./Commponent/Menu";
import Register from "./Commponent/Register";
import UserHome from "./Commponent/UserHome";

function App() {
  return <div className="container">
    <Menu />
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/userHome" element={<UserHome />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Routes>

  </div>
}
export default App;
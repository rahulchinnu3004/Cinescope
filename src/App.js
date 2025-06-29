import "./css/App.css";
import NavBar from "./components/NavBar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/Moviecontext";
function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <div className="main-contents">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorite></Favorite>}></Route>
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App;

import "./App.css";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OurStory from "./pages/OurStory";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#CC9D2F] w-full">
    
      <BrowserRouter><Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/menu" Component={Menu} />
        <Route exact path="/about" Component={OurStory} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

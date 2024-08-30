import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContentsNew from "./Components/ContentsNew";
// import NotFound from "./Components/NotFound";
// import Content from "./Components/Content";
import FaradayBag from "./Components/FaradayBag";
import Faraday from "./Components/Faraday";
import ProductDetail from "./Components/ProductDetail";
import DeskterPage from "./Components/Deskter";
import GraphsterPage from "./Components/Graphster";
import GraphsterProd from "./Components/Graphsterprod";
import RoadsterProd from "./Components/Roadsterprod";
import RoadsterPage from "./Components/Roadster";
import RacksterPage from "./Components/Rackster";
import RacksterProd from "./Components/Racksterprod";
import LoginPage from "./Components/LoginPage";
import Software from "./Components/Software";
import Aboutus from "./Components/AboutUs";
import Brochure from "./Components/Brochure";
import Gallery from "./Components/Gallery";
import News from "./Components/News";
import Careers from "./Components/Careers";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import FireBrigade from "./Components/FireBrigade";
import History from "./Components/History";
import Team from "./Components/Team";
import "../src/App.css";
import DeskterProd from "./Components/Desterprod";
// import HeaderNew from "./Components/Headernew";
import CubesterPage from "./Components/Cubester";
import CubesterProd from "./Components/CubesterProd";
import LabEquipments from "./LabEquipments/LabEquipments";
import Police from "./Components/Police";
import RequestDemoForm from "./Components/RequestDemoForm";
import Railway from "./Components/Railway";
import Sitemap from "./Components/Sitemap";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Content />} /> */}
          <Route path="/request-demo" element={<RequestDemoForm />} />
          <Route path="/" element={<ContentsNew />} />
          <Route path="/labEquipments/:labId" element={<LabEquipments />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/deskter" element={<DeskterPage />} />
          <Route path="/Police" element={<Police />} />
          <Route path="/Railway" element={<Railway />} />
          <Route path="/graphster" element={<GraphsterPage />} />
          <Route path="/graphster/:graphsterId" element={<GraphsterProd />} />
          <Route path="/roadster" element={<RoadsterPage />} />
          <Route path="/roadster/:roadsterId" element={<RoadsterProd />} />
          <Route path="/rackster" element={<RacksterPage />} />
          <Route path="/rackster/:racksterId" element={<RacksterProd />} />
          <Route path="/cubester" element={<CubesterPage />} />
          <Route path="/cubester/:cubesterId" element={<CubesterProd />} />
          <Route path="/deskter/:deskterId" element={<DeskterProd />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/software" element={<Software />} />
          <Route path="/faradayBag" element={<FaradayBag />} />
          <Route path="/faraday/:faradayId" element={<Faraday />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/News" element={<News />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FireBrigade" element={<FireBrigade />} />
          <Route path="/History" element={<History />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Sitemap" element={<Sitemap />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

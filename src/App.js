import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContentsNew from "./Components/ContentsNew";
import NotFound from "./Components/NotFound";
// import Content from "./Components/Content";
import ProductDetail from "./Components/ProductDetail";
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
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Content />} /> */}
          <Route path="/" element={<ContentsNew />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/software" element={<Software />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/News" element={<News />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
           <Route path="/cart" element={<Cart />}/> 
           <Route path="/contact" element={<Contact />}/> 
           <Route path="/FireBrigade" element={<FireBrigade />}/>
           <Route path="/History" element={<History />}/> 
           <Route path="/Team" element={<Team />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

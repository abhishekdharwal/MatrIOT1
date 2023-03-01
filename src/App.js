import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
function App() {
  return (
    <div className="h-screen flex flex-col justify-between border-[12px] border-solid border-grey-400	">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funsearch" element={<Search />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

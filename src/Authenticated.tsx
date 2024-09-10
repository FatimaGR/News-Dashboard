import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NewsArticle from "./pages/NewsArticle";
import Navbar from "./components/Navbar";

function Authenticate() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/newsarticle/:id" element={<NewsArticle/>}/>
      </Routes>
    </>
  )
};

export default Authenticate
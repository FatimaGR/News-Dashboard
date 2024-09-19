import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import NewsArticlePage from "./pages/NewsArticle";

function Authenticate() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/newsarticle/:id" element={<NewsArticlePage list="general"/>}/>
        <Route path="/topnewsarticle/:id" element={<NewsArticlePage list="top"/>}/>
      </Routes>
    </>
  )
};

export default Authenticate
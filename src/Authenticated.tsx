import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import NewsArticlePage from "./pages/NewsArticle";
import { useTheme } from "./context/theme-context";

function Authenticate() {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode? "authenticated-container-dark" : "authenticated-container-light"}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/newsarticle/:id" element={<NewsArticlePage list="general"/>}/>
        <Route path="/topnewsarticle/:id" element={<NewsArticlePage list="top"/>}/>
      </Routes>
    </div>
  )
};

export default Authenticate
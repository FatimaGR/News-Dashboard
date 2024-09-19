import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import NewsArticlePage from "./pages/NewsArticle";
import { ThemeProvider } from "./context/theme-context";

function Authenticate() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/newsarticle/:id" element={<NewsArticlePage list="general"/>}/>
        <Route path="/topnewsarticle/:id" element={<NewsArticlePage list="top"/>}/>
      </Routes>
    </ThemeProvider>
  )
};

export default Authenticate
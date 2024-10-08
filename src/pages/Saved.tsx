import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { useAuth } from "../context/auth-context";
import { NewsArticle } from "../interfaces";
import { getNews } from "../services/services";
import { useTheme } from "../context/theme-context";

function Saved() {
  const { user, userData } = useAuth();
  const { isDarkMode } = useTheme();
  
  if (!user || !userData){
    return;
  };
  
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [savedNewsList, setSavedNewsList] = useState<NewsArticle[]>([]);
  
  useEffect(() => {
    getNews()
      .then((news) => {
        setNewsArticles(news.articles);
      })
      .catch((error) => { 
        console.log(error);
      })
  },[]);

  useEffect(() => {
    if (userData.savedNews) {
      const savedNewsTitles: string[] = userData.savedNews;
      setSavedNewsList(newsArticles.filter(article => 
        savedNewsTitles.includes(article.title)
      ));
    }
  }, [newsArticles, userData.savedNews]);

  return (
    <div className={isDarkMode? "page-container-dark" : "page-container-light"}>
      <h2>Your saved news</h2>
      <div className="saved-list-content">
        {savedNewsList.length > 0 ? (
          savedNewsList.map((news) => (
            <NewsCard key={news.title} article={news} userSavedNews={userData.savedNews}/>
          ))
        ) : (
          <p>No saved articles yet.</p>
        )}
      </div>
    </div>
  )
}

export default Saved
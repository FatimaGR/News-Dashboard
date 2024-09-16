import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { useAuth } from "../context/auth-context";
import { newsArticles } from "../exampleData";
import { NewsArticle } from "../interfaces";

function Saved() {
  const { user, userData } = useAuth();
  
  if (!user || !userData){
    return;
  };
  
  const [savedNewsList, setSavedNewsList] = useState<NewsArticle[]>([]);
  
  useEffect(() => {
    if (userData.savedNews) {
      const savedNewsTitles = userData.savedNews;
      setSavedNewsList(newsArticles.filter(article => 
        savedNewsTitles.includes(article.title)
      ));
    }
  }, [userData.savedNews]);

  return (
    <div className="saved-news-list-container">
      <h2>Your saved news</h2>
      {savedNewsList.length > 0 ? (
        savedNewsList.map((news) => (
          <NewsCard key={news.title} article={news} userSavedNews={userData.savedNews}/>
        ))
      ) : (
        <p>No saved articles yet.</p>
      )}
    </div>
  )
}

export default Saved
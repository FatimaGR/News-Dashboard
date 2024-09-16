import NewsCard from "./NewsCard";
import { NewsArticle } from "../interfaces";
import { useAuth } from "../context/auth-context";

interface NewsListProps{
  newsList: NewsArticle[];
};

function NewsList({ newsList }: NewsListProps) {
  const { user, userData } = useAuth();

  if (!user || !userData){
    return;
  };

  return (
    <div className="news-list-container">
      {newsList.map((news, index) => (
        <NewsCard key={index} article={news} userSavedNews={userData.savedNews}/>
      ))}
    </div>
  )
};

export default NewsList;
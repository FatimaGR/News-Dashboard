import NewsCard from "./NewsCard";
import { NewsArticle } from "../interfaces";
import { useAuth } from "../context/auth-context";
import { useState } from "react";

interface NewsListProps{
  newsList: NewsArticle[];
};

const pagination = (data:NewsArticle[], page:number, limit:number): NewsArticle[] => {
  const startId = (page - 1) * limit;
  const endId = page * limit;
  const paginatedData = data?.slice(startId, endId);
  return paginatedData;
};

function NewsList({ newsList }: NewsListProps) {
  const { user, userData } = useAuth();
  const [page, setPage] = useState<number>(1);
  const limit: number = 20;
  const paginatedNewsList = pagination(newsList, page, limit);

  if (!user || !userData){
    return;
  };

  return (
    <div className="news-list-container">
      <div className="news-list-content">
        {paginatedNewsList.map((news, index) => (
          news.title != "[Removed]"?
          <NewsCard key={index} article={news} userSavedNews={userData.savedNews}/>
          : <></>
        ))}
      </div>
      <div className="pages-container">
        <button 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
        >
          Previus
        </button>
        <button 
          disabled={paginatedNewsList.length < limit}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
};

export default NewsList;
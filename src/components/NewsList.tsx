import NewsCard from "./NewsCard";
import { NewsArticle } from "../interfaces";
import { useState } from "react";

interface NewsListProps{
  newsList: NewsArticle[]
};

function NewsList({ newsList }: NewsListProps) {
  const [savedNews, setSavedNews] = useState<string[]>([]);

  return (
    <div className="list-container">
      {newsList.map((news, index) => (
        <NewsCard key={index} article={news} savedNews={savedNews} setSavedNews={setSavedNews}/>
      ))}
    </div>
  )
}

export default NewsList
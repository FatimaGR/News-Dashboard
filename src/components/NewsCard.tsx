import { NewsArticle } from "../interfaces";
import save from "../assets/save.svg";
import saved from "../assets/saved.svg";
import { useState } from "react";

interface NewsCardProps{
  article: NewsArticle;
  savedNews: string[];
  setSavedNews: (news: string[]) => void;
};


function NewsCard({ article, savedNews, setSavedNews }: NewsCardProps) {
  
  const isArticleSaved = (articleId: string): boolean => {
    return savedNews.includes(articleId);
  };
  
  const [isSaved, setIsSaved] = useState<boolean>(isArticleSaved(article.title));

  const handleSave = (): void => {
    const articleId = article.title;
    
    let updatedSavedNews = isSaved
    ? savedNews.filter(title => title !== articleId)
    : [...savedNews, articleId];

    setSavedNews(updatedSavedNews);

    setIsSaved(!isSaved);
  };

  return (
    <div className="news-card-container">
      <button onClick={handleSave} className="i-btn">
        <img src={isSaved? saved : save} alt={article.title}/>
      </button>
      <img src={article.urlToImage || "../assets/news-default-img.png"} alt={article.title} />
      <div className="news-card-detail">
        <p>{article.source.name}</p>
        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      </div>
      <p>{article.title}</p>
      <p>{article.description}</p>
      <button className="x-btn">Read more</button>
    </div>
  )
};

export default NewsCard;
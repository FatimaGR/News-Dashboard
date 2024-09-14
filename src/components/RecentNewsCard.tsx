import { NewsArticle } from "../interfaces";
import defaultImg from "../assets/recent-news-default-img.png";

interface RecentNewsCardProps{
  article: NewsArticle;
}

function RecentNewsCard({article}: RecentNewsCardProps) {
  return (
    <div className="recent-news-card-container">
      <img src={article.urlToImage || defaultImg} alt={article.title}/>
      <div className="recent-news-card-info">
        <p>{article.title}</p>
        <button className="x-btn">Read more</button>
      </div>
    </div>
  )
}

export default RecentNewsCard

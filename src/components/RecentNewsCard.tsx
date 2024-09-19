import { NewsArticle } from "../interfaces";
import defaultImg from "../assets/recent-news-default-img.png";
import { useNavigate } from "react-router-dom";

interface RecentNewsCardProps{
  article: NewsArticle;
}

function RecentNewsCard({article}: RecentNewsCardProps) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    const encodedTitle = encodeURIComponent(article.title);
    navigate("/topnewsarticle/" + encodedTitle);
  }

  return (
    <div className="recent-news-card-container">
      <img 
        src={article.urlToImage || defaultImg} 
        alt={article.title} 
        onError={(e) => { e.currentTarget.src = defaultImg; }}
      />
      <div className="recent-news-card-info">
        <p>{article.title}</p>
        <button onClick={handleReadMore} className="x-btn">Read more</button>
      </div>
    </div>
  )
}

export default RecentNewsCard

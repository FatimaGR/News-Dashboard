import { NewsArticle } from "../interfaces";
import defaultImg from "../assets/recent-news-default-img.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/theme-context";

interface RecentNewsCardProps{
  article: NewsArticle;
}

function RecentNewsCard({article}: RecentNewsCardProps) {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleReadMore = () => {
    const encodedTitle = encodeURIComponent(article.title);
    navigate("/topnewsarticle/" + encodedTitle);
  }

  return (
    <div className={isDarkMode? "recent-card-container-dark" : "recent-card-container-light"}>
      <img 
        src={article.urlToImage || defaultImg} 
        alt={article.title} 
        onError={(e) => { e.currentTarget.src = defaultImg; }}
      />
      <div className="recent-card-info">
        <p className="font-s">{article.title}</p>
        <button 
          onClick={handleReadMore} 
          className={isDarkMode? "x-btn-dark" : "x-btn-light"}
        >
          Read more
        </button>
      </div>
    </div>
  )
}

export default RecentNewsCard

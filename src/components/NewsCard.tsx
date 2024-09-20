import { NewsArticle } from "../interfaces";
import IconSave from "../assets/save.svg";
import IconSaved from "../assets/saved.svg";
import defaultImg from "../assets/news-default-img.png";
import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/theme-context";
import "../styles/NewsCard.css";

interface NewsCardProps{
  article: NewsArticle;
  userSavedNews: string[];
};

function NewsCard({ article, userSavedNews }: NewsCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleReadMore = () => {
    const encodedTitle = encodeURIComponent(article.title);
    navigate("/newsarticle/" + encodedTitle);
  }

  const isArticleSaved = (articleId: string): boolean => {
    return userSavedNews.includes(articleId);
  };
  
  const [isSaved, setIsSaved] = useState<boolean>(isArticleSaved(article.title));

  const handleSave = async (): Promise<void> => {
    if (!user){
      console.log("User is not authenticated");
      return;
    };

    const articleId = article.title;
    const docRef = doc(db, "users", user.uid);
    
    try {
      if (isSaved){
        await updateDoc(docRef, { 
          savedNews: arrayRemove(articleId), 
        });
      } else {
        await updateDoc(docRef, { 
          savedNews: arrayUnion(articleId), 
        });
      };
    } catch (error){
      console.log("Actualize article state error");
    };

    setIsSaved(!isSaved);
  };

  return (
    <div className={isDarkMode? "news-card-container-dark" : "news-card-container-light"}>
      <button onClick={handleSave} className="i-btn">
        {isSaved? <IconSaved/> : <IconSave/>}
      </button>
      <img 
        src={article.urlToImage || defaultImg} 
        alt={article.title}
        onError={(e) => { e.currentTarget.src = defaultImg; }}
      />
      <div className="news-card-detail">
        <p>{article.source.name}</p>
        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      </div>
      <p>{article.title}</p>
      <p>{article.description}</p>
      <button onClick={handleReadMore} className="x-btn">Read more</button>
    </div>
  )
};

export default NewsCard;
import { NewsArticle } from "../interfaces";
import save from "../assets/save.svg";
import saved from "../assets/saved.svg";
import defaultImg from "../assets/news-default-img.png";
import { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useAuth } from "../context/auth-context";

interface NewsCardProps{
  article: NewsArticle;
  userSavedNews: string[];
};

function NewsCard({ article, userSavedNews }: NewsCardProps) {
  const { user } = useAuth();
  
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
    <div className="news-card-container">
      <button onClick={handleSave} className="i-btn">
        <img src={isSaved? saved : save} alt={article.title}/>
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
      <button className="x-btn">Read more</button>
    </div>
  )
};

export default NewsCard;
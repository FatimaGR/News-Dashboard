import { useEffect, useState } from "react";
import { NewsArticle } from "../interfaces";
import { getNews, getTopNews } from "../services/services";
import { useNavigate, useParams } from "react-router-dom";
import IconArrow from "../assets/arrow.svg";
import IconDate from "../assets/date.svg";
import IconAuthor from "../assets/author.svg";
import IconSource from "../assets/source.svg";
import IconLink from "../assets/link.svg";
import { useTheme } from "../context/theme-context";
import "../styles/NewsArticle.css";

interface NewsArticleProps{
  list: string;
}

function NewsArticlePage({list}: NewsArticleProps) {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const { id } = useParams();
  const decodedTitle = decodeURIComponent(id || "");
  const navigate = useNavigate();
  const {isDarkMode} = useTheme();
  
  useEffect(() => {
    if (list === "top"){
      getTopNews()
        .then((news) => {
          setNewsArticles(news.articles);
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      getNews()
        .then((news) => {
          setNewsArticles(news.articles);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },[]);

  const article = newsArticles.find(news => news.title === decodedTitle);

  const handleBack = () => {
    navigate("/")
  }

  if (!article){
    return <p>Article not founded</p>
  }

  return (
    <div className={isDarkMode? "news-article-container-dark" : "news-article-container-light"}>
      <div className="back-container">
        <button onClick={handleBack} className={isDarkMode? "i-btn-dark" : "i-btn-light"}>
          <IconArrow/>
        </button>
        <p>Go back</p>
      </div>
      <div className="news-article-content">
        <div className={"news-article-header"}>
          <div className="news-article-introduction">
            <h1>{article.title}</h1>
            <p className="font-m">{article.description}</p>
          </div>
          <hr />
          <ul className="news-article-facts">
            <li className="news-article-fact1">
              <IconDate/>
              <div>
                <p className="font-xs">Date</p>
                <p className="font-s">{new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            </li>
            <li className="news-article-fact1">
              <IconAuthor/>
              <div>
                <p className="font-xs">Author</p>
                <p className="font-s">{article.author}</p>
              </div>
            </li>
            <li className="news-article-fact1">
              <IconSource/>
              <div>
                <p className="font-xs">Source</p>
                <p className="font-s">{article.source.name}</p>
              </div>
            </li>
            <li className="news-article-fact2">
              <IconLink/>
              <a href={article.url || ""} className="font-s">Link to original news</a>
            </li>
          </ul>
        </div>
        <img src={article.urlToImage || ""} alt={article.title} />
        <p className="font-m">{article.content}</p>
      </div>
    </div>
  )
}

export default NewsArticlePage;
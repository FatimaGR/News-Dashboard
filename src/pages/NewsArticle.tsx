import { useEffect, useState } from "react";
import { NewsArticle } from "../interfaces";
import { getNews, getTopNews } from "../services/services";
import { useNavigate, useParams } from "react-router-dom";
import IconArrow from "../assets/arrow.svg";
import IconDate from "../assets/date.svg";
import IconAuthor from "../assets/author.svg";
import IconSource from "../assets/source.svg";
import IconLink from "../assets/link.svg";

interface NewsArticleProps{
  list: string;
}

function NewsArticlePage({list}: NewsArticleProps) {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const { id } = useParams();
  const decodedTitle = decodeURIComponent(id || "");
  const navigate = useNavigate();
  
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
    <div className="news-article-container">
      <div className="back-container">
        <button onClick={handleBack} className="i-btn">
          <IconArrow/>
        </button>
        <p>Go back</p>
      </div>
      <div className="news-article-content">
        <div className="news-article-header">
          <div className="news-article-introduction">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
          <hr />
          <ul className="news-article-facts">
            <li className="news-article-fact1">
              <IconDate/>
              <div>
                <p>Date</p>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            </li>
            <li className="news-article-fact1">
              <IconAuthor/>
              <div>
                <p>Author</p>
                <p>{article.author}</p>
              </div>
            </li>
            <li className="news-article-fact1">
              <IconSource/>
              <div>
                <p>Source</p>
                <p>{article.source.name}</p>
              </div>
            </li>
            <li className="news-article-fact2">
              <IconLink/>
              <a href={article.url || ""}>Link to original news</a>
            </li>
          </ul>
        </div>
        <img src={article.urlToImage || ""} alt={article.title} />
        <p>{article.content}</p>
      </div>
    </div>
  )
}

export default NewsArticlePage;
import Search from "../components/Search";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import NewsList from "../components/NewsList";
import RecentNewsCard from "../components/RecentNewsCard";
import { useEffect, useState } from "react";
import { NewsArticle } from "../interfaces";
import { newsArticles } from "../exampleData";

function Home() {
  const [initialNews, setInitialNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  //const [filter, setFilter] = useState([]);
  //const [sort, setSort] = useState("");

  useEffect(() => {
    setLoading(true);
    setInitialNews(newsArticles);
    setFilteredNews(newsArticles);
    setLoading(false);
  },[]);

  return (
    <>
      <h3>Recent news</h3>
      <RecentNewsCard/>
      <h3>All news</h3>
      <div>
        <Sort/>
        <Sort/>
        <Search/>
      </div>
      <Filter/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <NewsList newsList={filteredNews}/>
      )}
    </>
  )
}

export default Home

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
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setInitialNews(newsArticles);
    setFilteredNews(newsArticles);
    setLoading(false);
  },[]);

  useEffect(() => {
    let updatedNews = [...initialNews];

    if (filter.length > 0){
      updatedNews = updatedNews.filter(article => filter.includes(article.source.name));
    };

    if (sort === "title"){
      updatedNews.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "date"){
      updatedNews.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    };

    setFilteredNews(updatedNews);
  }, [filter, sort, initialNews]);

  const handleSearchSubmit = (title: string): void => {
    const titleUpper: string = title.toUpperCase();

    if (title != "" && filter.length > 0){
      const newsSearched = filteredNews.filter(article => article.title.toUpperCase().includes(titleUpper));
      setFilteredNews(newsSearched);
    } else if (title != "" && filter.length === 0){
      const newsSearched = initialNews.filter(article => article.title.toUpperCase().includes(titleUpper));
      setFilteredNews(newsSearched);
    } else {
      setFilteredNews(initialNews);
    };
  };

  const handleFilter = (newFilter: string[]): void =>{
    setFilter(newFilter);
  };

  const handleSort = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    const value = e.target.value;
    setSort(value);
  };

  return (
    <div className="home-container">
      <h3>Recent news</h3>
      <RecentNewsCard/>
      <h3>All news</h3>
      <div className="sort-container">
        <Sort
          id={"title"}
          value={"title"}
          onChange={handleSort}
          label={"Sort alphabetically"}
        />
        <Sort
          id={"date"}
          value={"date"}
          onChange={handleSort}
          label={"Sort by newest"}
        />
        <Search onSubmit={handleSearchSubmit}/>
      </div>
      <Filter filter={filter} onFilterChange={handleFilter}/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <NewsList newsList={filteredNews}/>
      )}
    </div>
  )
};

export default Home;

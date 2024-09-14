import RecentNewsCard from "./RecentNewsCard";
import { NewsArticle } from "../interfaces";

interface RecentNewsListProps{
  recentNewsList: NewsArticle[];
};

function RecentNewsList({recentNewsList}: RecentNewsListProps) {
  return (
    <div className="recent-news-list-container">
      {recentNewsList.map((recentNews, index) => (
        <RecentNewsCard key={index} article={recentNews}/>
      ))}
    </div>
  )
}

export default RecentNewsList
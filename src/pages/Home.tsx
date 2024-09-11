import Search from "../components/Search";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import NewsList from "../components/NewsList";
import RecentNewsCard from "../components/RecentNewsCard";

function Home() {
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
      <NewsList/>
    </>
  )
}

export default Home

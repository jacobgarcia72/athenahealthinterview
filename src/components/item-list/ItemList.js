import ItemCard from "./item-card/ItemCard";
import PageNav from "./page-nav/PageNav";
import {useState, useEffect} from 'react';

const ItemList = ({repos}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
    // calculate totalPages
    const totalPages = Math.ceil(repos.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [repos]);

  const getCurrentPageRepos = () => {
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;
    return repos.slice(firstIndex, lastIndex);
  }

  const getItemPosition = item => {
    return repos.indexOf(item) + 1;
  }

  return (
    <div>
      <PageNav
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <div className="row">
        {getCurrentPageRepos().map((repo, i) => <ItemCard repo={repo} position={getItemPosition(repo)} key={i} />)}
      </div>
    </div>
  )
}

export default ItemList;
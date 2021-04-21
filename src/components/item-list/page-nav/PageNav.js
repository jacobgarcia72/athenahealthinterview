
const PageNav = ({currentPage, totalPages, setCurrentPage}) => {
  /*
    - number of pages
    - current page
  */

  const handlePageUpdate = (isIncrement) => {
    let newPageNumber;
    if (isIncrement) {
      newPageNumber = Math.min(currentPage + 1, totalPages);
    } else {
      newPageNumber = Math.max(currentPage - 1, 1);
    }
    setCurrentPage(newPageNumber);
  }

  return (
    <div className="row">
      <div onClick={e => handlePageUpdate(false)}>&#60;</div>
      <div>{currentPage} / {totalPages}</div>
      <div onClick={e => handlePageUpdate(true)}>	&#62;</div>
    </div>
  )
}
export default PageNav;

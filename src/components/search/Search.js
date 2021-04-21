
const Search = ({updateSearchFilter, searchTerm}) => {
  return (
    <input type="text" value={searchTerm} onInput={e => updateSearchFilter(e.target.value)} />
  )
}
export default Search;
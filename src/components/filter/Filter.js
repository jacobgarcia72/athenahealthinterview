import './Filter.css';

const Filter = ({languages, updateFilter, currentFilter}) => {

  const filters = ['All'].concat(languages);

  const handleSelectFilter = filter => {
    const newFilter = filter === 'All' ? null : filter;
    updateFilter(newFilter);
  }

  const getClass = language => {
    let className = 'padding link';
    if (language === currentFilter || (language === 'All' && !currentFilter)) {
      className += ' link-selected';
    }
    return className;
  }

  return (
    <div className="row filter">
      {filters.map((language, i) => {
        return (
          <div className={getClass(language)} key={i} onClick={() => handleSelectFilter(language)}>
            {language}
          </div>
        )
      })}
    </div>
  )
}

export default Filter;
import logo from './logo.svg';
import './App.css';
import ItemList from './components/item-list/ItemList';
import Filter from './components/filter/Filter';
import { useEffect, useState } from 'react';
import { getItems } from './services/data';
import Search from './components/search/Search';

function App() {

  const [ repos, setRepos ] = useState([]);
  const [ reposDisplayed, setReposDisplayed ] = useState([]);
  const [ languages, setLanguages ] = useState([]);
  const [ currentFilter, setCurrentFilter ] = useState(null);
  const [ currentSearch, setCurrentSearch ] = useState('');

  useEffect(() => {
    getItems()
      .then(
        res => {
          updateRepos(res.data.items);
        }
      )
  }, []);

  const updateRepos = (repos) => {
    const languages = repos.map(repo => {
      return repo.language || 'None';
    })
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      })
    // null => 'None'
    setLanguages(languages);
    setRepos(repos);
    setReposDisplayed(repos);
  }

  const updateLanguageFilter = currentFilter => {
    const reposToDisplay = currentFilter ? repos.filter(repo => {
      return currentFilter === 'None' ? !repo.language : repo.language === currentFilter
    }) : repos;
    setReposDisplayed(reposToDisplay);
    setCurrentFilter(currentFilter);
    setCurrentSearch('');
  }

  const updateSearchFilter = searchTerm => {
    // find repos that match searchTerm
    if (searchTerm) {
      updateLanguageFilter(null);
    }
    const reposToDisplay = repos.filter(repo => {
      return repo.name.includes(searchTerm) || repo.owner.login.includes(searchTerm);
    });
    // update display
    setReposDisplayed(reposToDisplay);
    setCurrentSearch(searchTerm);
  }
  
  return (
    <div className="App">
      <Filter languages={languages} updateFilter={updateLanguageFilter} currentFilter={currentFilter} />
      <Search updateSearchFilter={updateSearchFilter} searchTerm={currentSearch} />
      <ItemList repos={reposDisplayed} />
    </div>
  );
}

export default App;

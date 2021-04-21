
import axios from 'axios';

export function getItems() {
  const url = 'https://api.github.com/search/repositories?q=stars:>10000&sort=stars';
  return axios.get(url);
}
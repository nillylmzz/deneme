import {useState,useEffect} from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  console.log("render");
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(json => setMonsters(json))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.category.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    console.log("searchField: ",searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Products Api Template</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;


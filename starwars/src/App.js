import React, {useState, useEffect} from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState({})
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect ( ()=> {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then( apiData => {
        console.log("COMPONENT MOUNTED, here is the data fetched:", data);
        setData(apiData.results);
        console.log("STATE SET TO:", data )
      } )
      .catch(err => console.log("COMPONENT MOUNTED, BUT THERE'S A PROBLEM", err))
    }, [])


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {!data[0] ? <h2>Loading...</h2> : <CharacterList data={data} /> }

    </div>
  );
}

export default App;

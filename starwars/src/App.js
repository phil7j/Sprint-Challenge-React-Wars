import React, {useState, useEffect} from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import Header from './components/Header'
import { DotLoader } from 'react-spinners';
import styled from 'styled-components'

const Centered = styled.div`
display: flex;
justify-content: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState({})
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect ( ()=> {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then( apiData => {
        console.log("COMPONENT MOUNTED, here is the data fetched:", apiData);
        setData(apiData.results);
        setNextPage(apiData.next);
        setPrevPage(apiData.prev);
        console.log("STATE SET TO:", apiData )
      } )
      .catch(err => console.log("COMPONENT MOUNTED, BUT THERE'S A PROBLEM", err))
    }, [])

    const getCharacters =  url => {
      setData({})
      fetch(url)
      .then(res => res.json())
      .then( apiData => {
        setData(apiData.results);
        setNextPage(apiData.next);
        setPrevPage(apiData.previous);
        console.log("STATE SET TO:", apiData )
      } )
      .catch(err => console.log("COMPONENT MOUNTED, BUT THERE'S A PROBLEM", err))
    }

  return (
    <div className="App">
      <Header getCharacters={getCharacters} nextPage={nextPage} prevPage={prevPage} />
      {!data[0] ? <Centered>
                    <DotLoader
                      // css={override}
                      sizeUnit={"px"}
                      size={150}
                      color={'black'}
                      loading={!data[0]}
                    />
                  </Centered>
         : <CharacterList data={data} /> }

    </div>
  );
}

export default App;

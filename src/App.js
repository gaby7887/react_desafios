import React from 'react';
import './App.css';
import ItemListContainer from './Containers/ItemListContainer';
import ItemCount from '../src/component/ItemCount/ItemCount';
import NavBar from './component/NavBar/NavBar';

const App = () => {
  return (
    <>
    <div>
        <NavBar />
        <ItemListContainer />
        <ItemCount stock={6} initial={1} />
        
    </div>
    </>
  );
};


   
export default App;

import React from 'react';
import './App.css';
import ItemListContainer from './component/ItemListContainer';
import ItemCount from './component/ItemCount/ItemCount';
import NavBar from './component/NavBar';

const App = () => {
  return (
    <>
    <div>
        <NavBar />
        <ItemListContainer greetings=" Hola! " />
        <ItemListContainer greetings=" Hello! " />
        <ItemCount stock={6} initial={1} />
    </div>
    </>
  );
};


   
export default App;

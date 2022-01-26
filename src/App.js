import './App.css';
import ItemListContainer from './component/ItemListContainer';

import NavBar from './component/NavBar';


const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greetings=" Hola! " />
        <ItemListContainer greetings=" Hello! " />
      </div>  
    </>
  );
};


    
export default App;

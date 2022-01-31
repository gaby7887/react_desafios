import "../../src/App.css"

function ItemListContainer ( props ) {

  return (
      <h1 className="title">
          {props.greetings} Bienvenidos a la tienda de tenis
      </h1>
  );
}

export default ItemListContainer;


/* Este componente es igual al de arriba pero con las props desestructuradas 

function ItemListContainer ({greetings}) {

  return (
      <h1 className="title">
          {greetings} Bienvenidos a la tienda de tenis
      </h1>
  );
}
*/ 
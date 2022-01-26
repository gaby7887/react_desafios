import "../../src/App.css"

function ItemListContainer ( props ) {

  return (
      <h1 className="title">
          {props.greetings} Bienvenidos a la tienda de tenis
      </h1>
  );
}

export default ItemListContainer;
import React, {useState, useEffect} from 'react';
import ItemList from '../component/ItemList/ItemList';

const ItemListContainer = () => {
    const [users, setUsers] = useState ([]);

    console.log(users);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            //.then(json => console.log(json));
            .then((json) => setUsers(json)); 
    }, []);

        return (
          <>
            < ItemList users={users}/>;
          </>
        )  
};

export default ItemListContainer;

import React from 'react';
import Item from '../Item/Item';

const ItemList = ({users}) => {
    
  return (
            <div>
                {users.map((user) => 
                    
                    <div key={user.id}>
                        <Item user={user} />
                    </div>    
                                       
                )}                
            </div>
        )  
};

export default ItemList;

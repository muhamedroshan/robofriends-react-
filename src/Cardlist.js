import React from 'react';
import Card from './Card';

 


const Cardlist = ({robots}) =>{
    return(
        <div>
            {
            robots.map((user,i)=>{
                return(
                    <Card 
                        key={i}
                        name={robots[i].name}
                        email={robots[i].email}
                        id={robots[i].id}
                    />
                );
                })
            }
        </div>
    );
}

export default Cardlist;
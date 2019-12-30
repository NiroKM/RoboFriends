import React from 'react';
import Card from './Card';

const CardList = ({objects})=>{


    return(     <div>
                    {
                        objects.map((name,i)=>{
                            return <Card key={objects[i].id} 
                                        id={objects[i].id} 
                                        name={objects[i].name} 
                                        email={objects[i].email}/>
                        })
                    } 
                </div>
    );
}

export default CardList
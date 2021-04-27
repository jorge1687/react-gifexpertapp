import React, {useState} from 'react'
import {AddCategory} from './componentes/AddCategory'
import {GifGrid} from './componentes/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () =>{
        //setCategories( [...categories,'HunterXhunter'] );

        setCategories(cats => [...cats,'HunterXhunter']);
    };*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>


            <ol>
                {
                    categories.map( (category) =>  
                        <GifGrid 
                            key={category} 
                            category={ category}
                        />
                    )
            
                }
            </ol>
                
        </>
    )

}

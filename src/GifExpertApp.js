

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball'])
    
   // const handleAdd = () => {
        //hago un spread del array que ya tengo y le agrego uno. 
        //setCategories pisa sobre todo el estado anterior
      //  setCategories( [...categories, 'Pokemon'] );
    //}

    return (
        <>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={setCategories}/>
           <hr></hr> 

           

           <ol>
                {
                    categories.map((category) => 
                        <GifGrid
                            key = {category} 
                            category = {category}
                        
                        />
                    )
                }

           </ol>
        </>
    )
}

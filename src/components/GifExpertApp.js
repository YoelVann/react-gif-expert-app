import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['Naruto']);
    const [categories, setCategories] = useState(defaultCategories);
    
    // const handleAdd = () =>{
    //     setCategories([...categories, 'Hunter X Hunter']);
    // }

    return ( 
        <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
        <ol>
            {
                categories.map( category => 
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )    
            }
        </ol>
    
        </>
    );
};

export default GifExpertApp;

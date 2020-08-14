import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Shop({}) {

const APP_ID = "d0da2114";
  const APP_KEY = "4682ab273a8ac4dec17be74adec21bbf";

  const [items, setItems] = useState([]);

  const [query,setQuery] = useState("chicken");

    useEffect(() =>{
        fetchItems();
    }, []);

    const fetchItems = async () => {

        
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        const items = data.hits;
        //console.log(items);
        setItems(items);    
        
    }
    return(
        <div>
            {items.map(item => (
                // <h1 key={item.recipe.calories}>{item.recipe.label}</h1>
                <h1 key={item.recipe.label}>
                   <Link to={`shop/${item.recipe.label}`}>{item.recipe.label}</Link>
                </h1>
            ))}

        </div>
    );
}

export default Shop;
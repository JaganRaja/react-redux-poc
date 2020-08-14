import React, {useEffect, useState} from 'react';
import './App.css';



function ItemDetail({ match }) {

  const APP_ID = "d0da2114";
  const APP_KEY = "4682ab273a8ac4dec17be74adec21bbf";

  const [items, setItems] = useState([]);

  const [item, setItem] = useState({});


  const [query,setQuery] = useState("chicken");

    useEffect(() =>{
      fetchItem()
      //console.log(match);
      
    }, []);

    const fetchItem = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      const items = data.hits;
      console.log("Fetch item called");
      console.log(items);
      setItems(items); 
      clickItem();
      //console.log('after click item',items);
    }

    //console.log('outside access',{items});

    const clickItem = () => {
      //console.log("I am click item");
      console.log(match.params.id);
      console.log('inside click item',items);
      items.map(item =>{
        console.log('*************',items)
        //console.log('Inside click item');
        // if(item.recipe.label === match.params.id){
          //console.log("Hello");
          // setItem(item);
          //console.log(item);
          console.log('I am loop');
        })
      // })
    }

    return(
        <div>
           <h1>Item</h1>
            {/* <h1>{item[0].recipe}</h1> */}
            {/* {items.map(item => (
            ))}; */}

          {/* <h1>{item.recipe.label}</h1> */}

        </div>
    );
}

export default ItemDetail;
import { useState } from "react";
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'
const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) =>{

    if (categories.includes(newCategory)) return;

    setCategories([newCategory,...categories])

  }

  return (
    <>
    <h1>GifExpertApp</h1>


    {/* Input */}
    <AddCategory 
    //setCategories={setCategories}
    onNewCategory={value=> onAddCategory(value)}
    />

    {/* Listado de Gif */}

   



        {categories.map(category => 
          <GifGrid category={category} key={category}/>
        )}
       
       
   

      {/* Gif Item */}


      
    </>
    
  )
}

export default GifExpertApp
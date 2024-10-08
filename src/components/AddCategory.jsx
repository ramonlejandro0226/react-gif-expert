import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();
  
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onsubmit = (e) => {

    e.preventDefault();

    if(inputValue.trim().length <=1) return;
    // setCategories(categories => [inputValue,...categories])
    onNewCategory(inputValue.trim())
    setInputValue('')
    
  };



  return (
    <form onSubmit={(e)=>onsubmit(e)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

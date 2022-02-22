import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState("");
    const handleInputChange = (e) =>{
        
        setinputValue(e.target.value)
    }

    const handleSubmmit = (e) =>{
        e.preventDefault();
        if( inputValue.trim().length>2){
            setCategories(cats => [inputValue,...cats]);
            setinputValue('');
        }
    }
  return (
      <form onSubmit={ handleSubmmit }>
        <h1>{inputValue}</h1>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
      </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

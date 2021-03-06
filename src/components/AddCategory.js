import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length < 3 ) return;
    setCategories( cats => [inputValue,...cats]);
    setInputValue('');
    
  }

  return (
    <form data-testid='AddCategoryForm' onSubmit={handleSubmit}>
      <input
        data-testid='AddCategoryInput'
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
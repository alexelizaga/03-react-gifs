import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = ({ defaultCategories }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        { 
          categories.map((category, index) => (
            <GifGrid key={category + index} category={category} />
          ))
        }
      </ol>
    </>
  )
}

GifApp.propTypes = {
  defaultCategories: PropTypes.arrayOf(String),
}

GifApp.defaultProps = {
  defaultCategories: ['One Punch'],
};

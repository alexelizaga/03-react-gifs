import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

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

export default GifApp;

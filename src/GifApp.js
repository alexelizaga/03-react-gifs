import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';

const GifApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = (newCategory) => {
  //   setCategories([...categories, newCategory]);
  // };

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory />
      <hr />

      <button onClick={() =>{}}>Agregar</button>

      <ol>
        { 
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ol>
    </>
  )
}

export default GifApp;

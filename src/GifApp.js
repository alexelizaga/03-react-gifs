import React, { useState } from 'react';

const GifApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h2>GifApp</h2>
      <hr />

      <button onClick={() => handleAdd('HunterXHunter')}>Agregar</button>

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

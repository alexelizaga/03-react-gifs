import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);
  

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=Rick+and+Morty&api_key=ThjRH4OtNo7NKbCvpTb44j4dhB1tuM7a';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    });

    console.log(gifs);
    setImages(gifs);
  }

  return (
    <div>
      <h3>{ category }</h3>
      {
        images.map( img => (
          <GifGridItem
            key={img.id}
            { ...img }
          />
        ))
      }
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
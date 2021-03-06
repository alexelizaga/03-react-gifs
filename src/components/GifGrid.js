import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <div data-testid='GifGrid'>
      <h3 data-testid="GifGridTitle" className='animate__animated animate__fadeIn'>{ category }</h3>

      { loading && <p data-testid='GifGridLoading' className='animate__animated animate__flash'>Loading...</p> }

      <div className='card-grid'>
        {
          images.map( img => (
            <GifGridItem
              key={img.id}
              { ...img }
            />
          ))
        }
      </div>

    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
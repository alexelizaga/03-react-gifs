import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url}) => {
  return (
    <div data-testid='GifGridItem' className='card animate__animated animate__fadeIn'>
      <img data-testid='GifGridItemImg' src={url} alt={title} />
      <p data-testid='GifGridItemTitle'>{ title }</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
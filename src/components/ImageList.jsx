import React from 'react';

const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => (
    <img key={id} alt={description} src={urls.regular} />
  ));

  console.log(props.images);
  return <div>{images}</div>;
};

export default ImageList;

// Import Modules
import React from 'react';

// Import CSS
import './ImageList.css';

// Import Components
import ImageCard from './ImageCard';

const ImageList = ({images}) =>  (<div className="image-list"> {images.map(image => <ImageCard key={image.id} image={image} /> )}  </div>);

export default ImageList;

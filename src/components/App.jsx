// Import Modules
import React, { useState } from 'react';
import unsplash from '../api/unsplash';

// Import Components
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async value => {
    const response = await unsplash.get('search/photos', {
      params: { query: value }
    });
    setImages(response.data.results)
  };

    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList images={images} />
      </div>
    );
}

export default App;

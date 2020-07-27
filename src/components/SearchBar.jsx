// Import Modules
import React, { useState } from 'react';

const SearchBar = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  const onInputChange = e => setValue(e.target.value);  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="input">Image Search</label>
          <input type="text" name="search" id="input" value={value} onChange={onInputChange}/>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

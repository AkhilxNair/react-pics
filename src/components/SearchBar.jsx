import React, { Component } from 'react';

class SearchBar extends Component {
  state = { value: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  onInputChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="input">Image Search</label>
            <input
              type="text"
              name="search"
              id="input"
              value={value}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

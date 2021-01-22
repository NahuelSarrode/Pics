import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: '' }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              placeholder="Insert an pic name" 
              required
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

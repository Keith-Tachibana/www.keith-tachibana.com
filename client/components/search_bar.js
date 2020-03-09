import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="search-bar">
        <div className="input-group">
          <div className="input-group-prepend">
            <i className="input-group-text bg-danger fab fa-youtube pt-2"></i>
          </div>
          <input
            type="search"
            name="youtube-search"
            value={this.state.term}
            placeholder="Enter YouTube video to search"
            className="form-control mr-sm-2"
            required="required"
            onChange={event => this.onInputChange(event.target.value)} />
          <button
            type="submit"
            name="youtube-submit"
            className="btn btn-outline-danger my-2 my-sm-0">
              Submit
          </button>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;

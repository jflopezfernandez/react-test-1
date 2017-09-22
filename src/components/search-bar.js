
/** Search Bar Component
 *
 *  Description: [TBD]
 *
 *  Date:   22-September-2017
 *  Author: Jose Fernando Lopez Fernandez
 *
 *  This component will be the search bar that users will use to search for
 *  videos on Youtube.
 *
 */

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
        <div>
          <input
              value={ this.state.term }
              onChange={ event => this.setState({ term: event.target.value }) }
          />
        </div>
    );
  }
}


export default SearchBar;


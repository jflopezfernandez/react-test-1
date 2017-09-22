
/** Main Application Component
 *
 *  Description: [TBD]
 *
 *  Author: Jose Fernando Lopez Fernandez
 *  Date:   22-September-2017
 *
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyDFJBblX90EZRJCTrMrDWWhMlfKlAjObQE';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch( { key: API_KEY, term: 'motivation' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
        <div>
          <p>YouTube Search</p>
          <SearchBar />
          <VideoList videos={ this.state.videos } />
        </div>
    );
  }
}


/** Render all of our components onto the web page */
ReactDOM.render(<App />, document.querySelector('.container'));



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
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyDFJBblX90EZRJCTrMrDWWhMlfKlAjObQE';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch( { key: API_KEY, term: 'motivation' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
        <div>
          <SearchBar />
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList
              onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
              videos={ this.state.videos }
          />
        </div>
    );
  }
}


/** Render all of our components onto the web page */
ReactDOM.render(<App />, document.querySelector('.container'));


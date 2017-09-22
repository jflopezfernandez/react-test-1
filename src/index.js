
/** Main Application Component
 *
 *  Description: [TBD]
 *
 *  Author: Jose Fernando Lopez Fernandez
 *  Date:   22-September-2017
 *
 */

const API_KEY = 'AIzaSyDFJBblX90EZRJCTrMrDWWhMlfKlAjObQE';

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
};


/** Render all of our components onto the web page */
ReactDOM.render(<App />, document.querySelector('.container'));


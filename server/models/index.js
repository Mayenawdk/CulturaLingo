const User = require('./User');
const Inage = require('./Image');

import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantList from './RestaurantList';

const App = () => (
  <div>
    <RestaurantList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));


module.exports = {User, Image};
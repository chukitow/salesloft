import React from 'react';
import ReactDOM from 'react-dom';
import PeopleDashboard from '../applications/people_dashboard';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<PeopleDashboard />, document.querySelector('#people_dashboard'))
});

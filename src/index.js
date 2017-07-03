import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

document.getElementById('rerender').addEventListener('click', () => {
  ReactDOM.render(<App title="Rerender" />, document.getElementById('root'));
});

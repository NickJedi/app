import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'normalize.css'
import './index.sass'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.register();

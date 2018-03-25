import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/CardList';
import { robots } from './robots';
import 'tachyons';

// /*import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<CardList robots={robots} />
	</div> 

, document.getElementById('root'));
registerServiceWorker();

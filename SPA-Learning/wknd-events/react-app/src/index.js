	import React from 'react';
	import ReactDOM from 'react-dom';
	import {ModelManager, Constants} from '@adobe/cq-spa-page-model-manager';
	import './index.css';
	import App from './App';
	import "./components/MappedComponents";

	function render(model) {
		ReactDOM.render((<App cqChildren={ model[Constants.CHILDREN_PROP]} cqItems = { model[Constants.ITEM_PROP]} cqItemsOrder = { model[Constants.ITEM_ORDER_PROP]}
							cqPath = { ModelManager.rootPath } locationPathname = { window.locationPathname } />), document.getElementById('root'));
		}

	ModelManager.initialize( { path: process.env.REACT_APP_PAGE_MODEL_PATH} ).then(render);

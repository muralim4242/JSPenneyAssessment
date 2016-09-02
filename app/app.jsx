var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Products = require('Products');
var actions = require('actions');
var store = require('configureStore').configure();
var ProductsAPI = require('ProductsAPI');



store.subscribe(() => {
  var state = store.getState();
});

var initialProducts = ProductsAPI.getProducts();


store.dispatch(actions.addProducts(initialProducts));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Products/>
  </Provider>,
  document.getElementById('app')
);

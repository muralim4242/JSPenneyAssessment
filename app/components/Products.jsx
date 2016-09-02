var React = require('react');

import ProductList from 'ProductList'
 import ProductSearchAndFilters from 'ProductSearchAndFilters';

  var Products = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container">
            <ProductSearchAndFilters/>
            <ProductList/>
        </div>
      </div>
    )
  }
});

module.exports = Products;

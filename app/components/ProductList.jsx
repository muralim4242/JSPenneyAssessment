var React = require('react');
var {connect} = require('react-redux');
import Product from 'Product';
var ProductsAPI = require('ProductsAPI');

export var ProductList = React.createClass({
  render: function () {
    var {products, filterType, searchText} = this.props;
    var renderProducts = () => {
      if (products.length === 0) {
        return (
          <li className="container__message">No Product</li>
        );
      }

      return ProductsAPI.filterProducts(products, filterType, searchText).map((product) => {
        return (<div style={{border:"1px solid #e6e6e6"}} className="column"><li><Product key={product.productId} {...product}/></li></div>

        );
      });
    };

    return (
      <div className="font12px">
        <ul className="row small-up-2 medium-up-3 large-up-4">  {renderProducts()}</ul>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ProductList);

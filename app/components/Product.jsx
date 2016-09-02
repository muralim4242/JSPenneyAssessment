var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Product = React.createClass({
    render: function() {
        var {
            productId,
            title,
            productUrl,
            review,
            specification,
            maximumRetailPrice,
            emiOption,
            dispatch
        } = this.props;
        var specifications = () => {
            return specification.map((spec) => {
                return (
                    <li key={spec} style={{float:"left"}}>
                        {spec}
                    </li>
                )
            });
        }
        return (
            <div>

                <h4>{title}</h4>
                <div className="row">
                    <img width="266px" style={{height:"266px"}} className="thumbnail" src={productUrl}/>
                </div>
                <div className="row"> {"(Stars "+review.rating}
                    - {review.reviews + " ratings) >"}
                </div>
                <hr/>
                <div className="row">
                  <strong>{"RS. "+maximumRetailPrice}</strong><br/>
                  <span>EMI from RS. {emiOption}</span>
                </div>
                <hr/>
                <ul>
                    {specifications()}</ul>
                <hr/>
                <div className="row">
                    <label>
                        <input type="checkbox"/>
                        Add to compare
                    </label>
                </div>
            </div>
        )
    }
});

export default connect()(Product);

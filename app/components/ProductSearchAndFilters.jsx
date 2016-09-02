var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var ProductSearchAndFilters = React.createClass({
    render: function() {
        var {dispatch, filterType, searchText} = this.props;

        return (
            <div>

                <div className="top-bar">
                    <div className="top-bar-title">
                        <h4>JSPenney Assessment</h4>
                    </div>
                    <div>
                        <div className="top-bar-right">

                            <input type="search" ref="searchText" placeholder="Search product" value={searchText} onChange={() => {
                                var searchText = this.refs.searchText.value;
                                dispatch(actions.setSearchText(searchText));
                            }}/>
                        </div>
                    </div>
                </div>

                <ul>
                    <li>
                        <label>
                            <input type="radio" value="popularity" checked={filterType === 'popularity'} onChange={() => {
                                dispatch(actions.setFilterType("popularity"))
                            }}/>
                            Popularity
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value="option2" checked={filterType === 'lPrice'} onChange={() => {
                                dispatch(actions.setFilterType('lPrice'))
                            }}/>
                            Low Price
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value="option3" checked={filterType === 'hPrice'} onChange={() => {
                                dispatch(actions.setFilterType('hPrice'))
                            }}/>
                            High Price
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value="option3" checked={filterType === 'new'} onChange={() => {
                                dispatch(actions.setFilterType('new'))
                            }}/>
                            New
                        </label>
                    </li>
                </ul>
                <br/>
                <br/>
            </div>
        )
    }
});

export default connect((state) => {
    return {filterType: state.filterType, searchText: state.searchText}
})(ProductSearchAndFilters);

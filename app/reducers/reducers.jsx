
export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var filterTypeReducer = (state = "new", action) => {
  switch (action.type) {
    case 'SET_FILTER_TYPE':
      return action.filterType;
    default:
      return state;
  }
};

export var addProductsReducer=(state=[],action)=>
{
  switch (action.type) {
    case "ADD_PRODUCTS":return [
      ...state,
      ...action.products
    ];
    default:
    return state;
  }
};

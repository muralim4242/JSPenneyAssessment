export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var setFilterType = (filterType) => {
  return {
    type: 'SET_FILTER_TYPE',
    filterType
  };
};

export var addProducts = (products) => {
  return {
    type: 'ADD_PRODUCTS',
    products
  };

};

var $ = require('jquery');

module.exports = {
    getProducts: function() {
        //      var stringProducts = products;
        debugger;
        var tempProducts = [];

        try {
            tempProducts = products;
        } catch (e) {}
        return $.isArray(tempProducts)
            ? tempProducts
            : [];
    },
    filterProducts: function(products, filterType, searchText) {
        var filteredProducts = products;

        // Filter by filterType
        // filteredProducts = filteredProducts.filter((product) => {
        //     return !product.completed || filterType;
        // });

        // Filter by searchText
        filteredProducts = filteredProducts.filter((product) => {
            var text = product.title.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // Sort products with non-completed first
        switch (filterType) {
            case "new":
                filteredProducts.sort((a, b) => {
                    return new Date(b.releaseDate) - new Date(a.releaseDate);
                });
                break;
            case "lPrice":
                filteredProducts.sort((a, b) => {
                    return a.maximumRetailPrice - b.maximumRetailPrice;
                });
                break;
            case "hPrice":
                filteredProducts.sort((a, b) => {
                    return b.maximumRetailPrice - a.maximumRetailPrice;
                });
                break;
            default:
                filteredProducts.sort((a, b) => {
                    return b.review.rating - a.review.rating;
                });
                break;
        }

        return filteredProducts;
    }
};

var products = [
    {
        "productId": 1,
        "title": "Galaxy",
        "productDescription": "",
        "productFamily": null,
        "maximumRetailPrice": 1145,
        "productUrl": "image1.jpg",
        "productBrand": "Samsung",
        "inStock": true,
        "codAvailable": true,
        "discountPercentage": 0,
        "offers": [],
        "category": "Mobile",
        "color": "Black",
        "review": {
            "rating": 5,
            "reviews": 400
        },
        "specification": [
            "3 GB RAM | 16 GB ROM | Expandable Upto 128 GB", "5 inch Full HD Display", "13MP Primary Camera | 5MP Front"
        ],
        "emiOption": 400,
        "releaseDate": "2016-09-02"
    }, {
        "productId": 2,
        "title": "motog",
        "productDescription": "",
        "productFamily": null,
        "maximumRetailPrice": 6000,
        "productUrl": "image2.jpg",
        "productBrand": "Motalrola",
        "inStock": true,
        "codAvailable": true,
        "discountPercentage": 0,
        "offers": [],
        "category": "Mobile",
        "color": "Black",
        "review": {
            "rating": 4,
            "reviews": 400
        },
        "specification": [
            "3 GB RAM | 16 GB ROM | Expandable Upto 128 GB", "5 inch Full HD Display", "13MP Primary Camera | 5MP Front"
        ],
        "emiOption": 400,
        "releaseDate": "2016-09-23"
    }, {
        "productId": 3,
        "title": "Cube",
        "productDescription": "",
        "productFamily": null,
        "maximumRetailPrice": 1200,
        "productUrl": "image3.jpg",
        "productBrand": "Leneovo",
        "inStock": true,
        "codAvailable": true,
        "discountPercentage": 0,
        "offers": [],
        "category": "Mobile",
        "color": "White",
        "review": {
            "rating": 3,
            "reviews": 400
        },
        "specification": [
            "3 GB RAM | 16 GB ROM | Expandable Upto 128 GB", "5 inch Full HD Display", "13MP Primary Camera | 5MP Front"
        ],
        "emiOption": 400,
        "releaseDate": "2016-09-12"
    }, {
        "productId": 4,
        "title": "cloud",
        "productDescription": "",
        "productFamily": null,
        "maximumRetailPrice": 3000,
        "productUrl": "image4.jpg",
        "productBrand": "Intex",
        "inStock": true,
        "codAvailable": true,
        "discountPercentage": 0,
        "offers": [],
        "category": "Mobile",
        "color": "Black",
        "review": {
            "rating": 4,
            "reviews": 400
        },
        "specification": [
            "3 GB RAM | 16 GB ROM | Expandable Upto 128 GB", "5 inch Full HD Display", "13MP Primary Camera | 5MP Front"
        ],
        "emiOption": 400,
        "releaseDate": "2016-09-04"
    }, {
        "productId": 5,
        "title": "Widows phone",
        "productDescription": "",
        "productFamily": null,
        "maximumRetailPrice": 5000,
        "productUrl": "image5.jpg",
        "productBrand": "Micromax",
        "inStock": true,
        "codAvailable": true,
        "discountPercentage": 0,
        "offers": [],
        "category": "Mobile",
        "color": "Black",
        "review": {
            "rating": 5,
            "reviews": 400
        },
        "specification": [
            "3 GB RAM | 16 GB ROM | Expandable Upto 128 GB", "5 inch Full HD Display", "13MP Primary Camera | 5MP Front"
        ],
        "emiOption": 400,
        "releaseDate": "2016-08-02"
    }

]

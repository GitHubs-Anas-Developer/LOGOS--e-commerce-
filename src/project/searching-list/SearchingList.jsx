import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SearchingList.css";
import { FetchAllProducts } from "../context-api/ContextApi";

function SearchingList() {
  const { products } = useContext(FetchAllProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      // Filter products based on search query
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      // If no query, display all products
      setFilteredProducts(products);
    }
  }, [products, location.search]);

  const handleBuyNow = (product, event) => {
    // Implement your buy now logic here
    console.log("Buy Now clicked for product:", product);
  };

  const handleAddToCart = (product, event) => {
    // Implement your add to cart logic here
    console.log("Add to Cart clicked for product:", product);
  };

  return (
    <div className="Products-All">
      <div className="product-card-row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card product-card">
              <div className="card-body">
                <Link
                  to={`/product-details/${product.id}`}
                  className="card-title-link"
                >
                  <img
                    src={product.image.url}
                    className="card-img-top product-img"
                    alt="Product"
                  />
                  <p className="card-name">{product.name}</p>
                </Link>
                <h5 className="card-price">
                  {product.price.formatted_with_symbol}
                </h5>
                <div className="productall-button">
                  <a
                    onClick={(event) => handleBuyNow(product, event)}
                    href="#"
                    className="buy-btn"
                  >
                    BUY NOW
                  </a>
                  <a
                    onClick={(event) => handleAddToCart(product, event)}
                    href="#"
                    className="cart-btn"
                  >
                    <i className="cart-icon ion-bag"></i>ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    </div>
  );
}

export default SearchingList;

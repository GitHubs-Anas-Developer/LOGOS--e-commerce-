import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FetchAllProducts } from "../context-api/ContextApi";
import "./ProductsAll.css";

function ProductsAll({ handleAddToCart }) { 
  const { products } = useContext(FetchAllProducts);

  const handleBuyNow = (product, event) => {
    event.preventDefault();
    window.open(product.checkout_url.display, "_blank"); 
  };

  return (
    <div className="Products-All">
      <div className="product-card-row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="card product-card">
              <div className="card-body">
                <Link
                  to={`/product-details/${product.id}`}
                  className="card-title-link"
                >
                  {product.image && product.image.url ? (
                    <img
                      src={product.image.url}
                      className="card-img-top product-img"
                      alt="Product"
                    />
                  ) : (
                    <img
                      src="placeholder-image-url" // Provide a placeholder image URL
                      className="card-img-top product-img"
                      alt="Product"
                    />
                  )}
                  <p className="card-name">{product.name || "Unnamed Product"}</p>
                </Link>
                <h5 className="card-price">
                  {product.price ? product.price.formatted_with_symbol : "N/A"}
                </h5>
                <div className="productall-button">
                  <a
                    onClick={(event) => handleBuyNow(product, event)}
                    href="#"
                  >
                    BUY NOW
                  </a>
                  <a
                    onClick={(event) => {
                      event.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="cart-btn"
                    href="#"
                  >
                    <i className="cart-icon ion-bag"></i>ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
}

export default ProductsAll;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CategoriesPage.css";

function CategoryPage({handleAddToCart}) {
  const { slug } = useParams(); // Get the slug from URL
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://api.chec.io/v1/products?category_slug=${slug}`,
          {
            headers: {
              "X-Authorization":
                "pk_test_56703f7819475f76900a14a77dcdeb47a0f9e882d243e",
            },
          }
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [slug]);

  

  const handleBuyNow = (product) => {
    setCheckout(product.checkout_url.display);
    console.log("Buying product:", product.checkout_url.display);
    window.open(product.checkout_url.display, "_blank"); // Open in new tab
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

export default CategoryPage;

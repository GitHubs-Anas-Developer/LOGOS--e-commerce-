import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

function ProductDetails({ handleAddToCart }) {
  const { productId } = useParams(); // Get the product ID from URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.chec.io/v1/products/${productId}`,
          {
            headers: {
              "X-Authorization":
                "pk_test_56703f7819475f76900a14a77dcdeb47a0f9e882d243e",
            },
          }
        );
        setProduct(response.data);
        setSelectedImage(response.data.assets[0].url); // Set the first image as selected by default
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleBuyNow = () => {
    if (product && product.checkout_url) {
      window.open(product.checkout_url.display, "_blank"); // Open in new tab
    }
  };

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (!product) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <h3 className="mt-5 mb-4">Product Details</h3>
      <div className="row">
        <div className="col-md-6">
          <img src={selectedImage} alt={product.name} className="img-fluid mb-3" />
          <div className="img-thumbnails">
            {product.assets.map((asset, index) => (
              <img
                src={asset.url}
                alt={product.name}
                className="thumbnail"
                key={index}
                onClick={() => handleImageSelect(asset.url)}
              />
            ))}
          </div>
        </div>
        <div className="col-md-6 product-detail-page-col-2">
          <h6>{product.name}</h6>
          <p className="lead">{product.price.formatted_with_symbol}</p>
          <button
            className="btn btn-primary mr-2"
            onClick={(event) => {
              event.preventDefault();
              handleAddToCart(product);
            }}
          >
            Add to Cart
          </button>
          <button className="btn btn-success" onClick={handleBuyNow}>
            Buy Now
          </button>
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const handleQuantityChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = value;
    setItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((acc, item) => {
      const itemPrice = item.price.raw || 0; // Assuming item.price.raw is the numerical value
      const itemQuantity = item.quantity || 1;
      return acc + itemPrice * itemQuantity;
    }, 0);
    const tax = subtotal * 0.05;
    const shipping = 0.0; // Flat shipping rate
    const grandTotal = subtotal + tax + shipping;
    return { subtotal, tax, shipping, grandTotal };
  };

  const { subtotal, tax, shipping, grandTotal } = calculateTotals();

  const handleBuyNow = (item, event) => {
    event.preventDefault();
    // Assuming items has a checkout_url object with a display property
    window.open(item.checkout_url.display, "_blank");
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {items.map((item, index) => (
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>

        
          <div className="product" key={index}>
            <div className="product-image">
              {item.image && item.image.url ? (
                <img src={item.image.url} alt={item.name} />
              ) : (
                <img src="placeholder-image-url" alt="Placeholder" />
              )}
            </div>
            <div className="product-details">
              <div className="product-title">{item.name || "Unnamed Product"}</div>
            </div>
            <div className="product-price">
              {item.price && item.price.formatted_with_symbol ? item.price.formatted_with_symbol : "N/A"}
            </div>
            <div className="product-quantity">
              <input
                type="number"
                value={item.quantity || 1}
                min="1"
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
              />
            </div>
            <div className="product-removal">
              <button className="remove-product" onClick={() => handleRemoveItem(index)}>
                Remove
              </button>
            </div>
            <div className="product-line-price">
              {item.price && item.quantity && item.price.raw
                ? (item.price.raw * item.quantity).toFixed(2)
                : "N/A"}
            </div>
          </div>
     

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              {subtotal.toFixed(2)}
            </div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">
              {tax.toFixed(2)}
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              {shipping.toFixed(2)}
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              {grandTotal.toFixed(2)}
            </div>
          </div>
        </div>

        <button onClick={(event) => handleBuyNow(item, event)} className="checkout">
          Checkout
        </button>
      </div>
    ))}
    </div>
  );
};

export default Cart;

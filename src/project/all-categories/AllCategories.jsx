import React, { useContext } from "react";
import { FetchAllProducts } from "../context-api/ContextApi";
import "./AllCategories.css";
import { Link } from "react-router-dom";

function AllCategories() {
  const { categories } = useContext(FetchAllProducts);

  return (
    <div className="AllCategories">
      {categories.map((category) => (
        <Link to={`/category/${category.slug}`}>
          <div key={category.id} className="category-card">
            <img
              src={category.assets[0].url}
              alt={""}
              className="category-image"
            />
            <h3>{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AllCategories;

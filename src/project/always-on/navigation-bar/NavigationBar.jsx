import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavigationBar.css";
import { FaHome } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

function NavigationBar() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://api.chec.io/v1/categories", {
          headers: {
            "X-Authorization":
              "pk_test_56703f7819475f76900a14a77dcdeb47a0f9e882d243e",
          },
        });
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/searching-list?query=${searchQuery}`);
  };

  return (
    <div className="navigation">
      <div className="navigationbar">
        <div className="row">
          <div className="col-3 company-name">
            <Link className="Link" to={"/home"}>
              <h3>LOGOS</h3>
            </Link>
          </div>
          <div className="col-9">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="search"
                name="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="navigation-bottom">
        <div className="row">
          <div className="col-3">
            <Link to={"/home"}>
              <FaHome className="home-btn" />
            </Link>
          </div>
          <div className="col-2">
            <Link to={"/products-all"}>
              <FaProductHunt className="product-all-btn" />
            </Link>
          </div>
          <div className="col-2">
         <Link to={"/all-categories"}>  <BiSolidCategoryAlt className="categories-btn" /></Link> 
          </div>
          <div className="col-2">
            <Link to={"/cart"}>
              <FaCartShopping className="cart-btn" />
            </Link>
          </div>
          <div className="col-3">
       <Link to={"/signup"}>   <MdAccountCircle className="account-btn" /> </Link>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;

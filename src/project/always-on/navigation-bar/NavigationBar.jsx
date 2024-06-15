import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavigationBar.css";
import { CgProfile } from "react-icons/cg";

function NavigationBar() {
  const [categories, setCategories] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const handleDropdownItemClick = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/searching-list?query=${searchQuery}`);
  };

  return (
    <div className="navigationbar">
      <span className="openSidebarBtn" onClick={toggleSidebar}>
        &#9776;
      </span>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={toggleSidebar}
        >
          &times;
        </a>
        <Link to="/home" onClick={handleDropdownItemClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleDropdownItemClick}>
          About
        </Link>
        <Link to="/contact" onClick={handleDropdownItemClick}>
          Contact
        </Link>
        <Link to="/cart" onClick={handleDropdownItemClick}>
          Cart
        </Link>
        <Link to="/products-all" onClick={handleDropdownItemClick}>
          Products All
        </Link>
        <div className="dropdown">
          <a
            className="dropdown-toggle"
            href="#"
            id="sidebarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="sidebarDropdown">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index}>
                  <Link
                    className="dropdown-item"
                    to={`/category/${category.slug}`}
                    onClick={handleDropdownItemClick}
                  >
                    {category.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <a className="dropdown-item" href="#">
                  No categories available
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="searching-bar">
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

      <div className="profile">
        <Link to="/login">
          <CgProfile />
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;

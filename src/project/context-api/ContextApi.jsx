import React, { createContext, useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";

const commerce = new Commerce(
  "pk_test_56703f7819475f76900a14a77dcdeb47a0f9e882d243e"
);

export const FetchAllProducts = createContext();

const AllProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [others, setOthers] = useState([]);
  const [drones, setDrones] = useState([]);
  const [mobiles, setMobiles] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [fashions, setFashions] = useState([]);
  const [tshirts, setTshirts] = useState([]);
  const [books, setBooks] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [airpods, setAirpods] = useState([]);
  const [smartwatch, setSmartwatch] = useState([]);
  const [watch, setWatch] = useState([]);
  const [categories, setCategories] = useState([]);
  console.log("cate", categories);

  useEffect(() => {
    const fetchProducts = async (categorySlug, setter) => {
      try {
        const { data } = await commerce.products.list({
          category_slug: categorySlug,
          limit: 100,
        });
        setter(data);
      } catch (error) {
        console.error(
          `Error fetching ${categorySlug || "all"} products:`,
          error
        );
      }
    };

    const fetchCategories = async () => {
      try {
        const { data } = await commerce.categories.list({
          limit: 50,
        });
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts(null, setProducts);
    fetchProducts("others", setOthers);
    fetchProducts("4-k-drone", setDrones);
    fetchProducts("mobiles", setMobiles);
    fetchProducts("shoes", setShoes);
    fetchProducts("laptop", setLaptops);
    fetchProducts("fashions", setFashions);
    fetchProducts("t-shirts", setTshirts);
    fetchProducts("books", setBooks);
    fetchProducts("cameras", setCameras);
    fetchProducts("airpods", setAirpods);
    fetchProducts("smartwatch", setSmartwatch);
    fetchProducts("watch", setWatch);
    fetchCategories();
  }, []);

  return (
    <FetchAllProducts.Provider
      value={{
        products,
        others,
        drones,
        mobiles,
        shoes,
        laptops,
        fashions,
        tshirts,
        books,
        cameras,
        airpods,
        smartwatch,
        watch,
        categories,
      }}
    >
      {children}
    </FetchAllProducts.Provider>
  );
};

export default AllProductsProvider;

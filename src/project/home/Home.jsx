import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import { FetchAllProducts } from "../context-api/ContextApi";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrNext } from "react-icons/gr";
function Home() {
  const [categories, setCategories] = useState([]);
  const {
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
  } = useContext(FetchAllProducts);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.chec.io/v1/categories?products=slug:books",
          {
            headers: {
              "X-Authorization":
                "pk_test_56703f7819475f76900a14a77dcdeb47a0f9e882d243e",
            },
          }
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="Home">
      <div className="alert">Welcome to LOGOS</div>
      <Carousel>
        <Carousel.Item className="banner-img">
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/65/66/77/65667746c8d6bab69017f26cb6202df7.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="banner-img">
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/174/590/small/fashion-advertising-web-banner-illustration-vector.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="banner-img">
          <img
            className="d-block w-100"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/supper-sale-banner-ad-for-shoes-offre-design-template-263b3813e52a6a6eb85fa45fd49ca3b4_screen.jpg?ts=1625994393"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <h3 style={{ textAlign: "start" }}>All categories</h3>
      <div className="Categories">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div className="categories-img" key={category.id}>
              {category.assets && category.assets.length > 0 && (
                <Link to={`/category/${category.slug}`}>
                  <img src={category.assets[0].url} alt={category.name} />
                  {category.name}
                </Link>
              )}
            </div>
          ))
        ) : (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <div className="row-section-01">
        <div className=" row content-net-btn">
          <div className="col-10">
            <h3 style={{ textAlign: "start" }}>All products</h3>
          </div>
          <div className="col-2">
            <Link to={"/products-all"}>
              {" "}
              <GrNext className="see-all-btn" />
            </Link>
          </div>
        </div>

        <div className="Categories-home-page-products">
          {products.length > 0 ? (
            products.map((prod) => (
              <div className="Home-card" key={prod.id}>
                <Link to={`/product-details/${prod.id}`}>
                  {prod.image && prod.image.url ? (
                    <img
                      className="home-card-img"
                      src={prod.image.url}
                      alt={prod.name}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </Link>
                <h5 className="home-page-card-price">
                  {prod.price.formatted_with_symbol}
                </h5>
              </div>
            ))
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-02">
        <h3 style={{ textAlign: "start" }}>Electrical Appliances</h3>
        <div className="col-12 Electrical-Appliances">
          {others.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {others.map((md) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={md.id}
                >
                  <Link to={`/product-details/${md.id}`}>
                    {md.image && md.image.url ? (
                      <img
                        src={md.image.url}
                        className="card-img-top"
                        alt={md.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{md.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-03">
        <h3 style={{ textAlign: "start" }}>4K Drone</h3>
        <div className="col-12 drone">
          {drones.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {drones.map((drone) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={drone.id}
                >
                  <Link to={`/product-details/${drone.id}`}>
                    {drone.image && drone.image.url ? (
                      <img
                        src={drone.image.url}
                        className="card-img-top"
                        alt={drone.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{drone.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-04">
        <h3 style={{ textAlign: "start" }}>Mobiles</h3>
        <div className="col-12 mobiles">
          {mobiles.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {mobiles.map((mobile) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={mobile.id}
                >
                  <Link to={`/product-details/${mobile.id}`}>
                    {mobile.image && mobile.image.url ? (
                      <img
                        src={mobile.image.url}
                        className="card-img-top"
                        alt={mobile.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{mobile.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-05">
        <h3 style={{ textAlign: "start" }}>Shoes</h3>
        <div className="col-12 shoes">
          {shoes.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {shoes.map((shoe) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={shoe.id}
                >
                  <Link to={`/product-details/${shoe.id}`}>
                    {shoe.image && shoe.image.url ? (
                      <img
                        src={shoe.image.url}
                        className="card-img-top"
                        alt={shoe.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{shoe.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-06">
        <h3 style={{ textAlign: "start" }}>Laptop</h3>
        <div className="col-12 laptop">
          {laptops.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {laptops.map((laptop) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={laptop.id}
                >
                  <Link to={`/product-details/${laptop.id}`}>
                    {laptop.image && laptop.image.url ? (
                      <img
                        src={laptop.image.url}
                        className="card-img-top"
                        alt={laptop.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{laptop.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-07">
        <h3 style={{ textAlign: "start" }}>Fashions</h3>
        <div className="col-12 fashion">
          {fashions.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {fashions.map((fashion) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={fashion.id}
                >
                  <Link to={`/product-details/${fashion.id}`}>
                    {fashion.image && fashion.image.url ? (
                      <img
                        src={fashion.image.url}
                        className="card-img-top"
                        alt={fashion.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{fashion.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-08">
        <h3 style={{ textAlign: "start" }}>T-Shirt</h3>
        <div className="col-12 t-shirt">
          {tshirts.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {tshirts.map((tshirt) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={tshirt.id}
                >
                  <Link to={`/product-details/${tshirt.id}`}>
                    {tshirt.image && tshirt.image.url ? (
                      <img
                        src={tshirt.image.url}
                        className="card-img-top"
                        alt={tshirt.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{tshirt.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-09">
        <h3 style={{ textAlign: "start" }}>Books</h3>
        <div className="col-12 books">
          {books.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {books.map((book) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={book.id}
                >
                  <Link to={`/product-details/${books.id}`}>
                    {book.image && book.image.url ? (
                      <img
                        src={book.image.url}
                        className="card-img-top"
                        alt={book.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{book.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-10">
        <h3 style={{ textAlign: "start" }}>Camera</h3>
        <div className="col-12 camara">
          {cameras.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {cameras.map((camara) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={camara.id}
                >
                  <Link to={`/product-details/${camara.id}`}>
                    {camara.image && camara.image.url ? (
                      <img
                        src={camara.image.url}
                        className="card-img-top"
                        alt={camara.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{camara.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-11">
        <h3 style={{ textAlign: "start" }}>Airpods</h3>
        <div className="col-12 camara">
          {airpods.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {airpods.map((airpod) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={airpod.id}
                >
                  <Link to={`/product-details/${airpod.id}`}>
                    {airpod.image && airpod.image.url ? (
                      <img
                        src={airpod.image.url}
                        className="card-img-top"
                        alt={airpod.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{airpod.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-12">
        <h3 style={{ textAlign: "start" }}>Smart watch</h3>
        <div className="col-12 camara">
          {smartwatch.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {smartwatch.map((smartwatchs) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={smartwatchs.id}
                >
                  <Link to={`/product-details/${smartwatchs.id}`}>
                    {smartwatchs.image && smartwatchs.image.url ? (
                      <img
                        src={smartwatchs.image.url}
                        className="card-img-top"
                        alt={smartwatchs.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{smartwatchs.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="row row-section-13">
        <h3 style={{ textAlign: "start" }}>Watch</h3>
        <div className="col-12 camara">
          {watch.length > 0 ? (
            <div className="container d-flex flex-wrap align-items-center">
              {watch.map((watchs) => (
                <div
                  className="m-2 card d-flex flex-wrap align-items-center"
                  key={watchs.id}
                >
                  <Link to={`/product-details/${watchs.id}`}>
                    {watchs.image && watchs.image.url ? (
                      <img
                        src={watchs.image.url}
                        className="card-img-top"
                        alt={watchs.name}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </Link>
                  <h6 className="home-page-card-name">{watchs.name}</h6>
                </div>
              ))}
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

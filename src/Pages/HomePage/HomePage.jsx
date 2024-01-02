import React, { useEffect, useCallback } from "react";
import styles from "./HomePage.module.css";
import { IoGridSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaThList } from "react-icons/fa";
import Filter from "../../Components/Filter/Filter";
import { useState, useContext } from "react";
import AboutPage from "../../Utils/AboutPageContainer/AboutPage";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { AllProducts } from "../../Api/ProductApi/ProductApi";
import { MusicContext } from "../../Context/Context";
import { InventoryInfo } from "../../Api/ProductApi/ProductApi";

const HomePage = () => {
  const [SearchItem, SetSearchItem] = useState("");
  const {
    InventoryData,
    SetInventoryData,
    Filters,
    SetFilters,
    LoggedIn,
    PageName,
    SetPageName,
  } = useContext(MusicContext);
  const [Products, SetProducts] = useState([]);
  const [View, SetView] = useState("grid");
  const [error, Seterror] = useState("");

  const HandleGridClick = () => {
    SetView("grid");
  };

  const HandleListClick = () => {
    SetView("list");
  };

  const HandleChange = (e) => {
    SetSearchItem(e.target.value);
  };

  const GetProductsData = async (Filters) => {
    const data = await AllProducts(Filters);

    if (data.message == "success") {
      setTimeout(() => {
        SetProducts(data.products);
      }, 700);
    } else {
      Seterror("Failed to get data");
    }
  };
  const GetInventory = async () => {
    const response = await InventoryInfo();
    SetInventoryData(response);
  };

  useEffect(() => {
    SetPageName("");
    GetInventory();
  }, []);
  useEffect(
    () => {
      GetProductsData(Filters);
    },
    [Filters],
    [LoggedIn]
  );

  useEffect(
    () => {
      const FilterUpdate = setTimeout(() => {
        SetFilters({ ...Filters, product_name: SearchItem });
      }, 2000);
      return () => {
        clearTimeout(FilterUpdate);
      };
    },
    [SearchItem],
    [LoggedIn]
  );

  return (
    <div>
      {Object.keys(Filters).length != 0 && Products.length == 0 ? <></> : <></>}

      {!error ? (
        <>
          {Products ? (
            <>
              <div className={styles.page}>
                <AboutPage />

                <div className={styles.offerContainer}>
                  <div className={styles.specialOffer}>
                    <span>
                      Grab upto 50% off on <br /> Selected headphones
                    </span>

                    <button className={styles.offerButton} type="">
                      Buy Now
                    </button>

                    <img src="/images/girl_with_headphone.png" alt="" />
                  </div>
                </div>

                <div className={styles.searchArea}>
                  <input
                    placeholder="Search Product"
                    className={styles.searchConsole}
                    onChange={HandleChange}
                    value={SearchItem}
                  />
                  <GoSearch className={styles.searchIcon} />
                </div>

                <div className={styles.productArea}>
                  <div className={styles.viewOption}>
                    <IoGridSharp
                      onClick={HandleGridClick}
                      className={styles.viewtype}
                    />
                    <FaThList
                      onClick={HandleListClick}
                      className={styles.viewtype}
                    />
                  </div>

                  <div className={styles.filters}>
                    {InventoryData
                      ? InventoryData.map((item, index) => (
                          <Filter
                            key={index}
                            list={item.list}
                            name={item.filter_name}
                          />
                        ))
                      : null}
                  </div>

                  <div>
                    <Filter />
                  </div>
                </div>

                {Object.keys(Filters).length != 0 && Products.length == 0 ? (
                  <div className={styles.absentProduct}>
                    <h2>We Don't Have This Product</h2>
                  </div>
                ) : (
                  <div>
                    <div className={styles.productContainer}>
                      {Products
                        ? Products.map((product, index) => (
                            <ProductCard
                              View={View}
                              product={product}
                              key={index}
                            />
                          ))
                        : null}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div>Loading data ...</div>
          )}
        </>
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default HomePage;

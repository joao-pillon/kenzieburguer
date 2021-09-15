import Product from "./Product";
import "./styles.css";
import "./reset.css";
import TotalSale from "./TotalSale";
import Topo from "./Topo";

const MenuContainer = ({
  products,
  handleClick,
  currentSale,
  setCartTotal,
  cartTotal,
  showProducts,
  filteredProducts,
}) => {
  return (
    <>
      <div>
        <Topo showProducts={showProducts} filteredProducts={filteredProducts} />
      </div>

      <div className="container">
        <div className="ProductsContainer">
          <ul>
            {products.map((prod) => (
              <li>
                {" "}
                <Product
                  key={prod.id}
                  prod={prod}
                  handleClick={handleClick}
                  currentSale={currentSale}
                />{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="TotalSaleContainer">
          <TotalSale
            currentSale={currentSale}
            setCartTotal={setCartTotal}
            cartTotal={cartTotal}
          />
        </div>{" "}
        <div className="footer">
          Developed by João Pedro Ferreira Pillon 2021
        </div>
      </div>
    </>
  );
};

export default MenuContainer;

import "./styles.css";
import "./reset.css";
import Cart from "./Cart";

const TotalSale = ({ currentSale }) => {
  const cartSum = currentSale?.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0);
  const cartSumDec = (Math.round(cartSum * 100) / 100).toFixed(2);

  return (
    <div className="Total">
      <div className="cartCard">
      <h6>Seu carrinho:</h6> 
        {currentSale.map((sale) => (
          <li>
            <Cart key={sale.id} sale={sale} />{" "}
          </li>
        ))}
      </div>
      <div>
        <h5>Total: R${cartSumDec}</h5>
      </div>
    </div>
  );
};

export default TotalSale;

const Cart = ({ sale }) => {
  return (
    <>
      <div className="sale">
        <div className="sale_Data">
          <label id="nameS">{sale.name} </label>
          <label id="priceS"> {sale.price} $ </label>
        </div>
      </div>
    </>
  );
};

export default Cart;

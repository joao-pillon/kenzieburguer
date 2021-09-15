import "./styles.css";
import "./reset.css";

//fazer o handleclick chamar o produto e adicionar no carrinho
const Product = ({ prod, handleClick }) => {
  return (
    <div className="Product">
      <div className="Product_Img">
        {prod.id === 1 ? <div className="BurguerPicture"></div> : null}
        {prod.id === 2 ? <div className="XBurguerPicture"></div> : null}
        {prod.id === 3 ? <div className="XSaladaPicture"></div> : null}
        {prod.id === 4 ? <div className="BigKenziePicture"></div> : null}
        {prod.id === 5 ? <div className="FriesPicture"></div> : null}
        {prod.id === 6 ? <div className="RoscaPicture"></div> : null}
        {prod.id === 7 ? <div className="CoffePicture"></div> : null}
        {prod.id === 8 ? <div className="CokePicture"></div> : null}
        {prod.id === 9 ? <div className="IceScreamPicture"></div> : null}
      </div>

      <div className="Product_Data">
        <label id="name">{prod.name} </label>

        <label id="price"> {prod.price} $ </label>
      </div>
      <div className="Product_ButtonAdd">
        <button
          onClick={() => {
            handleClick(prod.id);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;

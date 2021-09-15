import "./styles.css";

const Topo = ({ showProducts, filteredProducts }) => {
  return (
    <>
      <div className="Topo">
        <div className="TopoHr">
          <hr className="hr2"></hr>
        </div>

        <nav className="navMenu">
          <a href="#">Home</a>
          <a href="#">Delivery</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <div className="dot"></div>
        </nav>
        <h1>Kenzie Burguer</h1>
      </div>
      <div className="About"></div>

      <div className="Input">
        <input type="text" onChange={(e) => showProducts(e.target.value)} />
        <button
          onClick={() => showProducts(filteredProducts)}
          className="ButtonFilter"
        ></button>
      </div>
    </>
  );
};

export default Topo;

import "./App.css";
import MenuContainer from "./components/MenuContainer";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "X-Salada", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Picanha", category: "Sanduíches", price: 10.99 },
    { id: 3, name: "X-Veggie", category: "Sanduíches", price: 8.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Fritas", category: "Lanches", price: 5.99 },
    { id: 9, name: "Sorvete", category: "Bebidas", price: 4.99 },
    { id: 8, name: "Coca-Cola", category: "Bebidas", price: 3.99 },
    { id: 6, name: "Rosca", category: "Lanches", price: 3.99 },
    { id: 7, name: "Café", category: "Bebidas", price: 2.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  function showProducts(input) {
    const filtrados = products.filter((product) => {
      return product.name === input;
    });
    setFilteredProducts([...filtrados]);
  }

  const [currentSale, setCurrentSale] = useState([]);

  function handleClick(prod) {
    //if currentSale.includes() ;;;
    const sale = products.find((selected) => {
      return selected.id === prod;
    });

    setCurrentSale([...currentSale, sale]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <MenuContainer
          showProducts={showProducts}
          filteredProducts={filteredProducts}
          products={products}
          handleClick={handleClick}
          currentSale={currentSale}
        ></MenuContainer>
      </header>
    </div>
  );
}

export default App;

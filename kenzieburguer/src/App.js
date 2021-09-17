import "./App.css";
import MenuContainer from "./components/MenuContainer";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "X-Salada", category: "Sanduíches", price: 7.99, tags:["x", "xis","salada","xsalada","X","XSalada", "xsalada","Salada","Xi"] },
    { id: 2, name: "X-Picanha", category: "Sanduíches", price: 10.99, tags:["x", "xis","picanha","xpicanha","X","Xis","Picanha","X-Picanha"]},
    { id: 3, name: "X-Veggie", category: "Sanduíches", price: 8.99, tags:["x", "xis","vegetariano", "veggie","X","Xis","Vegetariano","Veggie"]},
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99, tags:["x", "xis","bigkenzie", "big-kenzie","Big","X","Xis","Big-Kenzie","BigKenzie"]},
    { id: 5, name: "Fritas", category: "Lanches", price: 5.99, tags:["fritas", "batatas", "lanches", "Fritas","Batata-Frita","Batatas"]},
    { id: 9, name: "Sorvete", category: "Bebidas", price: 4.99, tags:["sorvete", "lanches", "gelados","Sorvete","Lanches"] },
    { id: 8, name: "Coca-Cola", category: "Bebidas", price: 3.99, tags:["coca", "cocacola", "coca-cola","Coca","Cocacola","COCACOLA","COCA", "Bebidas","bebidas"]},
    { id: 6, name: "Rosca", category: "Lanches", price: 3.99, tags:["rosca", "lanches","Lanches","Rosca"]},
    { id: 7, name: "Café", category: "Bebidas", price: 2.99, tags:["cafe", "bebidas", "quentes","Cafe","Café","CAFE","CAFÉ","Bebidas"]},
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  function showProducts(input) {
    const filtrados = products.filter((product) => {

      for (let i=0;i<=product.tags.length;i++){
      if (product.tags[i] === input || product.name === input) return true
      }
      return false
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

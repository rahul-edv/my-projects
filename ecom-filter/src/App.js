import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import './index.css';
import data from "./db/data";
import Card from "./Components/Card";


function App() {
  // INPUT FILTER
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => { setQuery(e.target.value) }
  const filteredItems = data.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // RADIO FILTER
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleChange = (event) => { setSelectedCategory(event.target.value) }
  // BUTTONS FILTER
  const handleClick = (event) => { setSelectedCategory(event.target.value) }

  function filteredData(data, selected, query) {
    let filteredProducts = data;
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || parseInt(newPrice) >= selected || title === selected)
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => <Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} />)
  }
  const result = filteredData(data, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products data={result} />
    </>

  );
}

export default App;

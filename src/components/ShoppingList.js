import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchedItem] = useState("");
  const [data, setData] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    handlecategoryfilter();
  }

  function handleSearchChange(search) {
    setSearchedItem(search);
    handlefilter();
  }

  function handlefilter() {
    const filter = data.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(filter);
  }

  function handlecategoryfilter() {
    const categoryFilter = data.filter((item) => {
      return item.category
        .toLowerCase()
        .includes(selectedCategory.toLowerCase());
    });
    setData(categoryFilter);
  }

  function onAddItem(formData) {
    setData([...data, formData]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onAddItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {data.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

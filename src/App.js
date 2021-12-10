import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [allitems, setallitems] = useState(items);
  const [menu, setmenu] = useState(allitems);
  const filterItems = (e) => {
    if (e === "all") {
      setmenu(allitems);
      return;
    }
    const newmenu = allitems.filter((menu) => {
      return menu.category === e;
    });
    setmenu(newmenu);
  };
  const allCategories = [
    "all",
    ...new Set(
      allitems.map((item) => {
        return item.category;
      })
    ),
  ];

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} allCategories={allCategories} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;

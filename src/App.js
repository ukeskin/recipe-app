import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  useEffect(() => {
    const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getRecipes = () => {
      axios.get(exampleRequest).then((response) => {
        const data = response.data.hits;
        setRecipes(data);
      });
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="bg-yellow-50">
      <div className="bg-yellow-300">
        <header className="header">
          <div>
            <h1 className="header_title">Recipe Search</h1>
          </div>
          <div className="md:w-2/3 w-full flex rounded-xl">
            <form onSubmit={getSearch} className="w-full">
              <input
                value={search}
                onChange={updateSearch}
                className="search_box"
                placeholder="Search"
                type="text"
              />
              <button className="search_button" type="submit">
                Search
              </button>
            </form>
          </div>
        </header>
      </div>

      <div className="card_grid">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

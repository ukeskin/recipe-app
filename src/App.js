import React, { useEffect, useState } from "react";
import axios from "axios";

import Recipe from "./Recipe";
function App() {
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "5f171406";
  const APP_KEY = "6d050b26a698f2144d9b1ba25bf31078";

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = () => {
    axios.get(exampleRequest).then((response) => {
      const data = response.data.hits;
      setRecipes(data);
    });
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div className="bg-yellow-50">
      <header className="bg-yellow-300  flex flex-col items-center justify-center p-4 h-screen/2">
        <div className="text-4xl text-gray-800 font-semibold italic mb-4">
          Recipe Search
        </div>
        <div className=" md:w-1/3 w-full flex rounded-xl">
          <form className="w-full">
            <input
              className="w-full p-4 rounded-2xl text-gray-700 focus:outline-none"
              placeholder="Search"
              type="text"
            />
            {/* <button className="" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </header>
      <div>
        <div className="flex p-2 h-full flex-wrap">
          {recipes.map((recipe) => (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

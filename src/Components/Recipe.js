import React from "react";

function Recipe({ title, calories, image }) {
  return (
    <div className="recipe_card">
      <img className="recipe_card_image" src={image} alt="" />
      <h2 className="font-semibold text-xl">{title}</h2>
      <span className="recipe_card_calories_badge">
        {Math.round(calories)} kcal
      </span>
    </div>
  );
}

export default Recipe;

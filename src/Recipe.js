import React from "react";

function Recipe({ title, calories, image }) {
  return (
    <div className="shadow-2xl h-40 flex p-6 items-center justify-between bg-white w-1/3 m-2 rounded-3xl">
      <img className="rounded-full w-16" src={image} alt="" />
      <h2 className="font-semibold antialiased text-xl">{title}</h2>
      <p className="font-semibold antialiased ">{Math.round(calories)} kcal</p>
    </div>
  );
}

export default Recipe;

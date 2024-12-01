import React from "react";

const Categories = () => {
  const taskCategories = ["All", "Completed", "Remaining"];
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4 font-bold text-lg pb-20">
      {taskCategories.map((tc, index) => (
        <h1 key={index}>{tc}</h1>
      ))}
    </div>
  );
};

export default Categories;

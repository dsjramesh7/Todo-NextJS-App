"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SideBar = () => {
  const taskCategories = ["All", "Completed", "Remaining"];
  const router = useRouter();
  const handleSelectCategory = (category: string, i: number) => {
    if (i === 0) {
      router.push("/");
    } else {
      router.push(`?current=${category}`);
    }
  };
  const currentParam = useSearchParams().get("current");
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4 font-bold text-lg pb-20">
      {taskCategories.map((tc, index) => (
        <div
          onClick={() => handleSelectCategory(tc, index)}
          key={index}
          className={`flex justify-center cursor-pointer border border-red-500 p-5 w-[200px] ${
            currentParam === tc
              ? "bg-yellow-200"
              : currentParam === "All" ||
                (tc === "All" && currentParam === null)
              ? "bg-yellow-200"
              : "bg-white"
          }`}
        >
          <h1>{tc}</h1>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem2({ item }) {
  console.log(item);
  return (
    <div className="rounded-md shadow-xl">
      <Link to={`/product/${item._id}`}>
        <img
          src={item.img}
          alt="Laptop"
          className="object-cover  w-full rounded-md  md:h-[300px] lg:h-[300px]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {item.title}
          </h1>
          {/* <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p> */}

          <div className="mt-3 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Colors : </span>
            {item.color.map((color) => (
              <span
                className={`block h-4 w-4 rounded-full border-2 border-gray-300 bg-${
                  color.toLowerCase() === "black"
                    ? "black"
                    : `${color.toLowerCase()}-500`
                }`}
              ></span>
            ))}
          </div>
          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-sm font-semibold">Size : </span>
            {item.size.map((item) => {
              return (
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  {item}
                </span>
              );
            })}
          </div>
          {/* <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button> */}
        </div>
      </Link>
    </div>
  );
}

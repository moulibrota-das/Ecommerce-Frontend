import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartRedux";
import axios from "axios";
import Footer2 from "../components/Footer2";
import Navbar2 from "../components/Navbar2";

export default function Product2() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    //update cart
    dispatch(addProducts({ ...product, quantity, color, size }));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/products/find/${id}`
        );
        setProduct(res.data);
        setSize(res.data.size[0]);
        setColor(res.data.color[0]);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <>
      <Navbar2 />
      <div className="mx-auto py-4 max-w-7xl px-4 md:px-8 2xl:px-16">
        <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 md:grid md:pb-14 xl:gap-x-14 2xl:pb-20">
          {/* <div className="col-span-5 grid grid-cols-2 gap-2.5"> */}
          <div className="col-span-4 transition duration-150 ease-in hover:opacity-90">
            <img
              src={product && product.img}
              alt="Nike Air Max 95 By You--0"
              className="w-full object-cover"
            />
          </div>
          {/* </div> */}
          <div className="col-span-5 pt-8 lg:pt-0">
            <div className="mb-7 border-b border-gray-300 pb-7">
              <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                {product && product.title}
              </h2>
              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {product && product.desc}
              </p>
              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  ${product && product.price}
                </div>
                {/* <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                $50.00
              </span> */}
              </div>
            </div>
            <div className=" border-gray-300 pb-3  ">
              <div className="mb-4">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                  size
                </h3>
                <ul className="colors -mr-3 flex flex-wrap">
                  {product &&
                    product.size.map((size) => (
                      <li
                        key={size}
                        className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm "
                        onClick={() => setSize(size)}
                      >
                        {size}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mb-4 ">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                  color
                </h3>
                <ul className="colors -mr-3 flex flex-wrap">
                  {product &&
                    product.color.map((color) => (
                      <li
                        key={color}
                        className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                        onClick={() => setColor(color)}
                      >
                        <span
                          className={`block h-full w-full rounded bg-${
                            color.toLowerCase() === "black"
                              ? "black"
                              : `${color.toLowerCase()}-500`
                          }`}
                        />
                      </li>
                    ))}
                </ul>
              </div>
              <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                  <button
                    className="cursor-pointer text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                    {quantity}
                  </span>
                  <button
                    className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 h-11 w-48 ml-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className="py-6 ">
              <ul className="space-y-5 pb-1 text-sm">
                <li>
                  <span className="text-heading inline-block pr-2 font-semibold">
                    Category:
                  </span>
                  <a
                    className="hover:text-heading transition hover:underline"
                    href="#"
                  >
                    kids
                  </a>
                </li>
                <li className="productTags">
                  <span className="text-heading inline-block pr-2 font-semibold">
                    Tags:
                  </span>
                  <a
                    className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                    href="#"
                  >
                    Sneakers
                  </a>
                </li>
              </ul>
            </div>
            <div className="shadow-sm ">
              {/* <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Product Details
              </h2>
              <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                <div className="bg-heading h-0.5 w-full rounded-sm" />
                <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
              </div>
            </header>
            <div>
              <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                Our Customer Experience Team is available 7 days a week and we
                offer 2 ways to get in contact.Email and Chat . We try to reply
                quickly, so you need not to wait too long for a response!.
              </div>
            </div> */}
            </div>
            <div className="">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Additional Information
                </h2>
              </header>
            </div>
            <div className="">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Customer Reviews
                </h2>
              </header>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

import React from "react";

import { Product } from "../generated";

type ProductCardProps = {
  product: Product;
  onAddToCart: (clickedProduct: Product) => void;
};

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
        <div className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md">
          <div className="w-full bg-white">
            <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
              <div>
                <img src={`${product?.image}`} />
              </div>
            </div>
          </div>
          <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg ">
            <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
              {product?.name}
            </h4>
            <div className="mt-2 text-sm text-gray-700">
              {product?.description}
            </div>
            <div className="flex items-center justify-evenly">
              <h1 className="flex-auto mt-2 text-md font-semibold text-gray-700">
                ${product?.price}
              </h1>
                <button
                  className="bg-white d hover:shadow-lg border border-gray-200 text-gray-700 font-semibold py-2 px-4 rounded shadow"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
            </div>
          </div>
        </div>
  );
};

export default ProductCard;

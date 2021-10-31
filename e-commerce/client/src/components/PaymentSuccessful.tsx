import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/logo.png"

const PaymentSuccessful = () => {
  return (
    <>
    <Link to="/"><img className="w-1/6 mt-4" src={logo} alt="" /></Link>
    <div className="max-w-screen-lg h-screen flex flex-col items-center justify-center">
      <div className="border rounded bg-white hover:shadow-lg w-80 h-47">
        <div className="text-center text-green-500 mt-4">
          <i className="fa fa-check-circle fa-4x" aria-hidden="true"></i>
        </div>

        <h2 className="flex-auto mt-3 mb-4 text-md font-semibold text-gray-700 text-center">
          Payment Successful!
        </h2>

        <Link to="/">
          <div className="border border-gray-200 hover:shadow-lg px-16 py-3 font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <i
              className="fa fa-long-arrow-left ml-6 mr-2 text-indigo-400"
              aria-hidden="true"
            ></i>{" "}
            Back to store
          </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default PaymentSuccessful;

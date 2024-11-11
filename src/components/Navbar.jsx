import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.header
      className="bg-gray-800 text-white px-4 sm:px-10 md:px-20 py-5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-xl sm:text-2xl font-bold">Resumify</h1>
        </Link>

        {/* Button */}
        <Link to={"/create-resume"}>
          <button className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;

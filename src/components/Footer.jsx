import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-6"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} ResumeMint. Made By{" "}
          <a
            className="text-green-400 hover:text-white hover:transition-all hover:delay-200"
            href="https://anupamshakya.in"
          >
            Anupam Shakya
          </a>
          .
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

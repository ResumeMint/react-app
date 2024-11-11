import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <Navbar />
      <motion.section
        className="bg-gray-800 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Craft Your Perfect Resume for Free
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            With our intuitive resume builder, you can create stunning resumes
            that highlight your skills and experience in just a few minutes.
          </p>
          <Link to={"/create-resume"}>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Building Your Resume Now!
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-semibold text-white text-center mb-12">
            Why Choose Our Resume Builder?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-white mb-4">
                User-Friendly Interface
              </h4>
              <p className="text-gray-400">
                Our clean and simple design ensures that you can easily navigate
                through the builder without any hassle.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-white mb-4">
                Customizable Templates
              </h4>
              <p className="text-gray-400">
                Choose from a wide variety of modern templates that can be
                customized to fit your personal style and profession.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-white mb-4">
                Download in Multiple Formats
              </h4>
              <p className="text-gray-400">
                Export your resume easily in PDF, DOCX, or TXT formats, making
                it ready for job applications.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-white mb-4">
                Real-Time Previews
              </h4>
              <p className="text-gray-400">
                See how your resume looks in real-time as you edit, ensuring
                that you are satisfied with your final product.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-white mb-4">
                Expert Tips and Guidance
              </h4>
              <p className="text-gray-400">
                Get helpful tips and suggestions at every step to enhance the
                quality of your resume.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-white mb-4">Free to Use</h4>
              <p className="text-gray-400">
                Our resume builder is completely free, allowing you to create
                professional resumes without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-gray-800 py-16 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-4xl font-bold mb-4">
          Ready to Land Your Dream Job?
        </h3>
        <p className="text-lg mb-6">
          Take the first step toward your future by building a standout resume.
        </p>
        <Link to={"/create-resume"}>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition">
            Try Now!
          </button>
        </Link>
      </motion.section>

      <Footer />
    </main>
  );
};

export default HomePage;

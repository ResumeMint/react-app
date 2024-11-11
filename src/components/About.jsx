import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 text-gray-800">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About ResumeMint
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to <strong>ResumeMint</strong> – your ultimate tool for
            creating a standout resume in minutes. Our goal is to empower job
            seekers and professionals by providing an easy-to-use platform where
            you can craft, design, and polish your resume to perfection.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Why Choose ResumeMint?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            We understand that building a resume can be challenging and
            time-consuming. That’s why we built ResumeMint with simplicity and
            efficiency in mind. With a wide selection of modern templates,
            customization options, and real-time previews, ResumeMint makes it
            easy to create a professional resume that reflects your unique
            skills and experiences.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            At ResumeMint, we are committed to helping individuals put their
            best foot forward in their career journey. Our mission is to provide
            tools that simplify resume creation and open doors to new
            opportunities. Whether you’re a recent graduate or a seasoned
            professional, ResumeMint is here to help you make a lasting
            impression.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

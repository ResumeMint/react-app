import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const HowToDownload = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-full max-w-3xl p-8 rounded-lg shadow-lg bg-gray-800">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            How to Download Your Resume
          </h1>
          <div className="space-y-6">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-2">Step 1:</h2>
              <p className="text-gray-300">
                Click on "Save" first, then click on "Download".
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-2">Step 2:</h2>
              <p className="text-gray-300 mb-2">
                Press <strong>Ctrl + P</strong> (Windows) or{" "}
                <strong>Cmd + P</strong> (Mac).
              </p>
              <p className="text-gray-300">
                Select all options as shown and click "Save".
              </p>
            </div>
          </div>
        </div>
        <Link to="/create-resume" className="mt-6">
          <Button className="text-white bg-gray-800 hover:bg-gray-700 transition duration-300">
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HowToDownload;

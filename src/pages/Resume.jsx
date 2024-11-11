import { useContext } from "react";
import { Link } from "react-router-dom";

import { ResumeContext } from "@/contexts/ResumeContext";
import { Button } from "@/components/ui/button";
import ResumeContents from "./ResumeContents";

const Resume = () => {
  const { handleSave } = useContext(ResumeContext);

  const downloadPDF = () => {
    // Implement download functionality here
  };

  return (
    <div className="w-full md:w-1/2 min-h-screen overflow-y-scroll border shadow-lg bg-white px-4 sm:px-6 md:px-5 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 px-2 md:px-10 py-1">
          Check Live Changes Below
          <span className="text-blue-600 inline-block ml-2">👇🏻</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <Button
            onClick={handleSave}
            variant="outline"
            className="hover:bg-gray-200 w-full md:w-auto"
          >
            Save
          </Button>
          <Link to="/download" target="_blank" className="w-full md:w-auto">
            <Button
              onClick={downloadPDF}
              className="bg-blue-600 text-white hover:bg-blue-700 w-full md:w-auto"
            >
              Download
            </Button>
          </Link>
        </div>
      </div>

      {/* Resume Contents */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ResumeContents />
      </div>
    </div>
  );
};

export default Resume;

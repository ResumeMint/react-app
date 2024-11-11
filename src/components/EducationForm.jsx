import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ResumeContext } from "@/contexts/ResumeContext";
import Section from "./Section";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PlusCircle, XCircle } from "lucide-react";

const EducationForm = () => {
  const { education, setEducation } = useContext(ResumeContext);

  function handleChange(e, id) {
    const { name, value } = e.target;

    const newEducation = education.map((edu) =>
      edu.id === id
        ? {
            ...edu,
            [name]: value,
          }
        : edu
    );
    setEducation(newEducation);
  }

  function handleAdd() {
    setEducation([
      ...education,
      {
        id: uuidv4(),
        college: "",
        duration: "",
        degree: "",
        grade: "",
        location: "",
      },
    ]);
  }

  function handleRemove(id) {
    setEducation(education.filter((edu) => edu.id !== id));
  }

  return (
    <Section
      title="Education"
      description="Enter your education details"
      sectionKey="educationToggle"
    >
      {education.length === 0 ? (
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white rounded-lg h-10 px-4 m-4 text-sm border border-transparent hover:bg-blue-700 transition duration-200 flex justify-center items-center gap-1"
          >
            <PlusCircle size={15} />
            <span>Add Education</span>
          </button>
        </div>
      ) : (
        education.map((edu) => (
          <div
            key={edu.id}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform duration-300 hover:shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>College Name</Label>
                <Input
                  name="college"
                  placeholder="e.g., Global Engineering College"
                  value={edu.college}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <Label>Duration</Label>
                <Input
                  name="duration"
                  placeholder="e.g., 2021 - 2025"
                  value={edu.duration}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <Label>Degree</Label>
                <Input
                  name="degree"
                  placeholder="e.g., Bachelor of Engineering"
                  value={edu.degree}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <Label>Grade</Label>
                <Input
                  name="grade"
                  placeholder="e.g., 7.96 CGPA"
                  value={edu.grade}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  name="location"
                  placeholder="e.g., Daman, India"
                  value={edu.location}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => handleRemove(edu.id)}
                className="bg-red-600 text-white rounded-lg h-10 px-4 text-sm border border-transparent hover:bg-red-700 transition duration-200 flex justify-center items-center gap-1"
              >
                <XCircle size={15} />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))
      )}
      <div className="flex justify-center">
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white rounded-lg h-10 px-4 m-4 text-sm border border-transparent hover:bg-blue-700 transition duration-200 flex justify-center items-center gap-1"
        >
          <PlusCircle size={15} />
          <span>Add Education</span>
        </button>
      </div>
    </Section>
  );
};

export default EducationForm;

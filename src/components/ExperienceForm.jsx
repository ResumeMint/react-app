import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ResumeContext } from "@/contexts/ResumeContext";
import Section from "./Section";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PlusCircle, XCircle } from "lucide-react";

const ExperienceForm = () => {
  const { experience, setExperience } = useContext(ResumeContext);

  const modules = {
    toolbar: [["bold", "underline", "italic"], [{ list: "bullet" }], ["link"]],
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "link",
  ];

  function handleChange(e, id, isEditor = false) {
    let name, value;

    if (isEditor) {
      name = "summary";
      value = e;
    } else {
      name = e.target.name;
      value = e.target.value;
    }
    const newExperience = experience.map((exp) =>
      exp.id === id ? { ...exp, [name]: value } : exp
    );
    setExperience(newExperience);
  }

  function handleAdd() {
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        role: "",
        duration: "",
        company: "",
        location: "",
        summary: "",
      },
    ]);
  }

  function handleRemove(id) {
    setExperience(experience.filter((exp) => exp.id !== id));
  }

  return (
    <Section
      title="Work Experience"
      description="Add your work experience"
      sectionKey="experienceToggle"
    >
      <div className="space-y-8">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
          >
            <div className="space-y-4">
              <div>
                <Label>Job Title</Label>
                <Input
                  name="role"
                  placeholder="e.g., Software Engineer"
                  value={exp.role}
                  onChange={(e) => handleChange(e, exp.id)}
                />
              </div>
              <div>
                <Label>Employment Dates</Label>
                <Input
                  name="duration"
                  placeholder="e.g., Jan 2023 - Dec 2023"
                  value={exp.duration}
                  onChange={(e) => handleChange(e, exp.id)}
                />
              </div>
              <div>
                <Label>Company Name</Label>
                <Input
                  name="company"
                  placeholder="e.g., ABC Corp"
                  value={exp.company}
                  onChange={(e) => handleChange(e, exp.id)}
                />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  name="location"
                  placeholder="e.g., San Francisco, CA"
                  value={exp.location}
                  onChange={(e) => handleChange(e, exp.id)}
                />
              </div>
              <div>
                <Label>Job Description</Label>
                <ReactQuill
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  value={exp.summary}
                  onChange={(e) => handleChange(e, exp.id, true)}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleRemove(exp.id)}
                className="bg-red-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-red-600 flex items-center gap-1"
              >
                <XCircle size={16} />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center gap-1 hover:bg-blue-600"
        >
          <PlusCircle size={16} />
          <span>Add Experience</span>
        </button>
      </div>
    </Section>
  );
};

export default ExperienceForm;

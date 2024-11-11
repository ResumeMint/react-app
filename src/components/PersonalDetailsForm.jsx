import { useContext } from "react";
import { ResumeContext } from "@/contexts/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Section from "@/components/Section";

const PersonalDetailsForm = () => {
  const { personalInfo, setPersonalInfo } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <Section title="Personal Details" description="Enter your personal details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <div>
          <Label>Name</Label>
          <Input
            name="name"
            placeholder="Your Name"
            value={personalInfo.name}
            onChange={handleChange}
            aria-label="Your Name"
          />
        </div>
        <div>
          <Label>Job Title</Label>
          <Input
            name="title"
            placeholder="Software Engineer"
            value={personalInfo.title}
            onChange={handleChange}
            aria-label="Job Title"
          />
        </div>
        <div>
          <Label>Contact</Label>
          <Input
            name="phone"
            placeholder="+910011001100"
            value={personalInfo.phone}
            onChange={handleChange}
            aria-label="Contact Number"
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            name="email"
            placeholder="bhidu@gmail.com"
            value={personalInfo.email}
            onChange={handleChange}
            aria-label="Email Address"
          />
        </div>
        <div>
          <Label>Linkedin Profile URL</Label>
          <Input
            name="linkedin"
            placeholder="https://www.linkedin.com/"
            value={personalInfo.linkedin}
            onChange={handleChange}
            aria-label="LinkedIn Profile URL"
          />
        </div>
        <div>
          <Label>Github Profile URL</Label>
          <Input
            name="github"
            placeholder="https://www.github.com/"
            value={personalInfo.github}
            onChange={handleChange}
            aria-label="GitHub Profile URL"
          />
        </div>
        <div className="pb-4">
          <Label>Portfolio URL</Label>
          <Input
            name="portfolio"
            placeholder="https://yourportfolio.com"
            value={personalInfo.portfolio}
            onChange={handleChange}
            aria-label="Portfolio URL"
          />
        </div>
      </div>
    </Section>
  );
};

export default PersonalDetailsForm;

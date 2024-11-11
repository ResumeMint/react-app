import { MdPersonOutline } from "react-icons/md"; // Changed to outline icon
import { IoBriefcaseOutline } from "react-icons/io5"; // Changed to briefcase outline
import { PiGraduationCapLight } from "react-icons/pi"; // Changed to a lighter graduation cap
import { GrProjects } from "react-icons/gr"; // Changed to projects icon
import { FaTools } from "react-icons/fa"; // Changed to tools icon
import { PiCertificateDuotone } from "react-icons/pi"; // Changed to duotone certificate icon

const ResumeSections = ({ tab, setTab }) => {
  const buttons = [
    { id: 1, icon: <MdPersonOutline size={20} />, name: "Personal Details" },
    { id: 2, icon: <IoBriefcaseOutline size={20} />, name: "Experience" },
    { id: 3, icon: <PiGraduationCapLight size={20} />, name: "Education" },
    { id: 4, icon: <GrProjects size={20} />, name: "Projects" },
    {
      id: 5,
      icon: <PiCertificateDuotone size={20} />,
      name: "Extra Activities",
    },
    { id: 6, icon: <FaTools size={20} />, name: "Skills" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 py-6 px-2 sm:px-4 bg-white">
      {buttons.map(({ id, icon, name }) => (
        <div key={id} className="flex flex-col items-center">
          {/* Button */}
          <button
            onClick={() => setTab(name)}
            aria-label={name}
            className={`h-12 w-12 sm:h-14 sm:w-14 transition-transform duration-200 rounded-lg flex justify-center items-center shadow-lg
              ${
                tab === name
                  ? "bg-blue-600 text-white scale-110"
                  : "bg-white text-black hover:bg-blue-50"
              }
            `}
          >
            {icon}
          </button>

          {/* Name Label */}
          <span className="mt-1 text-xs sm:text-sm text-center transition-opacity duration-300">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResumeSections;

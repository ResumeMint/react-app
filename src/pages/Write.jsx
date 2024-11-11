import Forms from "./Forms";
import Resume from "./Resume";
import Footer from "@/components/Footer";
import NavbarCreate from "@/components/NavbarCreate";

const Write = () => {
  return (
    <>
      <NavbarCreate />
      <div className="md:h-screen flex flex-col md:flex-row  bg-[#15655f84]  ">
        <Forms />
        <Resume />
      </div>
      <Footer />
    </>
  );
};

export default Write;

import Logo from "../assets/İmages/Logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#F5FCFF] mt-[150px] px-[85.33] py-[130px]  max-md:flex-col  ">
      <div className="flex items-center justify-between px-[85.33px] bg-[#F5FCFF]  max-lg:flex-col cursor-pointer ">
        <img
          onClick={() => scrollToSection("section1")}
          className="bg-[#F5FCFF]"
          width={200}
          height={40}
          src={Logo}
          alt=""
        />
        <div className="bg-[#F5FCFF] flex gap-[42px] max-lg:flex-col max-lg:my-10">
          <button
            onClick={() => scrollToSection("section2")}
            className={
              "text-[#1C1E53] font-normal transition duration-500 hover:text-[#5E3BEE]  "
            }
          >
            Yeteneklerim
          </button>
          <button
            onClick={() => scrollToSection("section3")}
            className={
              "text-[#1C1E53] font-normal transition duration-500 hover:text-[#5E3BEE]  "
            }
          >
            Hakkımda
          </button>
          <button
            onClick={() => scrollToSection("section4")}
            className={
              "text-[#1C1E53] font-normal transition duration-500 hover:text-[#5E3BEE]  "
            }
          >
            Portfolyo
          </button>
          <button
            onClick={() => scrollToSection("section5")}
            className={
              "text-[#1C1E53] font-normal transition duration-500 hover:text-[#5E3BEE]  "
            }
          >
            İletişim
          </button>
        </div>
        <div className="flex gap-4 bg-[#F5FCFF] ">
          <a href="https://github.com/gezerm85" target="_blank">
            <IoLogoGithub className="bg-[#F5FCFF]" size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/mehmet-%C3%A7elebi-gezer-605a38217/"
            target="_blank"
          >
            <FaLinkedin className="bg-[#F5FCFF]" size={32} />
          </a>
          <a href="https://www.instagram.com/gezerm85/" target="_blank">
            <FaInstagram className="bg-[#F5FCFF]" size={32} />
          </a>
          <a href="https://x.com/gezerm85" target="_blank">
            <FaTwitter className="bg-[#F5FCFF]" size={32} />
          </a>
        </div>
      </div>
      <hr className="bg-[#F5FCFF] mx-[85.33px] border border-[#282938] border-opacity-55 mt-[106px] " />
      <div className="flex items-center justify-between px-[85.33px] bg-[#F5FCFF] max-md:flex-col">
        <div className="flex bg-[#F5FCFF] max-md:gap-10 max-lg:mt-10 ">
          <h1 className="bg-[#F5FCFF]">Lorem.</h1>
          <h1 className="bg-[#F5FCFF]">ipsum</h1>
        </div>
        <div className="flex bg-[#F5FCFF] mt-11 max-lg:gap-10">
          <h1 className="bg-[#F5FCFF]">Lorem.</h1>
          <h1 className="bg-[#F5FCFF]">ipsum</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

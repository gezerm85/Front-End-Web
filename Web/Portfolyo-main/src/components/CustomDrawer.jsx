import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/userSlice";
import CustomButton from "./CustomButton";
import cv from "../assets/Mehmet-Çelebi-Gezer.pdf";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function CustomDrawer() {
  const { drawer } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = cv;
    anchor.download = "Mehmet-Çelebi-Gezer.pdf";
    anchor.click();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      dispatch(setDrawer());
    }
  };
  return (
    <div>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => dispatch(setDrawer())}
      >
        <div className="flex flex-col  py-14 bg-[#F5FCFF] w-screen h-full items-center justify-between  relative ">
          <div className="absolute top-4 right-4 cursor-pointer">
            <IoCloseSharp
              onClick={() => dispatch(setDrawer())}
              className="bg-[#F5FCFF]"
              size={30}
              color="#5E3BEE"
            />
          </div>
          <div className="flex flex-col gap-14 bg-[#F5FCFF]">
            <button
              onClick={() => scrollToSection("section2")}
              className={
                "text-[#1C1E53] font-normal transition duration-500 hover:text-[#5E3BEE] "
              }
            >
              Yeteneklerim
            </button>
            <button
              onClick={() => scrollToSection("section3")}
              className={
                "text-[#1C1E53] font-normal transition  duration-500 hover:text-[#5E3BEE] "
              }
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection("section4")}
              className={
                "text-[#1C1E53] font-normal transition duration-500 hover:text-[#5E3BEE] "
              }
            >
              Portfolyo
            </button>
            <button
              onClick={() => scrollToSection("section5")}
              className={
                "text-[#1C1E53] font-normal transition duration-500 hover:text-[#5E3BEE] "
              }
            >
              İletişim
            </button>
          </div>
          <div className="flex flex-col items-center bg-[#F5FCFF]">
            <div className="mb-10 bg-[#F5FCFF]">
              <CustomButton
                bgColor={"bg-[#F5FCFF]"}
                title={"Download CV"}
                onClick={handleDownload}
              />
            </div>
            <div className="flex gap-10  bg-[#F5FCFF] ">
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
        </div>
      </Drawer>
    </div>
  );
}

export default CustomDrawer;

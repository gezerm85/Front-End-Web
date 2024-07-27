import Logo from "../assets/İmages/Logo.png";
import CustomButton from "./CustomButton";
import cv from "../assets/Mehmet-Çelebi-Gezer.pdf";
import { setDrawer } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiMenuFries } from "react-icons/ci";

function Header() {
  const { drawer } = useSelector((state) => state.userReducer);
  console.log(drawer);
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
    }
  };
  return (
    <header
      id="section1"
      className="flex items-center justify-between  h-[120px] px-[85.33px] bg-[#fff] drop-shadow-custom   custom-drop-shadow  w-full  max-md:px-[50px] "
    >
      <div className="cursor-pointer">
        <img width={186.67} height={40} src={Logo} alt="" />
      </div>
      <div className="flex gap-[42.67px] max-lg:hidden">
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
      <div className="lg:hidden ">
        <button onClick={() => dispatch(setDrawer())}>
          <CiMenuFries color="#5E3BEE" size={30} />
        </button>
      </div>
      <div className="max-lg:hidden">
        <CustomButton title={"Download CV"} onClick={handleDownload} />
      </div>
    </header>
  );
}

export default Header;

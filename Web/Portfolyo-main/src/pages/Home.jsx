/* eslint-disable react/no-unescaped-entities */
import Profile from "../assets/İmages/Profile.png";
import AboutFoto from "../assets/İmages/AboutMe.png";
import { CustomForm, PortfolioCard, SkillsCard } from "../components";
import { TbBrandRedux } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Portfolio1 from "../assets/İmages/MyPortfolio1.png";
import Portfolio2 from "../assets/İmages/MyPortfolio2.png";
import Portfolio3 from "../assets/İmages/MyPortfolio3.png";

function Home() {
  return (
    <main className="mx-12">
      <div className="flex   justify-center items-center bg-[#F5FCFF]  max-md:flex-col max-lg:flex-col ">
        <div className="flex flex-col w-[790.67px]  gap-6 bg-[#F5FCFF] max-md:w-auto max-lg:px-[100px] ">
          <h4 className="font-semibold text-[21.33px] leading-8 text-[#282938] bg-[#F5FCFF]">
            Merhaba, Ben Mehmet
          </h4>
          <h1 className="font-bold text-[74.67px] leading-[89.6px] text-[#282938] bg-[#F5FCFF] max-md:text-[45px] max-lg:text-[50px]">
            <b className="text-[#5E3BEE] bg-[#F5FCFF]">
              Front-End <b className="text-[#282938]"> ve </b> mobil geliştirme
            </b>{" "}
            yapıyorum
          </h1>
          <p className="text-2xl font-normal text-[#1C1E53] bg-[#F5FCFF] max-md:text-xl max-lg:text-xl  ">
            Mobil uygulama geliştirme konusunda Jr seviyedeyim. React Native ile
            Front-End projelere odaklanıyor, sürekli kendimi geliştirmeye devam
            ediyorum.
          </p>
        </div>
        <div className="bg-[#F5FCFF] flex flex-col items-center justify-center max-lg:mt-10  ">
          <img
            className="bg-[#F5FCFF] "
            width={917.33}
            height={729.74}
            src={Profile}
            alt="..."
          />
        </div>
      </div>
      <div id="section2" className="mb-5 mt-36  pt-12 max-md:flex-col ">
        <div className=" flex- flex-col  items-center justify-center">
          <div>
            <h1 className="font-semibold text-[64px] leading-[76px] mb-20 mt-5 max-md:text-5xl max-lg:text-center">
              Yeteneklerim
            </h1>
          </div>
          <div className="flex gap-10 flex-wrap items-center justify-center  ">
            <SkillsCard
              icon={
                <SiJavascript
                  className="bg-[#F5FCFF]"
                  color="#F7DF1E "
                  size={53}
                />
              }
            />
            <SkillsCard
              icon={
                <FaReact className="bg-[#F5FCFF]" color="#61DAFB" size={53} />
              }
            />
            <SkillsCard
              icon={
                <RiTailwindCssFill
                  className="bg-[#F5FCFF]"
                  color="#0ea5e9"
                  size={53}
                />
              }
            />
            <SkillsCard
              icon={
                <TbBrandRedux
                  className="bg-[#F5FCFF]"
                  color="#764ABC"
                  size={53}
                />
              }
            />
          </div>
        </div>
      </div>
      <div
        id="section3"
        className="flex items-center justify-center w-full pt-12  mt-[150px]  gap-28 max-lg:flex-col max-md:mt-6 "
      >
        <div className="w-2/5 max-md:w-auto max-lg:w-auto ">
          <img width={813} height={996} src={AboutFoto} alt="" />
        </div>
        <div className=" w-3/5 max-md:w-auto ">
          <h1 className="font-bold text-[64px] leading-[76px] text-[#282938] mb-8 mt-3 max-md:text-[45px] max-lg:text-[50px] ">
            Hakkımda
          </h1>
          <p className="text-[#1C1E53] font-normal text-2xl max-md:text-xl max-lg:text-xl ">
            Merhaba! Ben Mehmet Çelebi Gezer.
            <br />
            <br />
            Bilgisayar programcılığı eğitimi alıyorum ve mobil uygulama
            geliştirme konusunda Jr seviyesinde uzmanlaşıyorum. Kariyerime web
            geliştirmeyle başladım, sonrasında React Native'e odaklanarak mobil
            uygulamalar üzerine yoğunlaştım. Mobil platformlarda projeler
            geliştirdim. API'lerle veri yönetimi konusunda deneyim kazanmak için
            çaba harcıyorum. Patika, Kodluyoruz ve BTK Akademi'den aldığım
            kurslarla kendimi sürekli geliştiriyorum. Sektörde yenilikçi
            çözümler sunmayı hedefliyor, farklı projelerde tecrübe kazanarak
            ilerlemeyi amaçlıyorum. İşime olan tutkum ve hedeflerime ulaşma
            kararlılığım, beni her zaman ileriye taşıyan en büyük motivasyon
            kaynağım olmuştur.
          </p>
        </div>
      </div>
      <div
        id="section4"
        className="   mt-[100px] max-md:flex-col max-md:w-auto "
      >
        <div className=" flex flex-col items-start justify-center  font-semibold text-[21px] leading-[32px] max-xl:text-start max-xl:pl-3 ">
          <h4 className="font-semibold text-[21px] leading-[32px] mt-[21px] ">
            Recent Projects
          </h4>
          <h1 className="font-bold text-[64px] leading-[76px] mb-[50px] ">
            My Portfolio
          </h1>
        </div>
        <div className="flex gap-10 items-center justify-center max-md:flex-col  max-xl:flex-wrap  ">
          <PortfolioCard
            title={"Ahuse"}
            img={Portfolio1}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            }
          />
          <PortfolioCard
            title={"App Dashboard"}
            img={Portfolio2}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            }
          />
          <PortfolioCard
            title={"Easy Rent"}
            img={Portfolio3}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            }
          />
        </div>
      </div>
      <div id="section5" className=" ">
        <div className="  mt-[200px] flex flex-col items-center justify-center max-md:mt-[100px] ">
          <div className="flex flex-col items-center justify-center mt-[56px]  ">
            <h4 className="font-semibold text-2xl text-[#282938] w-full mb-[56px] ml-3  ">
              İletişim
            </h4>
            <CustomForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

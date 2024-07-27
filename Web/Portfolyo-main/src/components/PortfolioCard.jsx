// eslint-disable-next-line react/prop-types
function PortfolioCard({ title, img, description }) {
  return (
    <div className="w-[554px] max-md:w-auto portfolio-card-shadow border rounded-t-[8px]">
      <div className="flex flex-col items-center justify-center">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className=" p-8 ">
        <h1 className="font-bold text-3xl ">{title}</h1>
        <p className="font-normal text-xl ">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;

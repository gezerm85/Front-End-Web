// eslint-disable-next-line react/prop-types
function CustomButton({ title, type, onClick, bgColor }) {
  return (
    <div className={`${bgColor}`}>
      <button
        onClick={onClick}
        className="px-[42.67px] py-[18.67px] border-[1.33px] border-[#5E3BEE] text-[#5E3BEE] hover:bg-[#5E3BEE] hover:text-[#F5FCFF] rounded-[5.33px] transition-colors duration-500  "
        type={type}
      >
        {title}
      </button>
    </div>
  );
}

export default CustomButton;

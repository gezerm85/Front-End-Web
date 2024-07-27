// eslint-disable-next-line react/prop-types
function SkillsCard({ icon }) {
  return (
    <div className="flex flex-col items-center justify-center  gap-8 bg-[#F5FCFF] p-8  custom-border duration-500    ">
      <div className="p-3  flex items-center justify-start bg-[#F5FCFF]  custom-drop">
        {icon}
      </div>
    </div>
  );
}

export default SkillsCard;

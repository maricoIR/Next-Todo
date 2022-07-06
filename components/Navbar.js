import { LogoGithub, LogoLinkedin, GlobeOutline } from "react-ionicons";

const Navbar = () => {
  return (
    <div className="bg-dark shadow-sm w-full py-5 md:px-8 px-5 flex items-center justify-between">
      <span className="font-medium text-xl text-white">Next Todo App</span>
      <div className="flex items-center gap-5">
        <LogoGithub
          color={"#fff"}
          width="23px"
          height="23px"
          cssClasses="cursor-pointer"
        />
        <LogoLinkedin
          color={"#fff"}
          width="23px"
          height="23px"
          cssClasses="cursor-pointer"
        />
        <GlobeOutline
          color={"#fff"}
          width="23px"
          height="23px"
          cssClasses="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;

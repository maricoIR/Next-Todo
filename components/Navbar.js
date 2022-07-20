import { LogoGithub, LogoLinkedin, GlobeOutline } from "react-ionicons";

const Navbar = () => {
  return (
    <div className="bg-dark shadow-sm w-full py-5 md:px-8 px-5 flex items-center justify-between">
      <span className="font-medium text-xl text-white">Next Todo App</span>
      <div className="flex items-center gap-5">
        <a href="https://github.com/maricoIR" target="_blank" rel="noreferrer">
          <LogoGithub
            color={"#fff"}
            width="23px"
            height="23px"
            cssClasses="cursor-pointer"
          />
        </a>
        <a
          href="https://matinkahrizi.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <GlobeOutline
            color={"#fff"}
            width="23px"
            height="23px"
            cssClasses="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

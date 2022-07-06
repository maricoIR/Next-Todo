import { ArrowUp } from "react-ionicons";

const GoToUp = (props) => {
  if (!props.showGoTop) {
    return <></>;
  }

  return (
    <div
      className="fixed bottom-5 right-5 bg-blue-500 rounded-full p-3 cursor-pointer flex items-center justify-center"
      onClick={() => window.scrollTo({ left: 0, top: 0, behavior: "smooth" })}
    >
      <ArrowUp
        color={"#fff"}
        cssClasses="cursor-pointer"
        width="25px"
        height="25px"
      />
    </div>
  );
};

export default GoToUp;

import { useState } from "react";
import { Add } from "react-ionicons";
import axios from "axios";

const AddTask = (props) => {
  const [disable, setDisable] = useState(true);
  const [input, setInput] = useState("");

  const inputChange = (event) => {
    setInput(event.target.value);

    if (event.target.value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const onEnter = (event) => {
    if (event.key === "Enter" && input) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    axios.post(`/api/tasks`, { input }).then((response) => {
      props.setData(response.data);
      setInput("");
      setDisable(true);
    });
  };

  return (
    <div className="w-full flex itms-center justify-center mt-12 px-5">
      <div className="md:w-[800px] w-full rounded-md py-3 flex items-start justify-between gap-5">
        <input
          type="text"
          className="lg:w-[80%] w-[85%] px-3 py-[14px] placeholder:text-base placeholder:text-gray-400 bg-dark text-white text-md font-medium outline-none border border-darkborder rounded-md"
          placeholder="New Task Title ..."
          value={input}
          onKeyPress={(e) => onEnter(e)}
          onChange={(e) => inputChange(e)}
        />
        <button
          type="button"
          onClick={() => onSubmit()}
          disabled={disable}
          className="p-[14px] rounded-md disabled:bg-gray-600 bg-blue-500 outline-none flex items-center gap-2 disabled:cursor-not-allowed cursor-pointer"
        >
          {disable ? (
            <Add color={"#d1cfc0"} width="25px" height="25px" />
          ) : (
            <Add color={"#fff"} width="25px" height="25px" />
          )}
          <span
            className={
              disable
                ? `text-gray-300 font-medium lg:block hidden`
                : `text-white font-medium lg:block hidden`
            }
          >
            Add Task
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddTask;

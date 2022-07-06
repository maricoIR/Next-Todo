import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { CheckmarkDone } from "react-ionicons";

const EditTask = () => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const targetId = router.query.taskId;

  useEffect(() => {
    axios.get(`/api/tasks/${targetId}`).then((response) => {
      setData(response.data.target.title);
      setInput(response.data.target.title);
    });
  }, []);

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
    axios.put(`/api/tasks/${targetId}`, { input }).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="w-full flex itms-center justify-center mt-12 px-5">
      <div className="md:w-[800px] w-full rounded-md py-3 flex items-start justify-between gap-5">
        <input
          type="text"
          className="lg:w-[78%] w-[85%] px-3 py-[14px] placeholder:text-base placeholder:text-gray-400 bg-dark text-white text-md font-medium outline-none border border-darkborder rounded-md"
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
            <CheckmarkDone color={"#d1cfc0"} width="25px" height="25px" />
          ) : (
            <CheckmarkDone color={"#fff"} width="25px" height="25px" />
          )}
          <span
            className={
              disable
                ? `text-gray-300 font-medium lg:block hidden`
                : `text-white font-medium lg:block hidden`
            }
          >
            Update Task
          </span>
        </button>
      </div>
    </div>
  );
};

export default EditTask;

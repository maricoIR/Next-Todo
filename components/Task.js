import { useState } from "react";
import { Checkmark, PencilOutline, TrashOutline, Add } from "react-ionicons";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";

const Task = (props) => {
  const deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`).then((response) => {
      toast.success(response.data.message);
      props.setData(response.data);
    });
  };

  const checkTask = (id) => {
    axios.put(`/api/tasks/complete/${id}`).then((response) => {
      props.setData(response.data);
    });
  };

  return (
    <>
      <div
        className={
          props.completed
            ? `md:w-[800px] w-full rounded-md py-3 px-1 shadow-sm border border-donedarkborder bg-donedark flex flex-col items-start gap-2`
            : `md:w-[800px] w-full rounded-md py-3 px-1 shadow-sm border border-darkborder bg-dark flex flex-col items-start gap-2`
        }
      >
        <div className="w-full flex items-center justify-between py-3 px-5">
          <span
            className={
              props.completed
                ? `font-medium text-lg text-gray-400 line-through`
                : `font-medium text-lg text-white`
            }
          >
            {props.title}
          </span>
          <div className="flex items-center gap-5">
            {props.completed ? (
              <Checkmark
                cssClasses="cursor-pointer"
                width="24px"
                height="24px"
                color={"#22c55e"}
                onClick={() => checkTask(props.id)}
              />
            ) : (
              <Checkmark
                cssClasses="cursor-pointer"
                width="24px"
                height="24px"
                color={"#d1cfc0"}
                onClick={() => checkTask(props.id)}
              />
            )}
            <TrashOutline
              cssClasses="cursor-pointer"
              width="24px"
              height="24px"
              color={"#ef4444"}
              onClick={() => deleteTask(props.id)}
            />
            <Link href={`/edit/${props.id}`}>
              <a className="block">
                <PencilOutline
                  cssClasses="cursor-pointer"
                  width="24px"
                  height="24px"
                  color={"#eab308"}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;

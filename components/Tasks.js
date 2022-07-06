import Task from "./Task";
import Loader from "../components/Loader";

const Tasks = (props) => {
  if (props.loading) return <Loader />;

  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center mt-8 px-5 mb-8">
      {props.data.list
        .slice(0)
        .reverse()
        .map((task) => {
          return (
            <Task
              title={task.title}
              completed={task.completed}
              key={task._id}
              id={task._id}
              setData={props.setData}
            />
          );
        })}
    </div>
  );
};

export default Tasks;

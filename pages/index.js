import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import GoToUp from "../components/GoToUp";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    axios.get("/api/tasks").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <>
      <GoToUp showGoTop={showGoTop} />
      <Navbar />
      <AddTask setData={setData} />
      <Tasks data={data} setData={setData} loading={loading} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const tasks = await task.find({});
//   return {
//     props: {
//       tasks: JSON.parse(JSON.stringify(tasks)),
//     },
//   };
// }

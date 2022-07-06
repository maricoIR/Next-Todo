import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import EditTask from "../../components/EditTask";
import GoToUp from "../../components/GoToUp";

export default function Edit() {
  const [showGoTop, setShowGoTop] = useState(false);

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
      <EditTask />
    </>
  );
}

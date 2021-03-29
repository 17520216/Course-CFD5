import CourseList from "../../components/CourseList";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
export default function CoursePage() {
  const { online, offline } = JSON.parse(localStorage.getItem("localHome"));
  console.log("online", online);
  return <CourseList online={online} offline={offline} />;
}

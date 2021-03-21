import Banner from "./components/Banner";
import CourseList from "../../components/CourseList";
import Different from "./components/Different";
import Terminal from "./components/Terminal";
import Gallery from "./components/Gallery";
import Action from "./components/Action";
import PopUpVideo from "../../components/PopUpVideo";

export default function Home() {
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList />
      <Different />
      <Terminal />
      <Gallery />
      <Action />
      <PopUpVideo />
    </main>
  );
}

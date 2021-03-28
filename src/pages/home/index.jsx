import Banner from "./components/Banner";
import CourseList from "../../components/CourseList";
import Different from "./components/Different";
import Terminal from "./components/Terminal";
import Gallery from "./components/Gallery";
import Action from "./components/Action";
import PopUpVideo from "../../components/PopUpVideo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  let [state, setState] = useState({
    online: [],
    offline: [],
    loading: true,
    review: [],
    gallery: {},
  });
  let { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home")
      .then((res) => res.json())
      .then((res) =>
        setState({
          ...res,
          loading: false,
        })
      );
  }, []);
  if (state.loading) return "...Loading";

  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList online={state.online} offline={state.offline} />
      <Different />
      <Terminal review={state.review} loading={state.loading} />
      <Gallery gallery={state.gallery} loading={state.loading} />
      <Action />
      <PopUpVideo />
    </main>
  );
}

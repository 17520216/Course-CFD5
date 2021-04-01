import userApi from "../../../api/userApi";
import { useEffect, useState, useContext } from "react";
import ReactLoading from "react-loading";
export default function YourCourse() {
  const [course, setCourse] = useState();
  // const [state, setState] = useState();
  useEffect(async () => {
    const res = await userApi.getProfileCourse();
    if (res) {
      setCourse(res);
    }
  }, []);
  if (!course)
    return <ReactLoading type="cylon" color="#00afab" height={30} width={55} />;

  let today = new Date();
  console.log("today", Date.parse(today));
  let startDay = course.data[1].course.opening_time;
  let spendTime = Date.parse(today) - Date.parse(startDay);
  console.log("spendTime", spendTime);

  let n = today.getMonth();
  console.log(n);

  console.log("date", Date.parse(startDay));
  return (
    <div className="tab2">
      {course.data.map((e, i) => (
        <Course
          key={i}
          img_course={e.course.thumbnail.link}
          name={e.course.title}
          date={e.course.opening_time}
          NoVideo={e.course.count_video}
          time="20 hours"
          students="30 học viên"
          rating="40"
        />
      ))}
    </div>
  );
}
function Course({ img_course, name, date, time, NoVideo, students, rating }) {
  return (
    <div className="item">
      <div className="cover">
        <img src={img_course} alt="" />
      </div>
      <div className="info">
        <a href="#" className="name">
          {name}
        </a>
        <div className="date">{date}</div>
        <div className="row">
          <div className>
            <img src="img/clock.svg" alt="" className="icon" />
            {time}
          </div>
          <div className>
            <img src="img/play.svg" alt="" className="icon" />
            {NoVideo}
          </div>
          <div className>
            <img src="img/user.svg" alt="" className="icon" />
            {students}
          </div>
        </div>
        <div className="process">
          <div className="line">
            <div className="rate" style={{ width: { rating } }} />
          </div>
          {rating}%
        </div>
        <div className="btn overlay round btn-continue">Tiếp tục học</div>
      </div>
    </div>
  );
}

export default function YourCourse() {
  return (
    <div className="tab2" style={{ display: "none" }}>
      <Course
        img_course="/img/img3.png"
        name="Frontend cơ bản"
        date="30/4/2021"
        time="54 giờ"
        NoVideo="29 video"
        students="30 học viên"
        rating="40%"
      />
      <Course
        img_course="/img/img7.png"
        name="Frontend nâng cao"
        date="3/10/2021"
        time="24 giờ"
        NoVideo="21 video"
        students="20 học viên"
        rating="40%"
      />
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
            <div className="rate" style={{ width: "40%" }} />
          </div>
          {rating}
        </div>
        <div className="btn overlay round btn-continue">Tiếp tục học</div>
      </div>
    </div>
  );
}

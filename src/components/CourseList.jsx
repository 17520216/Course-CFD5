import Course from "./Course";
export default function CourseList({ course }) {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khoa hoc offline</h2>
          </div>
          <div className="list row">
            <Course
              name="Frontend"
              des="Learn React"
              coach="Nghia Tran"
              status="dang_dien_ra"
              img_coach="/img/vuong-small.jpg"
              img="/img/img7.png"
            />
            <Course
              name="Backend"
              des="Learn NodeJS"
              coach="Nghia Tran"
              status="dang_dien_ra"
              img_coach="/img/nghia-small.png"
              img="/img/img6.png"
            />
            <Course
              name="Python"
              des="Artificial Intelligent"
              status="dang_dien_ra"
              coach="Vuong Dang"
              img_coach="/img/vuong-small.png"
              img="/img/img5.png"
            />
            <Course
              name="JavaScript"
              des="ES6"
              coach="Nguyen Huy"
              status="dang_dien_ra"
              img_coach="/img/nghia-small.png"
              img="/img/img8.png"
            />
            <Course
              name="PHP"
              des="PHP"
              coach="Quan Dang"
              status="dang_dien_ra"
              img_coach="/img/nghia-small.png"
              img="/img/img7.png"
            />
            <Course
              name=".Net"
              des="C# SQL"
              coach="Huynh Kiet"
              img_coach="/img/nghia-small.png"
              status="dang_dien_ra"
              img="/img/img6.png"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khoa hoc online</h2>
          </div>
          <div className="list row">
            <Course
              name="Frontend"
              des="Learn React"
              coach="Nghia Tran"
              status="dang_dien_ra"
              img_coach="/img/nghia-small.png"
              img="/img/img5.png"
            />
            <Course
              name="Backend"
              des="Learn NodeJS"
              coach="Nghia Tran"
              status="dang_dien_ra"
              img_coach="/img/vuong-small.png"
              img="/img/img4.png"
            />
            <Course
              name="Python"
              des="Artificial Intelligent"
              status="dang_dien_ra"
              coach="Vuong Dang"
              img_coach="/img/vuong-small.png"
              img="/img/img3.png"
            />
            <Course
              name="JavaScript"
              des="ES6"
              coach="Nguyen Huy"
              status="dang_dien_ra"
              img_coach="/img/vuong-small.png"
              img="/img/img2.png"
            />
            <Course
              name="PHP"
              des="PHP"
              coach="Quan Dang"
              status="dang_dien_ra"
              img_coach="/img/vuong-small.png"
              img="/img/img.png"
            />
            <Course
              name=".Net"
              des="C# SQL"
              coach="Huynh Kiet"
              status="dang_dien_ra"
              img_coach="/img/vuong-small.png"
              img="/img/img1.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

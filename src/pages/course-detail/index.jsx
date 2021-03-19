import Banner from "./components/Banner";
import Accor from "./components/Accor";
import Request from "./components/Request";

export default function CourseDetail() {
  return (
    <main className="course-detail" id="main">
      <Banner />
      <section className="section-2">
        <div className="container">
          <p className="des">
            Many Laravel apps don’t warrant the complexity of a full front-end
            framework like Vue or React. In this series, we’ll walk through a
            handful of simple ways to add dynamic functionality to your apps.
          </p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <Accor
            date="Ngay 1"
            des="CSS, CSS3, Flexbox, Grid"
            content="I'd like to demonstrate a powerful little pattern called
              “Server-Fetched Partials” that offers some tangible benefits over
              alternatives like VueJS for simple page interactions."
          />
          <Accor
            date="Ngay 2"
            des="CSS, CSS3, Flexbox, Grid"
            content="I'd like to demonstrate a powerful little pattern called
              “Server-Fetched Partials” that offers some tangible benefits over
              alternatives like VueJS for simple page interactions."
          />
          <Accor
            date="Ngay 3"
            des="CSS, CSS3, Flexbox, Grid"
            content="I'd like to demonstrate a powerful little pattern called
              “Server-Fetched Partials” that offers some tangible benefits over
              alternatives like VueJS for simple page interactions."
          />
          <Request />
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src="/img/avatar-lg.png" alt="" />
              </div>
              <div className="info">
                <div className="name">TRẦN NGHĨA</div>
                <div className="title">
                  Founder CFD &amp; Creative Front-End Developer
                </div>
                <p className="intro">
                  My education, career, and even personal life have been molded
                  by one simple principle; well designed information resonates
                  with people and can change lives.I have a passion for making
                  information resonate. It all starts with how people think.
                  With how humans work. As humans we have learned how to read
                  and write and while that is incredible, we are also already
                  hard-wired to do some things a bit more "automatically"
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="#">http://nghiatran.info</a>
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src="img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
            <div className="btn main btn-register round">đăng ký</div>
            <div className="btn-share btn overlay round btn-icon">
              <img src="img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    React JS
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Animation
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Scss, Grunt JS và Boostrap 4
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Front-end căn bản
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Front-end nâng cao
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Laravel framework
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

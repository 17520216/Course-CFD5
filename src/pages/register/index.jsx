import Head from "./components/Head";
import Register from "./components/Register";

export default function RegisterPage() {
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <Head />
            <Register />
          </div>
        </div>
      </section>
      {/* <div class="register-success">
              <div class="contain">
                  <div class="main-title">đăng ký thành công</div>
                  <p>
                      <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                      Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                      hoặc số điện thoại của bạn.
                  </p>
              </div>
              <a href="/" class="btn main rect">về trang chủ</a>
          </div> */}
    </main>
  );
}

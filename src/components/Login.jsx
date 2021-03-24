import { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { GlobalContext } from "../context/GlobalState";
export default function Login() {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { visibleLogin } = useContext(GlobalContext);
  const { makeLogin, hideLogin } = useContext(GlobalContext);
  const [form, setForm] = useState({
    password: "",
    phone: "",
    email: "",
    checked: false,
  });
  const [err, setErr] = useState({
    password: "",
    phone: "",
    email: "",
    checked: false,
  });
  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    const err = {};
    // /^\s+$/.test(form.email) || form.email === ""
    //   ? (err.email = "Please fill your email")
    //   : (err.email = null);
    !re.test(form.email)
      ? (err.email = "Please match the requested format")
      : (err.email = null);
    if (form.password === "nguyenan") {
      err.password = "";
    } else {
      err.password = "Please Try Again";
    }
    if (err.email === null && err.password === "") {
      makeLogin();
      hideLogin();
    }

    setErr(err);
    console.log(err);
    console.log("sendForm", form);
  };
  return ReactDOM.createPortal(
    <>
      <div className="popup-form popup-login" style={{ display: visibleLogin }}>
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            {err.email ? (
              <>
                <input
                  name="email"
                  style={{ border: "1px solid #e55d5d", marginBottom: 0 }}
                  value={form.email}
                  onChange={inputChange}
                  type="text"
                  placeholder="Email / Số điện thoại"
                />
                <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                  {err.email}
                </p>
              </>
            ) : (
              <input
                name="email"
                value={form.email}
                onChange={inputChange}
                type="text"
                placeholder="Email / Số điện thoại"
              />
            )}
            {!err.password ? (
              <input
                name="password"
                value={form.password}
                onChange={inputChange}
                type="password"
                placeholder="Mật khẩu"
              />
            ) : (
              <>
                <input
                  name="password"
                  style={{ border: "1px solid #e55d5d", marginBottom: 0 }}
                  value={form.password}
                  onChange={inputChange}
                  type="password"
                  placeholder="Mật khẩu"
                />
                <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                  {err.password}
                </p>
              </>
            )}
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input
                    name="checked"
                    value={form.checked}
                    onChange={(e) =>
                      setForm({ ...form, checked: e.target.checked })
                    }
                    type="checkbox"
                  />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <div className="btn rect main btn-login" onClick={onSubmit}>
              đăng nhập
            </div>
            <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
              </div>
            </div>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
          {/* email form */}
          <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="popup-form popup-login" style={{ display: "none" }}>
        <div className="wrap">
          <h2 className="title">Đăng ký</h2>
          <div className="btn btn-icon rect white btn-google">
            <img src="img/google.svg" alt="" />
            Google
          </div>
          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a>{" "}
            của CFD
          </p>
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div> */}
    </>,
    document.getElementById("root2")
  );
}

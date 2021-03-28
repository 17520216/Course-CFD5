import { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { GlobalContext } from "../context/GlobalState";
import useFormValidate from "../core/ReactHook/useFormValidate";
export default function Login() {
  const { visibleLogin } = useContext(GlobalContext);
  const { makeLogin, hideLogin } = useContext(GlobalContext);

  const {
    form,
    inputChange,
    onSubmit,
    error,
    setForm,
    status,
    setStatus,
  } = useFormValidate(
    {
      email: "",
      phone: "",
      password: "",
      checked: false,
    },
    {
      rule: {
        email: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          pattern: "password",
        },
      },
      message: {
        email: {
          required: "please fill your email",
        },
        password: {
          pattern:
            "Use 8 or more characters and combine letters, numbers, and symbols",
        },
      },
      option: {
        localStorage: "register-info",
      },
    }
  );

  useEffect(() => {
    if (status === "success") {
      hideLogin();
      makeLogin();
    }
    return () => {
      setStatus("Fail");
    };
  }, [status]);

  return ReactDOM.createPortal(
    <>
      <div className="popup-form popup-login" style={{ display: visibleLogin }}>
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            <>
              <input
                name="email"
                className={error?.name ? "login-error" : ""}
                value={form.email}
                onChange={inputChange}
                type="text"
                placeholder="Email / Số điện thoại"
              />
              <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                {error?.email}
              </p>
            </>
            <>
              <input
                name="password"
                className={error?.password ? "login-error" : ""}
                value={form.password}
                onChange={inputChange}
                type="password"
                placeholder="Mật khẩu"
              />
              <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                {error?.password}
              </p>
            </>
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

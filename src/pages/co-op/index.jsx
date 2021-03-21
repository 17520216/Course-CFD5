import React, { useRef, useState } from "react";
import "../../assets/css/custom.css";
import Head from "../project/component/Head";
export default React.forwardRef(function CoopPage(props, ref) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    title: "",
    content: "",
  });
  const [err, setErr] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    title: "",
    content: "",
  });
  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      content: "",
    });
  };
  const onSubmit = () => {
    const err = {};
    /^\s+$/.test(form.name) || form.name === ""
      ? (err.name = "Please fill your name")
      : (err.name = null);
    form.phone === ""
      ? (err.phone = "Please fill your phone")
      : form.phone.length < 9
      ? (err.phone = "Please match the requested format")
      : form.phone.length > 11
      ? (err.phone = "Please match the requested format")
      : (err.phone = null);
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      form.email
    )
      ? (err.email = "Please match the requested format")
      : (err.email = null);
    setErr(err);
    if (err.name === null && err.phone === null && err.email === null) {
      resetForm();
    }

    console.log("sendform:", form);
  };
  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <main className="register-course" id="main">
        <section className="section-1 wrap container">
          <Head
            title="Hợp Tác Cùng CFD"
            des="Đừng ngần ngại liên hệ với CFD để cùng nhau tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước."
          />
          <div className="div">
            <label>
              <p>
                Họ và tên<span>*</span>
              </p>
              {err.name ? (
                <div className="text-error">
                  <input
                    style={{ border: "1px solid #e55d5d", width: "100%" }}
                    value={form.name}
                    onChange={inputChange}
                    name="name"
                    type="text"
                    placeholder="Họ và tên bạn"
                  />
                  <p>{err.name}</p>
                </div>
              ) : (
                <input
                  value={form.name}
                  onChange={inputChange}
                  name="name"
                  type="text"
                  placeholder="Họ và tên bạn"
                />
              )}
            </label>
            <label>
              <p>
                Số điện thoại<span>*</span>
              </p>
              {err.phone ? (
                <div className="text-error">
                  <input
                    style={{ border: "1px solid #e55d5d", width: "100%" }}
                    value={form.phone}
                    onChange={inputChange}
                    name="phone"
                    type="text"
                    placeholder="Your phone"
                  />
                  <p>{err.phone}</p>
                </div>
              ) : (
                <input
                  value={form.phone}
                  onChange={inputChange}
                  name="phone"
                  type="text"
                  placeholder="Your phone"
                />
              )}
            </label>
            <label>
              <p>
                Email<span>*</span>
              </p>
              {err.email ? (
                <div className="text-error">
                  <input
                    style={{ border: "1px solid #e55d5d", width: "100%" }}
                    value={form.email}
                    onChange={inputChange}
                    name="email"
                    type="text"
                    placeholder="Your mail"
                  />
                  <p>{err.email}</p>
                </div>
              ) : (
                <input
                  value={form.email}
                  onChange={inputChange}
                  name="email"
                  type="text"
                  placeholder="Your mail"
                />
              )}
            </label>
            <label>
              <p>Website</p>
              <input
                onChange={inputChange}
                name="website"
                value={form.website}
                type="text"
                placeholder="Đường dẫn website http://"
              />
            </label>
            <label>
              <p>
                Tiêu đề<span>*</span>
              </p>
              <input
                onChange={inputChange}
                name="title"
                value={form.title}
                type="text"
                placeholder="Tiêu đề liên hệ"
              />
            </label>
            <label>
              <p>
                Nội dung<span>*</span>
              </p>
              <textarea
                onChange={inputChange}
                name="content"
                value={form.content}
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </label>
            <div className="btn main rect" onClick={onSubmit}>
              đăng ký
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

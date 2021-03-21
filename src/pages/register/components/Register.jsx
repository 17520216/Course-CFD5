import { useState } from "react";
export default function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    urlFace: "",
    coin: false,
    payment: "bank-transfer",
    suggest: "",
    gender: "male",
  });
  const [err, setErr] = useState({
    name: "",
    phone: "",
    email: "",
    urlFace: "",
    coin: false,
    payment: "bank-transfer",
    suggest: "",
    gender: "male",
  });
  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      urlFace: "",
      coin: false,
      payment: "bank-transfer",
      suggest: "",
      gender: "male",
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
      console.log("sendform:", form);
      resetForm();
    }
  };
  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOption = (e) => {
    setForm({
      ...form,
      payment: e,
    });
  };

  return (
    <div className="form">
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
        <p>
          URL Facebook<span>*</span>
        </p>
        <input
          onChange={inputChange}
          type="text"
          placeholder="https://facebook.com"
          value={form.urlFace}
          name="urlFace"
        />
      </label>
      <div style={{ display: "flex" }}>
        <label className="disable">
          <p>Gender</p>
          <div className="checkcontainer">
            <strong>Male</strong>
            <input
              name="gender"
              value="male"
              type="radio"
              onChange={(e) => {
                setForm({
                  ...form,
                  gender: e.target.value,
                });
              }}
              checked={form.gender === "male"}
            />
            <span className="checkmark" />
          </div>
        </label>
        <label className="disable">
          <div className="checkcontainer">
            <strong>Female</strong>
            <input
              name="gender"
              value="female"
              type="radio"
              onChange={(e) => {
                setForm({
                  ...form,
                  gender: e.target.value,
                });
              }}
              checked={form.gender === "female"}
            />
            <span className="checkmark" />
          </div>
        </label>
      </div>

      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          <input
            onChange={(e) => {
              setForm({
                ...form,
                coin: e.target.checked,
              });
            }}
            type="checkbox"
            value={form.coin}
            defaultChecked={false}
          />
          <span className="checkmark" />
        </div>
      </label>
      <label>
        <p>Hình thức thanh toán</p>
        <div className="select">
          <div className="head">Chuyển khoản</div>
          <div className="sub">
            <a
              onClick={() => handleOption("Bank-payment")}
              onChange={inputChange}
              href="#"
            >
              Chuyển khoản
            </a>
            <a
              onClick={() => handleOption("Craft-payment")}
              onChange={inputChange}
              href="#"
            >
              Thanh toán tiền mặt
            </a>
          </div>
        </div>
      </label>
      <label>
        <p>Ý kiến cá nhân</p>
        <input
          value={form.suggest}
          name="suggest"
          onChange={inputChange}
          type="text"
          placeholder="Mong muốn cá nhân và lịch bạn có thể học."
        />
      </label>
      <div className="btn main rect" onClick={onSubmit}>
        đăng ký
      </div>
    </div>
  );
}

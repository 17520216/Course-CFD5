import { useState } from "react";
import useFormValidate from "../../../core/ReactHook/useFormValidate";
export default function Register() {
  // const [form, setForm] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   urlFace: "",
  //   coin: false,
  //   payment: "bank-transfer",
  //   suggest: "",
  //   gender: "male",
  // });
  // const [err, setErr] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   urlFace: "",
  //   coin: false,
  //   payment: "bank-transfer",
  //   suggest: "",
  //   gender: "male",
  // });
  // const resetForm = () => {
  //   setForm({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     urlFace: "",
  //     coin: false,
  //     payment: "bank-transfer",
  //     suggest: "",
  //     gender: "male",
  //   });
  // };
  // const onSubmit = () => {
  //   const err = {};
  //   /^\s+$/.test(form.name) || form.name === ""
  //     ? (err.name = "Please fill your name")
  //     : (err.name = null);
  //   form.phone === ""
  //     ? (err.phone = "Please fill your phone")
  //     : form.phone.length < 9
  //     ? (err.phone = "Please match the requested format")
  //     : form.phone.length > 11
  //     ? (err.phone = "Please match the requested format")
  //     : (err.phone = null);
  //   !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //     form.email
  //   )
  //     ? (err.email = "Please match the requested format")
  //     : (err.email = null);
  //   setErr(err);
  //   if (err.name === null && err.phone === null && err.email === null) {
  //     console.log("sendform:", form);
  //     resetForm();
  //   }
  // };
  // const inputChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleOption = (e) => {
  //   setForm({
  //     ...form,
  //     payment: e,
  //   });
  // };
  const { form, inputChange, onSubmit, error, handleSetForm } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      urlFace: "",
      coin: false,
      payment: "bank-transfer",
      suggest: "",
      gender: "male",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        email: {
          required: true,
          pattern: "email",
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        urlFace: {
          pattern: "urlFace",
        },
      },
      message: {
        name: {
          required: "please fill your name",
        },
        email: {
          required: "please fill your email",
        },
        phone: {
          required: "please fill your phone",
        },
        urlFace: {
          required: "please fill your face",
        },
      },
      option: {
        localStorage: "register-info",
      },
    }
  );

  return (
    <div className="form">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        {error?.name ? (
          <div className="text-error">
            <input
              style={{ border: "1px solid #e55d5d", width: "100%" }}
              value={form.name}
              onChange={inputChange}
              name="name"
              type="text"
              placeholder="Họ và tên bạn"
            />
            <p>{error?.name}</p>
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
        {error?.phone ? (
          <div className="text-error">
            <input
              style={{ border: "1px solid #e55d5d", width: "100%" }}
              value={form.phone}
              onChange={inputChange}
              name="phone"
              type="text"
              placeholder="Your phone"
            />
            <p>{error?.phone}</p>
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
        {error?.email ? (
          <div className="text-error">
            <input
              style={{ border: "1px solid #e55d5d", width: "100%" }}
              value={form.email}
              onChange={inputChange}
              name="email"
              type="text"
              placeholder="Your mail"
            />
            <p>{error?.email}</p>
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

        {error?.urlFace ? (
          <div className="text-error">
            <input
              style={{ border: "1px solid #e55d5d", width: "100%" }}
              onChange={inputChange}
              type="text"
              placeholder="https://facebook.com"
              value={form.urlFace}
              name="urlFace"
            />
            <p>{error?.urlFace}</p>
          </div>
        ) : (
          <input
            onChange={inputChange}
            type="text"
            placeholder="https://facebook.com"
            value={form.urlFace}
            name="urlFace"
          />
        )}
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
              onChange={inputChange}
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
              onChange={inputChange}
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
            name="coin"
            onChange={handleSetForm}
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
              onClick={(e) => handleSetForm(e)}
              onChange={inputChange}
              href="#"
              data-value="Banker-payment"
              name="payment"
            >
              Chuyển khoản
            </a>
            <a
              onClick={(e) => handleSetForm(e)}
              onChange={inputChange}
              href="#"
              data-value="Craft-payment"
              name="payment"
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

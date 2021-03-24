import { useState, useEffect } from "react";
const patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
const patternPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const patternName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const patternFbUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export default function useFormValidate(initialValue, validate) {
  const { option } = validate;
  if (!option) option = {};
  let value = initialValue;
  if (option.localStorage) {
    value =
      JSON.parse(localStorage.getItem(option.localStorage)) || initialValue;
  }

  const [form, setForm] = useState(value);
  const [error, setError] = useState();
  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (option.localStorage) {
      localStorage.setItem(option.localStorage, JSON.stringify(form));
    }
    return () => {
      localStorage.removeItem(option.localStorage);
    };
  }, [form]);
  console.log(option);
  const onSubmit = () => {
    const { rule, message } = validate;
    const err = {};
    for (let i in rule) {
      let r = rule[i];
      if (r.required) {
        if (!form[i] || /^\s+$/.test(form[i])) {
          err[i] = message?.[i]?.required || "please fill something";
          continue; // s cho nay nó k work cho url face
        }
      }
      if (r.pattern) {
        let pattern = r.pattern;
        if (pattern === "email") {
          pattern = patternEmail;
        }
        if (pattern === "phone") {
          pattern = patternPhone;
        }
        if (pattern === "name") {
          pattern = patternName;
        }
        if (pattern === "urlFace") {
          pattern = patternFbUrl;
          console.log(pattern);
        }
        if (!pattern.test(form[i])) {
          err[i] =
            message?.[i]?.required?.pattern ||
            "Please fill match the format requested";
        }
      }
    }

    setError(err);
    console.log(form);
  };
  function handleSetForm(e) {
    if (e.target.name === "gender") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "payment") {
      console.log(e.target.attributes[1].textContent);
      setForm({
        ...form,
        [e.target.name]: e.target.attributes[1].textContent,
      }); //hoi lai anh Vuong
    }
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  }
  return {
    handleSetForm,
    form,
    inputChange,
    onSubmit,
    error,
  };
}

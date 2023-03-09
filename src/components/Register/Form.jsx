import { useState } from "react";
import s from "./Register.module.css";

const inputValues = {
  username: "",
  password: "",
};

function Form() {
  const [values, set_values] = useState(inputValues);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleValue = (e) => {
    set_values({ ...values, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    ///all
    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (!res.err && res.success) {
          if (res.msg) {
            setMessage(res.msg);
          }
          console.log(res);
          // document.cookie =
          //   "token" + " = " + res.token + "; expires = " + 8640000;
        } else {
          if (res.err) {
            setError(res.err);
          } else {
            setError("Something broke!");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Something broke!");
      });
  };
  ///-------------------///
  const clearForm = () => {
    set_values({ ...values, username: "", password: "" });
  };

  return (
    <form className={s.Form} onSubmit={handleRegister} noValidate>
      <h2 className={s.formTitle}>Register</h2>

      <div className={s.registerInput}>
        <p className={s.inputLogo}>
          <i className="fa-solid fa-user"></i>
        </p>
        <div className={`${s.AnimatedInput} AnimatedInput`}>
          <input
            type="text"
            required
            className={s.input}
            name="username"
            value={values.username}
            onChange={(e) => handleValue(e)}
          />
          <label>Username</label>
        </div>
      </div>

      <div className={s.registerInput}>
        <p className={s.inputLogo}>
          <i className="fa-solid fa-lock"></i>
        </p>
        <div className={`${s.AnimatedInput} AnimatedInput`}>
          <input
            type="text"
            required
            className={s.input}
            name="password"
            value={values.password}
            onChange={(e) => handleValue(e)}
          />
          <label>Password</label>
        </div>
      </div>

      <div className={s.checkbox}>
        <label htmlFor="checkbox" className="Checkbox">
          <input
            type="checkbox"
            id="checkbox"
            className="option-input"
            checked
            readOnly
          />
        </label>
        <p>I agree all statements in Terms of service.</p>
      </div>

      <div style={{ height: "15px", margin: "5px 0 0 15px", color: "purple" }}>
        {loading && <p>Please wait...</p>}
      </div>

      {message && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <div className="message">
            <p>{message}</p>
          </div>
        </div>
      )}

      {error && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <div className="error">
            <p>{error}</p>
          </div>
        </div>
      )}

      <div className={s.btns}>
        <input type="submit" value="Register" className={`BtnPurple`} />
        <input
          type="reset"
          className={`Btn`}
          value="Clear"
          onClick={clearForm}
        />
      </div>
    </form>
  );
}
/// /// /// /// ///
export default Form;

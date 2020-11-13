import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import validator from "validator";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const user = {
    name: "Emmanuel",
    email: "emma@admin.com",
    password: "123456",
    re_password: "123456",
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    ui: { msgError}
  } = state;

  
  const [values, handleInputChange] = useForm(user);

  const { name, email, password, re_password } = values;
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));

      //console.log("formulario correcto");
    }
  };
  //validacion formulario
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== re_password || password.length < 5) {
      dispatch(
        setError(
          '"Password should be at least 6 characters and match each other"'
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleSubmit}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
        />
        <input
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
        />
        <input
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
        />
        <input
          onChange={handleInputChange}
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="Confirm password "
          name="re_password"
          value={re_password}
        />
        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
        >
          Register
        </button>

        <Link className="link " to="/auth/login">
          Alredy registred?
        </Link>
      </form>
    </>
  );
};

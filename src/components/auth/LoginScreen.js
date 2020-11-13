import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    email: "emma@admin.com",
    password: "123456",
  });

  const state = useSelector((state) => state);
  const {
    ui: {loading}
  } = state;

  const { email, password } = values;
  const handleLogin = (e) => {
    e.preventDefault();    
    dispatch(startLoginEmailPassword(email, password));    
    reset();
  };
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  const isValidate = (email, password) => {
    console.log(email,password)
    if (email===undefined) {
      console.log('bad email')
      dispatch(setError("El email es necesario"));
      return false;
    } else if (password.trim <= 5) {
      console.log('bad pass')
      dispatch(setError("El password no es valido"));
      return false;
    }

    return true;
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button disabled={loading} className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create new Account
        </Link>
      </form>
    </>
  );
};

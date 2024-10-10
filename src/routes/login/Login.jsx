import toast from "react-hot-toast";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function Login() {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    const { username, password } = data;
    try {
      const res = await apiRequest.post("auth/login", { username, password });
      // console.log(res);
      toast.success("Login Susseccfully.");
      updateUser(res.data);
      // reset();
      navigate("/");
    } catch (err) {
      if (err.response) {
        toast.error("Server Error:", err.response.data);
      } else if (err.request) {
        toast.error("No Response from Server:", err.request);
      } else {
        console.error("Error:", err.message);
      }
    }
  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome back again</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            disabled={isSubmitting}
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <span className="errors">{errors?.username?.message}</span>
          )}
          <input
            name="password"
            type="password"
            disabled={isSubmitting}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="errors">{errors?.password?.message}</span>
          )}
          <button disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Login"}
          </button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;

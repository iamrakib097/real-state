import { useForm } from "react-hook-form";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    const { username, email, password } = data;
    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      toast.success("Register Account Susseccfully.");
      // reset();
      navigate("/login");
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
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create an Account</h1>
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
            name="email"
            type="text"
            placeholder="Email"
            disabled={isSubmitting}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="errors">{errors?.email?.message}</span>
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
            {isSubmitting ? "loading..." : "Register"}
          </button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;

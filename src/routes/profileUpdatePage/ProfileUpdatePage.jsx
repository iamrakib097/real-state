import { useContext, useState } from "react";
import "./profileupdatepage.scss";
import { AuthContext } from "../../context/AuthContext";
import noAvatar from "/noavatar.png";
import { useForm } from "react-hook-form";
import apiRequest from "../../lib/apiRequest";
function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: currentUser.username,
      email: currentUser.email,
    },
  });
  async function handleUpdate(data) {
    // console.log(data);
    const { username, email, password } = data;
    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
      });
      updateUser(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit(handleUpdate)}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              {...register("username", {
                required: "username is required",
              })}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              {...register("password")}
            />
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src={currentUser.avatar || noAvatar} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;

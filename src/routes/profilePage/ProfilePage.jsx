import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilepage.scss";
import noavatar from "/noavatar.png";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      logout();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="profilepage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || noavatar} alt="avatar" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

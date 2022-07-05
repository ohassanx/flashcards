import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();
  const { username } = useSelector(state => state.usernameReducer);
  const history = useHistory();

  const Logout = () => {
    dispatch(logout()).then(() => {
      history.go(0);
    });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "3%",
        right: "5%",
        left: "5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <ul>
        <li>
          <Link to="/">
            <h1 className="title has-text-light">Flashcard</h1>
            <h3 className="subtitle is-6 has-text-light">Omar Hassan Abdi</h3>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <span
            className="has-text-white"
            style={{ cursor: "pointer" }}
            onClick={Logout}
          >
            {username}
          </span>
        </li>
      </ul>
    </div>
  );
}

import React from "react";

import style from "./style.module.scss";

const Sidebar = () => {
  return (
    <div className={style.sidebar__content}>
      <h2>Dashboard</h2>
      <ul>
        <li className={style.active}>Requests</li>
      </ul>
      {/* <button>LogOut</button> */}
    </div>
  );
};

export default Sidebar;

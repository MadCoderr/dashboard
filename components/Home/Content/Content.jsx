import React from "react";

// components
import Sidebar from "@/components/Common/Sidebar/Sidebar";
import Request from "@/components/Request/Request";

import style from "./style.module.scss";

const Content = () => {
  return (
    <div className={style.home__wrapper}>
      <div className={style.sidebar__wrapper}>
        <Sidebar />
      </div>
      <div className={style.main__wrapper}>
        <Request />
      </div>
    </div>
  );
};

export default Content;

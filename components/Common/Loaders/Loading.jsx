import React from "react";

// assets
import LoaderIcon from "@/assets/Loader";

import style from "./style.module.scss";

const Loading = () => {
  return (
    <div className={style.wrapper}>
      <LoaderIcon />
    </div>
  );
};

export default Loading;

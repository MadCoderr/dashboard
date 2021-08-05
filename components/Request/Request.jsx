import React from "react";

// component
import Item from "./Item";

import style from "./style.module.scss";

const Request = () => {
  return (
    <div className={style.request__content}>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Request;

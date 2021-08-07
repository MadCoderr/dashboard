import React, { useState, useEffect } from "react";

// component
import Item from "./Item";

import style from "./style.module.scss";

// util
import { requestCollection } from "@/utils/collections";

const Request = () => {
  useEffect(() => {}, []);

  return (
    <div className={style.request__content}>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Request;

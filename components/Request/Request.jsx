import React, { useState, useEffect } from "react";

// component
import Item from "./Item";

import style from "./style.module.scss";

// util
import { requestCollection } from "@/utils/collections";

const Request = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    requestCollection.onSnapshot((snapShot) => {
      let newList = snapShot.docs.map((doc) => doc.data());
      setList(newList);
    });
  }, []);

  return (
    <div className={style.request__content}>
      {list.map((item) => {
        <Item data={item} />;
      })}
    </div>
  );
};

export default Request;

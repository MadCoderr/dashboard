import React, { useState, useEffect } from "react";

// component
import Item from "./Item";
import Loading from "../Common/Loaders/Loading";
import Modal from "../Common/Modal/Modal";

import style from "./style.module.scss";

// util
import { requestCollection } from "@/utils/collections";

const Request = () => {
  const [list, setList] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    requestCollection.onSnapshot((snapShot) => {
      let newList = snapShot.docs.map((doc) => doc.data());
      setList(newList);
    });
  }, []);

  const showModal = (_data) => {
    setData(_data);
    setIsOpen(true);
  };

  if (!list) {
    return <Loading />;
  }

  return (
    <div className={style.request__content}>
      {list.length === 0 && <h1>No Request Found</h1>}
      {list.map((item) => (
        <Item key={item.id} data={item} showModal={showModal} />
      ))}
      {isOpen && <Modal setIsOpen={setIsOpen} data={data} />}
    </div>
  );
};

export default Request;

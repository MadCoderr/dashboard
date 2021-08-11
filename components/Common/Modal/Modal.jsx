import React from "react";

import style from "./style.module.scss";

const Modal = ({ setIsOpen, data }) => {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className={style.modal__wrapper}>
      <div className={style.modal}>
        <div className={style.header}>
          <span onClick={handleClick}>&times;</span>
        </div>
        <div className={style.body}>
          <p>
            message has been sent to{" "}
            <strong>
              semester {data.semester}, section {data.section}
            </strong>
          </p>
        </div>
        <div className={style.footer}>
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

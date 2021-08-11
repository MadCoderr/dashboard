import React, { useState } from "react";

import style from "./style.module.scss";

// utils
import { send } from "@/utils/request";

// assets
import CircleIcon from "@/assets/Circle";

const Item = ({ data, showModal }) => {
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    setLoading(true);

    let message = `${data.name} has Reschedule ${data.subject} class to ${data.date.prettier} on ${data.time.prettier}`;

    send(message)
      .then((res) => {
        console.log(res);
        showModal(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className={style.item}>
      <div className={style.header}>
        <h3>
          <strong>{data.name}</strong>{" "}
          <span>
            requested to reschedule a class for semester {data.semester} section{" "}
            {data.section}
          </span>
        </h3>
        <span>1 day ago</span>
      </div>
      <div className={style.divider} />
      <div className={style.body}>
        <div className={style.info}>
          <p>
            <span>Subject:</span>
            <span>{data.subject}</span>
          </p>
          <p>
            <span>Semester:</span>
            <span>
              {data.semester}, {data.section}
            </span>
          </p>
          <p>
            <span>Date</span>
            <span>{data.date.prettier}</span>
          </p>
          <p>
            <span>Time</span>
            <span>{data.time.prettier}</span>
          </p>
        </div>
        <h4>Comments:</h4>
        <p className={style.comment}>{data.comment}</p>
      </div>
      <div className={style.footer}>
        <button
          className={`${style.approve} ${loading ? style.active : ""}`}
          onClick={sendMessage}
        >
          {loading && <CircleIcon />} Approve
        </button>
        <button className={style.reject}>Reject</button>
      </div>
    </div>
  );
};

export default Item;

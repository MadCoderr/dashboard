import React from "react";

import style from "./style.module.scss";

const Item = ({ data }) => {
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
        <button className={style.approve}>Approve</button>
        <button className={style.reject}>Reject</button>
      </div>
    </div>
  );
};

export default Item;

import React from "react";

import style from "./style.module.scss";

const Item = () => {
  return (
    <div className={style.item}>
      <div className={style.header}>
        <h3>
          <strong>Dr Izhar Ullah</strong>{" "}
          <span>requested to reschedule a class for semester 8 section B</span>
        </h3>
        <span>1 day ago</span>
      </div>
      <div className={style.divider} />
      <div className={style.body}>
        <div className={style.info}>
          <p>
            <span>Subject:</span>
            <span>Artificial Intelligence</span>
          </p>
          <p>
            <span>Semester:</span>
            <span>8, B</span>
          </p>
          <p>
            <span>Date</span>
            <span>22 September, 2021</span>
          </p>
          <p>
            <span>Time</span>
            <span>01:30pm - 3:00pm</span>
          </p>
        </div>
        <h4>Comments:</h4>
        <p className={style.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
          nihil odit dicta aliquam, deleniti ex tenetur laudantium laborum!
          Totam assumenda, in officia consectetur voluptas veniam corporis
          veritatis nihil temporibus dolore, ipsam neque est sequi amet
          excepturi vero nesciunt! Eaque excepturi totam facilis at. Omnis
          eveniet corrupti est provident dolores?
        </p>
      </div>
      <div className={style.footer}>
        <button className={style.approve}>Approve</button>
        <button className={style.reject}>Reject</button>
      </div>
    </div>
  );
};

export default Item;

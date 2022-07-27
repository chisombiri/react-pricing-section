import React from "react";
import "./sub-list.css";
import Sub from "../sub/Sub";

const SubList = () => {
  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h1>React Pricing</h1>
          <div className="--line"></div>

          <div className="--flex-center --my-2">
            <p>Monthly</p>
            <div>
              <span className="toggle-btn">
                <div className="ball"></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans">
          <Sub />
        </div>
      </div>
    </section>
  );
};

export default SubList;

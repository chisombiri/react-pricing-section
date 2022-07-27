import React from "react";
import "./sub.css";

const Sub = ({
  plan,
  theme,
  price,
  isBasic,
  isPro,
  isMaster,
  yearly,
  onBuy,
}) => {
  return (
    <div className="price-box --card">
      <div className={`box --p2 ${theme}`}>
        <p className="--text-light">{plan}</p>
        <h3 className="--text-light">
          <span>$</span>
          <span className="price">{price}</span>
          {yearly && (
            <p className="--text-light">
              <del>30% Off</del>
            </p>
          )}
        </h3>
        {isPro && <p className="--text-light">Everything in basic, and</p>}
        {isMaster && <p className="--text-light">Everything in pro, and</p>}
      </div>
      <div className="features">
        <ul>
          {isBasic && <li>Unlimited Screens</li>}
          {isBasic && <li>500gb bandwith</li>}
          {isBasic && <li>100gb storage</li>}

          {isPro && <li>Email support</li>}
          {isPro && <li>Github access</li>}
          {isPro && <li>15 backups</li>}

          {isMaster && <li>Push Notification</li>}
          {isMaster && <li>Top support</li>}
          {isMaster && <li>25 backups</li>}
        </ul>
        <button className={`btn ${theme}`} onClick={onBuy}>
          Get Now
        </button>
      </div>
    </div>
  );
};

export default Sub;

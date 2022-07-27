import { useState, useEffect } from "react";
import "./sub-list.css";
import Sub from "../sub/Sub";

const SubList = () => {
  const [basic, setBasic] = useState(8.99);
  const [pro, setPro] = useState(18.99);
  const [master, setMaster] = useState(38.99);

  const [yearly, setYearly] = useState(false);

  const handleClick = () => {
    setYearly(!yearly);
  };

  //yearly price calculation
  const calcYearly = (num, percent) => {
    return ((num * 12) / 100) * percent;
  };

  useEffect(() => {
    yearly ? setBasic(calcYearly(basic, 70).toFixed(0)) : setBasic(8.99);

    yearly ? setPro(calcYearly(pro, 70).toFixed(0)) : setPro(18.99);

    yearly ? setMaster(calcYearly(master, 70).toFixed(0)) : setMaster(38.99);
  }, [yearly]);

  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h1>React Pricing</h1>
          <div className="--line"></div>

          <div className="--flex-center --my2">
            <p>Monthly</p>
            <div className="--mx2">
              <span
                className={yearly ? "toggle-btn toggled" : "toggle-btn"}
                onClick={handleClick}
              >
                <div className={yearly ? "ball move" : "ball"}></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans">
          <Sub
            plan={"Basic"}
            theme={"theme1"}
            price={basic}
            isBasic={true}
            yearly={yearly}
            onBuy={() => alert(basic)}
          />
          <Sub
            plan={"Pro"}
            theme={"theme2"}
            price={pro}
            isPro={true}
            yearly={yearly}
            onBuy={() => alert(pro)}
          />
          <Sub
            plan={"Master"}
            theme={"theme3"}
            price={master}
            isMaster={true}
            yearly={yearly}
            onBuy={() => alert(master)}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;

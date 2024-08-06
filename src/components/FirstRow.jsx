import {
  TbShoppingBagPlus,
  TbShoppingBagCheck,
  TbShoppingBagX,
} from "react-icons/tb";
import { MdMonetizationOn } from "react-icons/md";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./FirstRow.css"

const FirstRow = () => {
  const iconMap = {
    TbShoppingBagPlus,
    TbShoppingBagCheck,
    TbShoppingBagX,
    MdMonetizationOn,
  };

  const trendMap = {
    FaSortDown,
    FaSortUp,
  };

  let firstRowObj = [
    {
      icon: "TbShoppingBagPlus",
      iconClr: "purple",
      text: "Total Orders",
      number: 75,
      trendClr: "#1ee61e",
      trend: "FaSortUp",
    },
    {
      icon: "TbShoppingBagCheck",
      iconClr: "green",
      text: "Total Delivered",
      number: 70,
      trendClr: "red",
      trend: "FaSortDown",
    },
    {
      icon: "TbShoppingBagX",
      iconClr: "red",
      text: "Total Cancelled",
      number: "05",
      trendClr: "#1ee61e",
      trend: "FaSortUp",
    },
    {
      icon: "MdMonetizationOn",
      iconClr: "pink",
      text: "Total Revenue",
      number: "$12k",
      trendClr: "red",
      trend: "FaSortDown",
    },
  ];

  return (
    <div className="row container-fluid">
      {firstRowObj.map((item, index) => {
        const IconComponent = iconMap[item.icon];
        const TrendComponent = trendMap[item.trend];
        return (
          <div className="col-12 col-md-2 mb-1" key={index}>
            <div className="card first-card">
              <div className="card-body">
                <IconComponent size={30} color={item.iconClr} />
                <p className="card-text">{item.text}</p>
                <div className="bottom">
                  <h5>{item.number}</h5>
                  <span
                    style={{ color: `${item.trendClr}` }}
                    className="d-flex align-items-center"
                  >
                    <TrendComponent /> 3%
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="col-12 col-md-4 mb-1">
        <div className="card first-card">
          <div className="card-body d-flex justify-content-between ps-4 pe-5">
            <div className="left">
              <span className="card-text">Net Profit</span>
              <h5 className="mt-1">$6759.25</h5>
              <span
                style={{ color: "#1ee61e" }}
                className="d-flex align-items-center"
              >
                <FaSortUp /> 3%
              </span>
            </div>
            <div style={{ width: "60px", height: "60px", textAlign: "center" }}>
              <CircularProgressbar value={70} text={`${70}%`} />
              <p style={{ fontSize: "8px" }}>The values are rounded off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;

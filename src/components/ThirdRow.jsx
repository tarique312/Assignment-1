import React from "react";
import Orders from "./Orders";
import "./ThirdRow.css"

const ThirdRow = () => {
  const feedbackArr = [
    {
      img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
      username: "Kristin Watson",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Happy with the service.",
    },
    {
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      username: "Johny Silver",
      rating: "⭐⭐",
      comment: "Bad experience order is still pending",
    },
    {
      img: "https://images.pexels.com/photos/2922450/pexels-photo-2922450.jpeg?auto=compress&cs=tinysrgb&w=600",
      username: "Angelina White",
      rating: "⭐⭐⭐⭐",
      comment: "Really happy with this app.",
    },
  ];
  return (
    <div className="row container-fluid mt-3 d-flex justify-content-evenly">
      <div className="col-12 col-md-8 mb-1">
        <Orders />
      </div>
      <div className="col-12 col-md-4 mb-1">
        <div className="card third-card p-2">
          <h5 className="text-light">Customer's Feedback</h5>
          <div className="scrollable-container" style={{ overflow: "scroll" }}>
            {feedbackArr.map((feedback,index) => (
              <div key={index}>
                <div className="profile">
                  <img
                    src={feedback.img}
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                  <span className="ms-2">{feedback.username}</span>
                </div>
                <div className="rating">{feedback.rating}</div>
                <div className="feedback">
                  <p>{feedback.comment}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;

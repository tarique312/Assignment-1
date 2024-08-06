import "./Orders.css";

const Orders = () => {
  let customersArr = [
    {
      img: "https://images.pexels.com/photos/2922450/pexels-photo-2922450.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Angelina white",
      orderNo: "111",
      amount: "$40.8",
      status: "delivered",
    },
    {
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Johny Silver",
      orderNo: "23424",
      amount: "$123.5",
      status: "pending",
    },
    {
      img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Kristin Watson",
      orderNo: "32345",
      amount: "365.25",
      status: "delivered",
    },
    {
      img: "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Savannah Nguyen",
      orderNo: "78649",
      amount: "123.45",
      status: "cancelled",
    },
  ];
  return (
    <div className="card third-card p-2 scrollable-container">
      <h5 className="text-light">Recent Orders</h5>
      <div className="container">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>Customers</td>
              <td>Order No.</td>
              <td>Amount</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {customersArr.map((cust, index) => (
              <tr key={index}>
                <td>
                  <span>
                    <img
                      src={cust.img}
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle me-2"
                    />
                    <span>{cust.name}</span>
                  </span>
                </td>
                <td>{cust.orderNo}</td>
                <td>{cust.amount}</td>
                <td
                  className={
                    cust.status === "delivered"
                      ? "badge rounded-pill text-bg-success mt-2"
                      : "badge rounded-pill text-bg-danger mt-2"
                  }
                >
                  {cust.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

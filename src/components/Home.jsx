import "react-circular-progressbar/dist/styles.css";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <h5>Dashboard</h5>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};

export default Home;

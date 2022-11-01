import RobotCard from "./RobotCard";

function RobotList({ robots }) {
  if (robots.lenght === 0) {
    return <h2>there is not robots</h2>;
  }

  return (
    <div>
      {robots.map((robot, index) => {
        return <RobotCard robot={robot} key={index}/>;
      })}
    </div>
  );
}

export default RobotList;

import RobotCard from "./RobotCard";
import { useContext } from "react";
import { RobotContext } from "../context/RobotContext";

function RobotList() {
  const { robots } = useContext(RobotContext);

  if (robots.lenght === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        There is not Robots
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {robots.map((robot) => {
        return <RobotCard key={robot.id} robot={robot} />;
      })}
    </div>
  );
}

export default RobotList;

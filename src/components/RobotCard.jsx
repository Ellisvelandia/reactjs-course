import { useContext } from "react";
import { RobotContext } from "../context/RobotContext";

function RobotCard({ robot }) {
  const { deleteRobots } = useContext(RobotContext);

  return (
    <div className="bg-gray-800 text-white p-4 m-4 rounded-md text-center">
      <h1 className="text-xl font-bold capitalize">{robot.name}</h1>
      <img className="w-full" src={robot.image} alt="robot" />
      <p className="text-gray-400 text-sm font-black m-3">
        {robot.description}
      </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteRobots(robot.id)}
      >
        Remove Robot
      </button>
    </div>
  );
}

export default RobotCard;

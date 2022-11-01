import React from "react";
import RobotForm from "./components/robotForm";
import RobotList from "./components/RobotList";
import { useEffect, useState } from "react";
import { robots as Data } from "./robots";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    setRobots(Data);
  }, []);

  function createRobots(robot) {
    setRobots([
      ...robots,
      {
        name: robot.name,
        id: robots.length,
        image: robot.image,
        description: robot.description,
      },
    ]);
  }
  return (
    <div>
      <RobotForm createRobots={createRobots} />
      <RobotList robots={robots} />
    </div>
  );
}

export default App;

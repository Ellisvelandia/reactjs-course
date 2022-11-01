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

  function createRobots(robotName) {
    setRobots([
      ...robots,
      {
        name: robotName,
        id: robots.length,
        image: "https://robohash.org/robot60",
        description: "robot del 666 que malote",
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

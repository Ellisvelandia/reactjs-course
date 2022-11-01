import { createContext, useEffect, useState } from "react";
import { robots as data } from "../data/robots";

export const RobotContext = createContext();

export function RobotContextProvider(props) {
  const [robots, setRobots] = useState([]);

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

  function deleteRobots(robotId) {
    setRobots(robots.filter((robot) => robot.id !== robotId));
  }

  useEffect(() => {
    setRobots(data);
  }, []);

  return (
    <RobotContext.Provider
      value={{
        robots,
        createRobots,
        deleteRobots,
      }}
    >
      {props.children}
    </RobotContext.Provider>
  );
}

import React from "react";

function RobotCard({robot}) {
  return (
    <div>
      <h1>{robot.name}</h1>
      <img src={robot.image} alt={robot.name} />
      <p>{robot.description}</p>
    </div>
  );
}

export default RobotCard;

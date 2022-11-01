import { useState } from "react";

function RobotForm({ createRobots }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createRobots(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add you robot"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default RobotForm;

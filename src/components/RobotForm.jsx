import { useState } from "react";

function RobotForm({ createRobots }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createRobots({
      name,
      image,
      description,
    });
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
        <input
          type="text"
          placeholder="Enter The URL of Image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <textarea
          placeholder="write the robot description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default RobotForm;

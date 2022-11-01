import { useState, useContext } from "react";
import { RobotContext } from "../context/RobotContext";

function RobotForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const { createRobots } = useContext(RobotContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createRobots({
      name,
      image,
      description,
    });
    setName("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Create Robot</h1>
        <input
          placeholder="Add your robot"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <input
          type="text"
          placeholder="Enter The URL of Image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="write the robot description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
}

export default RobotForm;

import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function EditProfile({ setShowForm }) {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [job, setJob] = useState(user.job);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ id: user.id, name, age, job });
    setShowForm((prevValue) => !prevValue);
  };
  return (
    <div className="formWrapper">
      <h1> Edit Details</h1>
      <form className="profileForm" onSubmit={handleSubmit}>
        <div className="formField">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formField">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="formField">
          <label>Job:</label>
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

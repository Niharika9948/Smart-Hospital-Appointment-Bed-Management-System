import { useState } from "react";
import axios from "axios";

function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addPatient = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/patients",
      { name, age },
      { headers: { Authorization: token } }
    );

    alert("Patient Added");
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Age" onChange={e => setAge(e.target.value)} />
      <button onClick={addPatient}>Save</button>
    </div>
  );
}

export default AddPatient;
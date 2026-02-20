import { useEffect, useState } from "react";
import axios from "axios";

function BedManagement() {
  const [beds, setBeds] = useState([]);
  const [bedNumber, setBedNumber] = useState("");
  const token = localStorage.getItem("token");

  const fetchBeds = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/beds",
      { headers: { Authorization: token } }
    );
    setBeds(res.data);
  };

  const addBed = async () => {
    await axios.post(
      "http://localhost:5000/api/beds",
      { bedNumber },
      { headers: { Authorization: token } }
    );
    alert("Bed Added");
    fetchBeds();
  };

  const dischargeBed = async (id) => {
    await axios.put(
      `http://localhost:5000/api/beds/discharge/${id}`,
      {},
      { headers: { Authorization: token } }
    );
    fetchBeds();
  };

  useEffect(() => {
    fetchBeds();
  }, []);

  return (
    <div>
      <h2>Bed Management</h2>

      <input placeholder="Bed Number"
        onChange={e => setBedNumber(e.target.value)} />
      <button onClick={addBed}>Add Bed</button>

      <h3>All Beds</h3>
      {beds.map((b) => (
        <div key={b._id}>
          <p>
            Bed {b.bedNumber} - {b.status}
          </p>
          {b.status === "Occupied" && (
            <button onClick={() => dischargeBed(b._id)}>
              Discharge
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default BedManagement;
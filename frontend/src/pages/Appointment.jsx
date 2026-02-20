import { useEffect, useState } from "react";
import axios from "axios";

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientId, setPatientId] = useState("");

  const token = localStorage.getItem("token");

  const fetchAppointments = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/appointments",
      { headers: { Authorization: token } }
    );
    setAppointments(res.data);
  };

  const createAppointment = async () => {
    await axios.post(
      "http://localhost:5000/api/appointments",
      { doctorName, date, time, patientId },
      { headers: { Authorization: token } }
    );
    alert("Appointment Booked");
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment Management</h2>

      <input placeholder="Patient ID"
        onChange={e => setPatientId(e.target.value)} />
      <input placeholder="Doctor Name"
        onChange={e => setDoctorName(e.target.value)} />
      <input type="date"
        onChange={e => setDate(e.target.value)} />
      <input type="time"
        onChange={e => setTime(e.target.value)} />

      <button onClick={createAppointment}>Book</button>

      <h3>All Appointments</h3>
      {appointments.map((a, index) => (
        <div key={index}>
          <p>{a.doctorName} - {a.date} - {a.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Appointment;
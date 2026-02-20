import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import BedManagement from "./pages/BedManagement";
import AddPatient from "./pages/AddPatient";

function App() {
  return (
    <div>
      <h1>🏥 Hospital Management System</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Login | </Link>
        <Link to="/dashboard">Dashboard | </Link>
        <Link to="/patients">Add Patient | </Link>
        <Link to="/appointments">Appointments | </Link>
        <Link to="/beds">Beds</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<AddPatient />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/beds" element={<BedManagement />} />
      </Routes>
    </div>
  );
}

export default App;
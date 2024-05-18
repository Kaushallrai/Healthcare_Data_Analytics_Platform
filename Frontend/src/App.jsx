import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PatientManagementPage from "./page/PatientManagement/PatientManagementPage";
import Dashboard from "./page/Dashboard";
import Demo from "./page/demo";
import PatientSummaryPage from "./page/Statistics/Patient-stats/PatientSummaryPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/patient-management"
            element={<PatientManagementPage />}
          />
          <Route path="/demo" element={<Demo />} />
          <Route
            path="/statistics/patient-summary"
            element={<PatientSummaryPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

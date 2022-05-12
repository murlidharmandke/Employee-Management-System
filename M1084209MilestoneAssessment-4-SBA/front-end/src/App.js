import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import EmployeesList from "./EmployeesList";
import AddEmp from "./AddEmp";
import EditEmp from "./EditEmp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/EditEmp/:id" element={<EditEmp />} />
        <Route path="/AddEmp" element={<AddEmp />} />
        <Route path="/EmployeesList" element={<EmployeesList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

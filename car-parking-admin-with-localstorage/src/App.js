import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddVehicle from "./components/CarParking/AddVehicle";
import EditVehicle from "./components/CarParking/EditVehicle";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Layout from "./components/Dashboard/Layout/Layout";
import ShowedData from "./components/ShowedData/ShowedData";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="list" element={<ShowedData />} />
            <Route path="add" element={<AddVehicle />} />
            <Route path="update/:id" element={<EditVehicle />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

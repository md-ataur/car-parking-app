import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Layout from './components/Dashboard/Layout/Layout';
// import AddVehicle from './components/CarParking/AddVehicle/AddVehicle';
import ReducerAddVehicle from './components/CarParking/AddVehicle/ReducerAddVehicle';
// import EditVehicle from './components/CarParking/EditVehicle/EditVehicle';
import ReducerEditVehicle from './components/CarParking/EditVehicle/ReducerEditVehicle';
// import ShowedData from './components/ShowedData/ShowedData';
import ReducerShowedData from './components/ShowedData/ReducerShowedData';

function App() {
    return (
        <BrowserRouter>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Dashboard />} />
                        {/* <Route path="list" element={<ShowedData />} /> */}
                        <Route path="list" element={<ReducerShowedData />} />

                        {/* <Route path="add" element={<AddVehicle />} /> */}
                        <Route path="add" element={<ReducerAddVehicle />} />

                        {/* <Route path="update/:id" element={<EditVehicle />} /> */}
                        <Route path="update/:id" element={<ReducerEditVehicle />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

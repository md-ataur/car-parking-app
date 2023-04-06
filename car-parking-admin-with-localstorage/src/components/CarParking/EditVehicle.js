import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFromDb } from "../../db/local-storage";
import Button from "../Snippets/Form/Button/Button";
import Form from "../Snippets/Form/Form";
import TextArea from "../Snippets/Form/TextArea/TextArea";
import TextInput from "../Snippets/Form/TextInput/TextInput";
import TextSelect from "../Snippets/Form/TextSelect/TextSelect";

const AddVehicle = () => {
  const { id } = useParams();
  const [vehicleInfo, setVehicleInfo] = useState();
  const [oldVehicleInfo, setOldVehicleInfo] = useState();
  const [message, setMessage] = useState();

  /**
   * Update vehilce
   * @param {*} e
   */
  const updateVehicle = (e) => {
    e.preventDefault();

    const updatedData = oldVehicleInfo.map((data) => {
      if (data.id === Number(id)) {
        return {
          ...vehicleInfo,
        };
      }

      return data;
    });

    if (updatedData) {
      localStorage.setItem("vehicles", JSON.stringify(updatedData));
      setMessage("Successfully updated");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Single vehicle
   */
  useEffect(() => {
    const oldData = getFromDb();
    if (oldData) {
      setVehicleInfo(oldData.find((data) => data.id === Number(id)));
    }
  }, []);

  /**
   * Get vehicles
   */
  useEffect(() => {
    const oldData = getFromDb();
    if (oldData) {
      setOldVehicleInfo(oldData);
    }
  }, []);

  return (
    <div className="main-form-area">
      <h2>Update Vehicle</h2>
      {message && <h3 style={{ color: "green" }}>{message}</h3>}

      <Form onSubmit={updateVehicle} className="form-area">
        <TextInput
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, license_number: e.target.value })}
          value={vehicleInfo?.license_number || ""}
          type="text"
          label="License Number"
          required
        />
        <TextSelect label="Car Type">
          <select
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, car_type: e.target.value })}
            value={vehicleInfo?.car_type || ""}
            required
          >
            <option value="">Select Car Type</option>
            <option value="microbus">Microbus</option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
          </select>
        </TextSelect>
        <TextInput
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, owner_name: e.target.value })}
          value={vehicleInfo?.owner_name || ""}
          type="text"
          label="Owner Name"
          required
        />
        <TextInput
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, owner_phone: e.target.value })}
          value={vehicleInfo?.owner_phone || ""}
          type="text"
          label="Owner Phone"
          required
        />
        <TextInput
          onChange={(e) =>
            setVehicleInfo({
              ...vehicleInfo,
              date_of_car_entry: e.target.value,
            })
          }
          value={vehicleInfo?.date_of_car_entry || ""}
          type="date"
          label="Date Of Car Entry"
          required
        />
        <TextInput
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, date_of_car_exit: e.target.value })}
          value={vehicleInfo?.date_of_car_exit || ""}
          type="date"
          label="Date Of Car Exit"
          required
        />
        <TextInput
          onChange={(e) =>
            setVehicleInfo({
              ...vehicleInfo,
              time_of_car_entry: e.target.value,
            })
          }
          value={vehicleInfo?.time_of_car_entry || ""}
          type="time"
          label="Time Of Car Entry"
          required
        />
        <TextInput
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, time_of_car_exit: e.target.value })}
          value={vehicleInfo?.time_of_car_exit || ""}
          type="time"
          label="Time Of Car Exit"
          required
        />
        <TextSelect label="Parking Charge" required>
          <select
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, charge: e.target.value })}
            value={vehicleInfo?.charge || ""}
            required
          >
            <option value="">Select Charge</option>
            <option value="500">Microbus 500 Tk.</option>
            <option value="300">Car 300 Tk.</option>
            <option value="800">Truck 800 Tk.</option>
          </select>
        </TextSelect>
        <div>
          <input
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, status: e.target.value })}
            checked={vehicleInfo?.status === "in"}
            value="in"
            type="radio"
            name="status"
            required
          />
          In
          <input
            onChange={(e) => setVehicleInfo({ ...vehicleInfo, status: e.target.value })}
            checked={vehicleInfo?.status === "out"}
            value="out"
            type="radio"
            name="status"
          />
          Out
        </div>
        <TextArea
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, address: e.target.value })}
          value={vehicleInfo?.address || ""}
          label="Address"
          cols="30"
          rows="5"
        />
        <div className="form-button-area">
          <Button type="submit">Update</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddVehicle;

import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { deleteDb, getFromDb } from "../../db/local-storage";
import Table from "../Snippets/Table/Table";
import "./ShowedData.css";

const ShowedData = () => {
  const [vehicles, setVehicles] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const getData = getFromDb();
    if (getData) {
      setVehicles(getData);
    }
    if (getData.length < 1) {
      setMessage("No data found");
    }
  }, [toggle]);

  let fields;
  if (vehicles) {
    fields = vehicles?.map((vehicle) => (
      <tr key={vehicle.id}>
        <td>{vehicle.license_number}</td>
        <td>{vehicle.owner_name}</td>
        <td>{vehicle.car_type}</td>
        <td>{vehicle.time_of_car_entry}</td>
        <td>{vehicle.time_of_car_exit}</td>
        <td>{vehicle.status}</td>
        <td>
          <div className="action-btn">
            <Link to={`/update/${vehicle.id}`} className="edit-icon">
              <FiEdit />
            </Link>
            <button
              onClick={() => {
                deleteDb(vehicle.id);
                setToggle(!toggle);
              }}
              className="delete-icon"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </td>
      </tr>
    ));
  }

  const columns = [
    "License no",
    "Owner name",
    "Vehicle type",
    "Entry time",
    "Exit time",
    "Status",
    "Action",
  ];

  return (
    <div className="main-area">
      <div className="table-main-box">
        <div className="table-top-title">
          {!message && (
            <div>
              <h2>Parking List</h2>
            </div>
          )}

          {message && <h2>{message}</h2>}
        </div>
        <Table isLoading={isLoading} fields={fields} columns={columns} />
      </div>
    </div>
  );
};

export default ShowedData;

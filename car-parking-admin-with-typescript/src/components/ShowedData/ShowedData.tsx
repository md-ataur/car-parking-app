import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Table from "../Snippets/Table/Table";

/**
 * Interface declared
 */
interface Vehicle {
  id: number;
  licenseNumber: string;
  firstName: string;
  vehicleType: string;
  entryDate: string;
  exitDate: string;
  entryTime: string;
  exitTime: string;
  charge: number;
  phone: string;
  status: string;
  address: string;
}

/**
 * Function Component
 * @returns
 */
const ShowedData: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /**
   * Get Api for fetching data
   */
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch("http://localhost:7000/v1/vehicles/");
      const resData = await response.json();
      setVehicles(resData.data);
      if (resData.data.length < 1) {
        setMessage("No data found");
      }
	  setIsLoading(false);
    };
    fetchData();
  }, []);

  /**
   * Delete Api for deleting data
   * @param id
   */
  const deleteApi = async (id: number) => {
    const alertMsg = window.confirm("Do you want to delete this item?");
    if (alertMsg) {
      try {
        const response = await fetch(`http://localhost:7000/v1/vehicles/${id}`, {
          method: "DELETE",
        });
        const resData = await response.json();

        if (resData.success) {
          const restData = vehicles.filter((vehicle) => vehicle.id !== id);
          setVehicles(restData);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  /**
   * Custom fields
   */
  let fields;
  if (vehicles) {
    fields = vehicles?.map((vehicle) => (
      <tr key={vehicle.id}>
        <td>{vehicle.licenseNumber}</td>
        <td>{vehicle.firstName}</td>
        <td>{vehicle.vehicleType}</td>
        <td>{vehicle.entryDate}</td>
        <td>{vehicle.exitDate}</td>
        <td>{vehicle.entryTime}</td>
        <td>{vehicle.exitTime}</td>
        <td>{vehicle.status}</td>
        <td>
          <div className="action-btn">
            <Link to={`/update/${vehicle.id}`} className="edit-icon">
              <FiEdit />
            </Link>
            <button
              onClick={() => {
                deleteApi(vehicle.id);
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
    "Entry date",
    "Exit date",
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
              <h2 data-testid="heading">Parking List</h2>
            </div>
          )}
          {message && <h2 data-testid="heading">{message}</h2>}
        </div>
        <Table isLoading={isLoading} fields={fields} columns={columns} />
      </div>
    </div>
  );
};

export default ShowedData;

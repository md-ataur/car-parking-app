/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useReducer } from "react";
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

interface State {
  data: Vehicle[];
  loading: boolean;
  error: Error | null;
}

interface Action {
  type: "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE" | "DELETE";
  payload?: any;
}

/**
 * Initial state declared
 */
const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

/**
 * Reducer callback function
 * @param state
 * @param action
 * @returns state
 */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "DELETE":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error();
  }
};

/**
 * Function Component
 * @returns
 */
const ReducerShowedData: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Get Api for fetching data
   */
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const response = await fetch("http://localhost:7000/v1/vehicles/");
        const resData = await response.json();
        if (resData.success) {
          dispatch({ type: "FETCH_SUCCESS", payload: resData.data });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error });
      }
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
          const restData = state.data.filter((vehicle: Vehicle) => vehicle.id !== id);
          dispatch({ type: "DELETE", payload: restData });
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
  if (state.data) {
    fields = state.data?.map((vehicle: Vehicle) => (
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
          {state.data !== null ? <h2>Parking List</h2> : <h2>Not Found</h2>}
        </div>
        <Table isLoading={state.loading} fields={fields} columns={columns} />
      </div>
    </div>
  );
};

export default ReducerShowedData;

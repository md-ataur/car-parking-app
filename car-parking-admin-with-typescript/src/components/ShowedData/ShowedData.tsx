import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Table from '../Snippets/Table/Table';
import './ShowedData.css';

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

const ShowedData: React.FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>();
    const [toggle, setToggle] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const response = await fetch('http://localhost:7000/v1/vehicles/');
            const json = await response.json();
            setVehicles(json.data);

            if (json.data.length < 1) {
                setMessage('No data found');
            }
        };

        fetchData();
        setIsLoading(false);
    }, []);

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
        'License no',
        'Owner name',
        'Vehicle type',
        'Entry date',
        'Exit date',
        'Entry time',
        'Exit time',
        'Status',
        'Action'
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

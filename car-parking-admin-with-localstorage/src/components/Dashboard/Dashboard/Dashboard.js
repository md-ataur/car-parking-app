/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { getFromDb } from '../../../db/local-storage';
import DataPieChart from '../../Chart/DataPieChart';
import './Dashboard.css';

const Dashboard = () => {
    const [vehicles, setVehicles] = useState();

    useEffect(() => {
        const getData = getFromDb();
        if (getData) {
            setVehicles(getData);
        }
    }, []);

    const totalParked = vehicles?.filter((vehicle) => vehicle.status === 'in');
    const emptySlot = vehicles?.filter((vehicle) => vehicle.status === 'out');
    const twoHours = vehicles?.find((vehicle) => vehicle.id === 76);

    const cars = vehicles?.filter(
        (vehicle) => vehicle.car_type === 'car' && vehicle.status === 'in'
    );
    const microbuses = vehicles?.filter(
        (vehicle) => vehicle.car_type === 'microbus' && vehicle.status === 'in'
    );
    const trucks = vehicles?.filter(
        (vehicle) => vehicle.car_type === 'truck' && vehicle.status === 'in'
    );

    return (
        <div>
            <DataPieChart cars={cars} microbuses={microbuses} trucks={trucks} />
            <div className="main-card-area">
                <div className="card-area">
                    <div className="card-middle">
                        <p>Vehicles Parked</p>
                        <h2>{totalParked?.length}</h2>
                    </div>
                    <div className="card-bottom-area">
                        <div className="card-bottom-left">
                            <p style={{ color: 'green' }}>Empty Slot</p>
                            <h3>{emptySlot?.length}</h3>
                        </div>
                        <div className="card-bottom-right">
                            <p style={{ color: 'red' }}>Parked more than 2 hours</p>
                            <h3>10</h3>
                        </div>
                    </div>
                </div>
                <div className="card-area">
                    <div className="card-middle">
                        <p>Cars Parked</p>
                        <h2>{cars?.length}</h2>
                    </div>
                    <div className="card-bottom-area">
                        <div className="card-bottom-left">
                            <p>Trucks Parked</p>
                            <h3>{trucks?.length}</h3>
                        </div>
                        <div className="card-bottom-right">
                            <p>Microbuses Parked</p>
                            <h3>{microbuses?.length}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

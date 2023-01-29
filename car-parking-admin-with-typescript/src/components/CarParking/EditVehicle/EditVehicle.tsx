/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../Snippets/Form/Button/Button';
import Form from '../../Snippets/Form/Form';
import TextArea from '../../Snippets/Form/TextArea/TextArea';
import TextInput from '../../Snippets/Form/TextInput/TextInput';
import TextSelect from '../../Snippets/Form/TextSelect/TextSelect';

/**
 * Interface declared
 */
interface Vehicle {
    license_number: string;
    name: string;
    vehicle_type: string;
    entry_date: string;
    exit_date: string;
    entry_time: string;
    exit_time: string;
    charge: number;
    phone: string;
    status: string;
    address: string;
}

/**
 * Function Component
 * @returns
 */
const EditVehicle: React.FC = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState<Vehicle>({
        license_number: '',
        name: '',
        vehicle_type: '',
        entry_date: '',
        exit_date: '',
        entry_time: '',
        exit_time: '',
        charge: 0,
        status: 'out',
        phone: '',
        address: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState();

    /**
     * Update vehilce
     * @param {*} e
     */
    const updateApi = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:7000/v1/vehicles/update/${Number(id)}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vehicle)
            });

            const resData = await response.json();

            if (resData.success) {
                setMessage(resData.message);
            } else {
                setMessage(resData.message);
            }
        } catch (error) {
            console.error(error);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    /**
     * Get vehicles
     */
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const response = await fetch('http://localhost:7000/v1/vehicles/');
            const resData = await response.json();
            const singleVehicle = resData.data.find((data: any) => data.id === Number(id));
            setVehicle({
                license_number: singleVehicle.licenseNumber,
                name: singleVehicle.firstName,
                vehicle_type: singleVehicle.vehicleType,
                entry_date: singleVehicle.entryDate,
                exit_date: singleVehicle.exitDate,
                entry_time: singleVehicle.entryTime,
                exit_time: singleVehicle.exitTime,
                charge: singleVehicle.charge,
                status: singleVehicle.status,
                phone: singleVehicle.phone,
                address: singleVehicle.address
            });
        };
        fetchData();
        setIsLoading(false);
    }, []);

    /**
     * OnChange Handler
     * @param e
     */
    const handleOnChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
    ) => {
        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="main-form-area">
            <h2>Update Vehicle</h2>
            {isLoading && <h3>Loading...</h3>}
            {message && <h3 style={{ color: 'brown' }}>{message}</h3>}

            <Form handleSubmit={updateApi} className="form-area">
                <>
                    <TextInput
                        className=""
                        type="text"
                        handleOnChange={handleOnChange}
                        name="license_number"
                        value={vehicle?.license_number}
                        label="License Number"
                        required
                    />
                    <TextSelect label="Car Type">
                        <select
                            onChange={handleOnChange}
                            name="vehicle_type"
                            value={vehicle?.vehicle_type}
                            required
                        >
                            <option value="">Select Car Type</option>
                            <option value="microbus">Microbus</option>
                            <option value="car">Car</option>
                            <option value="truck">Truck</option>
                        </select>
                    </TextSelect>
                    <TextInput
                        type="date"
                        handleOnChange={handleOnChange}
                        name="entry_date"
                        value={vehicle?.entry_date}
                        label="Entry Date"
                        required
                    />
                    <TextInput
                        type="date"
                        handleOnChange={handleOnChange}
                        name="exit_date"
                        value={vehicle?.exit_date}
                        label="Exit Date"
                        required
                    />
                    <TextInput
                        type="text"
                        handleOnChange={handleOnChange}
                        name="name"
                        value={vehicle?.name}
                        label="Name"
                        required
                    />
                    <TextInput
                        type="number"
                        handleOnChange={handleOnChange}
                        name="charge"
                        value={vehicle?.charge}
                        label="Charge"
                        required
                    />
                    <TextInput
                        type="time"
                        handleOnChange={handleOnChange}
                        name="entry_time"
                        value={vehicle?.entry_time}
                        label="Entry Time"
                        required
                    />
                    <TextInput
                        type="time"
                        handleOnChange={handleOnChange}
                        name="exit_time"
                        value={vehicle?.exit_time}
                        label="Exit Time"
                        required
                    />
                    <TextArea
                        handleOnChange={handleOnChange}
                        name="phone"
                        value={vehicle?.phone}
                        label="Phone"
                    />
                    <TextArea
                        handleOnChange={handleOnChange}
                        name="address"
                        value={vehicle?.address}
                        label="Address"
                    />
                    <div>
                        <input
                            type="radio"
                            onChange={handleOnChange}
                            checked={vehicle?.status === 'in'}
                            value="in"
                            name="status"
                            required
                        />
                        In
                        <input
                            type="radio"
                            checked={vehicle?.status === 'out'}
                            onChange={handleOnChange}
                            value="out"
                            name="status"
                        />
                        Out
                    </div>
                    <div className="form-button-area">
                        <Button type="submit">Submit</Button>
                    </div>
                </>
            </Form>
        </div>
    );
};

export default EditVehicle;

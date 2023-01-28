/* eslint-disable camelcase */
import React, { useState } from 'react';
import Button from '../Snippets/Form/Button/Button';
import Form from '../Snippets/Form/Form';
import TextArea from '../Snippets/Form/TextArea/TextArea';
import TextInput from '../Snippets/Form/TextInput/TextInput';
import TextSelect from '../Snippets/Form/TextSelect/TextSelect';

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

const AddVehicle: React.FC = () => {
    const [vehicleInfo, setVehicleInfo] = useState<Vehicle>({
        license_number: '',
        name: '',
        vehicle_type: '',
        entry_date: '',
        exit_date: '',
        entry_time: '',
        exit_time: '',
        charge: 0,
        status: 'in',
        phone: '',
        address: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();

    /**
     * Post api for adding
     */
    const addApi = async () => {
        setIsLoading(true);
        try {
            const response = fetch('http://localhost:7000/v1/vehicles/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vehicleInfo)
            });

            const responseData = await (await response).json();

            if ((await response).ok) {
                setMessage(responseData.message);
            } else {
                setMessage(responseData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setIsLoading(false);
    };

    /**
     * Form submit handler
     * @param e
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addApi();
        setVehicleInfo({
            license_number: '',
            vehicle_type: '',
            name: '',
            status: 'in',
            entry_date: '',
            exit_date: '',
            entry_time: '',
            exit_time: '',
            charge: 0,
            phone: '',
            address: ''
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    /**
     * OnChange Handler
     * @param e
     */
    const handleOnChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
    ) => {
        setVehicleInfo({
            ...vehicleInfo,
            [e.target.name]: e.target.value.trim()
        });
    };

    return (
        <div className="main-form-area">
            <h2>Add Vehicle</h2>
            {isLoading && <h3>Loading...</h3>}
            {message && <h3 style={{ color: 'brown' }}>{message}</h3>}

            <Form handleSubmit={handleSubmit} className="form-area">
                <>
                    {/* <input type="text" onChange={handleOnChange} name="name" value={vehicleInfo.name} /> */}
                    <TextInput
                        className=""
                        type="text"
                        handleOnChange={handleOnChange}
                        name="license_number"
                        value={vehicleInfo.license_number}
                        label="License Number"
                        required
                    />
                    <TextSelect label="Car Type">
                        <select
                            onChange={handleOnChange}
                            name="vehicle_type"
                            value={vehicleInfo?.vehicle_type}
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
                        value={vehicleInfo.entry_date}
                        label="Entry Date"
                        required
                    />
                    <TextInput
                        type="date"
                        handleOnChange={handleOnChange}
                        name="exit_date"
                        value={vehicleInfo.exit_date}
                        label="Exit Date"
                        required
                    />
                    <TextInput
                        type="text"
                        handleOnChange={handleOnChange}
                        name="name"
                        value={vehicleInfo.name}
                        label="Name"
                        required
                    />
                    <TextInput
                        type="number"
                        handleOnChange={handleOnChange}
                        name="charge"
                        value={vehicleInfo.charge}
                        label="Charge"
                        required
                    />
                    <TextInput
                        type="time"
                        handleOnChange={handleOnChange}
                        name="entry_time"
                        value={vehicleInfo.entry_time}
                        label="Entry Time"
                        required
                    />
                    <TextInput
                        type="time"
                        handleOnChange={handleOnChange}
                        name="exit_time"
                        value={vehicleInfo.exit_time}
                        label="Exit Time"
                        required
                    />
                    <TextArea
                        handleOnChange={handleOnChange}
                        name="phone"
                        value={vehicleInfo?.phone}
                        label="phone"
                    />
                    <TextArea
                        handleOnChange={handleOnChange}
                        name="address"
                        value={vehicleInfo?.address}
                        label="Address"
                    />
                    <div>
                        <input
                            type="radio"
                            onChange={handleOnChange}
                            checked={vehicleInfo?.status === 'in'}
                            value="in"
                            name="status"
                            required
                        />
                        In
                        <input type="radio" onChange={handleOnChange} value="out" name="status" />
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

export default AddVehicle;

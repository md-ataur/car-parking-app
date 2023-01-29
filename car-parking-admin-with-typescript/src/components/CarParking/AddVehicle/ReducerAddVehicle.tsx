/* eslint-disable camelcase */
import React, { useReducer } from 'react';
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

interface State {
    newData: Vehicle;
    loading: boolean;
    error: Error | null;
    message: string | undefined;
}

interface Action {
    type: 'SUBMIT' | 'SUCCESS' | 'ERROR';
    payload?: any;
    msg?: string;
}

/**
 * Initial state declared
 */
const initialState: State = {
    newData: {
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
    },
    loading: false,
    error: null,
    message: ''
};

/**
 * Reducer callback function
 * @param state
 * @param action
 * @returns state
 */
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SUBMIT':
            return { ...state, loading: true };
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                newData: action.payload,
                message: action.msg
            };
        case 'ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

/**
 * Function Component
 * @returns
 */
const ReducerAddVehicle: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    /**
     * Add api for adding vehicle
     * @param e
     */
    const addApi = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: 'SUBMIT' });
        try {
            const response = await fetch('http://localhost:7000/v1/vehicles/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state.newData)
            });

            const resData = await response.json();

            if (resData.success) {
                dispatch({
                    type: 'SUCCESS',
                    payload: { ...initialState.newData },
                    msg: resData.message
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                dispatch({
                    type: 'SUCCESS',
                    payload: { ...state.newData },
                    msg: resData.message
                });
            }
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error });
        }
    };

    /**
     * OnChange Handler
     * @param e
     */
    const handleOnChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
    ) => {
        dispatch({
            type: 'SUCCESS',
            payload: { ...state.newData, [e.target.name]: e.target.value }
        });
    };

    return (
        <div className="main-form-area">
            <h2>Add Vehicle</h2>
            {state.loading && <h3>Loading...</h3>}
            {state.message && <h3 style={{ color: 'brown' }}>{state.message}</h3>}

            <Form handleSubmit={addApi} className="form-area">
                <>
                    <TextInput
                        className=""
                        type="text"
                        handleOnChange={handleOnChange}
                        name="license_number"
                        value={state.newData.license_number}
                        label="License Number"
                        required
                    />
                    <TextSelect label="Vehical Type">
                        <select
                            onChange={handleOnChange}
                            name="vehicle_type"
                            value={state.newData?.vehicle_type}
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
                        value={state.newData.entry_date}
                        label="Entry Date"
                        required
                    />
                    <TextInput
                        type="date"
                        handleOnChange={handleOnChange}
                        name="exit_date"
                        value={state.newData.exit_date}
                        label="Exit Date"
                        required
                    />
                    <TextInput
                        type="text"
                        handleOnChange={handleOnChange}
                        name="name"
                        value={state.newData.name}
                        label="Name"
                        required
                    />
                    <TextInput
                        type="number"
                        handleOnChange={handleOnChange}
                        name="charge"
                        value={state.newData.charge}
                        label="Charge"
                        required
                    />
                    <TextInput
                        type="time"
                        handleOnChange={handleOnChange}
                        name="entry_time"
                        value={state.newData.entry_time}
                        label="Entry Time"
                        required
                    />
                    <TextInput
                        type="time"
                        handleOnChange={handleOnChange}
                        name="exit_time"
                        value={state.newData.exit_time}
                        label="Exit Time"
                        required
                    />
                    <TextArea
                        handleOnChange={handleOnChange}
                        name="phone"
                        value={state.newData?.phone}
                        label="Phone"
                    />
                    <TextArea
                        handleOnChange={handleOnChange}
                        name="address"
                        value={state.newData?.address}
                        label="Address"
                    />
                    <div>
                        <input
                            type="radio"
                            onChange={handleOnChange}
                            checked={state.newData?.status === 'in'}
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

export default ReducerAddVehicle;

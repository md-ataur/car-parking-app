/* eslint-disable no-empty-character-class */
/* eslint-disable @typescript-eslint/no-shadow */
import {
    fireEvent,
    render,
    screen,
    cleanup,
    waitFor,
    waitForElement,
    act
} from '@testing-library/react';
import ShowedData from '../ShowedData';
import apiCall from '../../../api/api';
import axios from 'axios';

// jest.mock('axios');

/* beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(apiCall);
});

afterEach(() => {
    jest.restoreAllMocks();
}); */

// Since we are not using shallow render we have to unmount or cleanup after every test
afterEach(cleanup);

describe('Vehicle Routes', () => {
    describe('GET request for fetching all data', () => {
        it('should render <h2> element', () => {
            render(<ShowedData />);
            const headingElement = screen.getByTestId('heading');
            expect(headingElement).toBeInTheDocument();
            // screen.getByRole('');
            // screen.debug();
        });

        it('should fetch data from the server', async () => {
            let response;
            await act(async () => {
                response = await apiCall('/vehicles');
            });

            expect(Array.isArray(response.data)).toBe(true);
            expect(response.data[0]).toMatchObject({
                id: expect.any(Number),
                licenseNumber: expect.any(String),
                firstName: expect.any(String),
                phone: expect.any(String),
                vehicleType: expect.any(String),
                charge: expect.any(Number),
                entryDate: expect.any(String),
                exitDate: expect.any(String),
                entryTime: expect.any(String),
                exitTime: expect.any(String),
                status: expect.any(String),
                address: expect.any(String)
            });
        });
    });

    /* describe('Delete request for deleting data', () => {
        it('should render <h2> element', async () => {
            let response;
            await act(async () => {
                response = await apiCall('/vehicles/2', 'DELETE');
            });
        });
    }); */
});

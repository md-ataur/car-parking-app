import {
  // fireEvent,
  // render,
  // screen,
  // cleanup,
  // waitFor,
  // waitForElement,
  act,
} from "@testing-library/react";
import apiCall from "../../../../api/api";

describe("GET request for a single data", () => {
  it("should fetch data from the server", async () => {
    const id = 14;
    let response;
    await act(async () => {
      response = await apiCall(`/vehicles/${id}`);
    });

    expect(response.data).toMatchObject({
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
      address: expect.any(String),
    });
  });
});

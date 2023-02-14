import Vehicle from "../models";

/**
 * Get all data
 * @returns
 */
/* const getVehicles = async () => {
  const vehicles = await Vehicle.find({});
  if (vehicles.length > 0) {
    return vehicles;
  } else {
    throw new Error("Vehicles Not found!", { cause: 6000 });
  }
}; */

/**
 * Add data
 * @param {data}
 * @returns
 */
interface IVehicle {
  licenseNumber: string;
  firstName: string;
  phone: string;
  vehicleType: string;
  charge: number;
  entryDate: Date;
  exitDate: Date;
  entryTime: Date;
  exitTime: Date;
  status: string;
  address?: string;
}

const addVehicle = async (data: IVehicle): Promise<IVehicle> => {
  const licenseNumberExists = await Vehicle.findOne({
    licenseNumber: data.licenseNumber,
  });

  if (licenseNumberExists) throw new Error("License number already exists");

  const response = await Vehicle.create({
    licenseNumber: data.licenseNumber,
    firstName: data.firstName,
    phone: data.phone,
    vehicleType: data.vehicleType,
    charge: data.charge,
    entryDate: data.entryDate,
    exitDate: data.exitDate,
    entryTime: data.entryTime,
    exitTime: data.exitTime,
    status: data.status,
    address: data.address,
  });

  return response;
};

/**
 * Get data by id
 * @param {id}
 * @returns
 */
// const getVehicleById = async (id) => Vehicle.findById(id);

/**
 * Update date
 * @param {id}
 * @param {data}
 * @returns
 */
/* const updateVehicle = async (id, data) => {
  const vehicle = await getVehicleById(id);
  if (!vehicle) {
    throw new Error("Nothing found to Update", { cause: 6003 });
  }

  const response = await Vehicle.findByIdAndUpdate(
    { _id: id },
    {
      licenseNumber: data.license_number,
      firstName: data.name,
      phone: data.phone,
      vehicleType: data.vehicle_type,
      charge: data.charge,
      entryDate: data.entry_date,
      exitDate: data.exit_date,
      entryTime: data.entry_time,
      exitTime: data.exit_time,
      status: data.status,
      address: data.address,
    },
    { new: true }
  );
  return response;
}; */

/**
 * Delete data
 * @param {id}
 * @returns
 */
/* const deleteVehicle = async (id) => {
  const vehicle = await getVehicleById(id);
  if (!vehicle) {
    throw new Error("Nothing found to Delete", { cause: 6004 });
  }
  await vehicle.remove();
  return vehicle;
}; */

export = {
  // getVehicles,
  addVehicle,
  // getVehicleById,
  // updateVehicle,
  // deleteVehicle,
};

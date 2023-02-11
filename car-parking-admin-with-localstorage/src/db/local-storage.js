/**
 * Get data
 * @returns
 */
const getFromDb = () => {
  let data = localStorage.getItem("vehicles");
  if (data) {
    data = JSON.parse(data);
  } else {
    return [];
  }

  return data;
};

/**
 * add data
 * @param {*}
 */
const addToDb = (data) => {
  const oldData = getFromDb();
  let message = "";

  if (oldData.length > 0) {
    localStorage.setItem("vehicles", JSON.stringify([...oldData, data]));
    message = "Successfully data added";
  } else {
    localStorage.setItem("vehicles", JSON.stringify([data]));
    message = "Successfully data added";
  }

  return message;
};

/**
 * delete data
 * @param {*} id
 * @returns
 */
const deleteDb = (id) => {
  const oldData = getFromDb();
  if (!oldData) {
    return;
  }

  const deleteData = oldData.filter((data) => data.id !== id);
  localStorage.setItem("vehicles", JSON.stringify(deleteData));
};

/**
 * clear localstorage
 */
const clearDb = () => {
  localStorage.removeItem("vehicles");
};

export { addToDb, deleteDb, getFromDb, clearDb };
